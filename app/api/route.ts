import db from "@/lib/db";
import { UserProfile, UserEmail, Users } from "@/lib/definitions";
import { User } from "@/lib/models";
import mongoose, { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    db();
    
    const form_user = request.nextUrl.searchParams;
    const form = {
        sub: form_user.get('sub'),
        email: form_user.get('email'),
        name: form_user.get('name')?.toLowerCase(),
        picture: form_user.get('picture'),
        status: 'online',
        last_message: 'Empty Message',
    }

    const verifyExisting = async (email: UserEmail) => {
        // Check user's existing
        // option is about users* or the connected user*
        const checking_user = await User.exists({
            email: email
        });

        return checking_user && checking_user._id;
    }

    const get_users = async (email: UserEmail, option: boolean) => {

        const agg = [{
            $lookup: {
                from: "messages",
                let: { user_id: "$_id" },
                pipeline: [{ 
                    $match: {
                        $or: [{
                            $and: [
                                { $expr: { $eq: ['$recieverId', '$$user_id']} },
                                { $expr: { $eq: ['$userId', await verifyExisting(email) && await verifyExisting(email)]} }, 
                            ]}, {  
                            $and: [
                                { $expr: { $eq: ['$userId', '$$user_id']} }, 
                                { $expr: { $eq: ['$recieverId', await verifyExisting(email) && await verifyExisting(email)]} }
                            ]}
                        ]}
                    }, 
                    // { $sort: {'createdAt': -1} },
                ],
                as: "messages"
                }}, {
                    $match: { email: option ? {$eq: email} : {$ne: email}
                }                
            }
        ];

        const users = await User.aggregate(agg);
        return users;
    }

    const verification = async (email: UserEmail, form_user: UserProfile, users: Users) => {
        if (users.length > 0) {
            const all_users = await get_users(email, false);
            return all_users;
        } else {
            const create_user = new User(form);
            create_user.save();
            const all_users = await get_users(email, false);
            return all_users;
        }
    }

    const currentUser = async (email: UserEmail) => {
        const myUser = await User.find({
            email: email
        }).exec();
        return myUser;
    }

    const users = await get_users(form.email, true);
    const verify = await verification(form.email, form, users);
    const geCurrentUser = await currentUser(form.email);
    
    return NextResponse.json([verify, geCurrentUser]);
}

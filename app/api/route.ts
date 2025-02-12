import db from "@/lib/db";
import { UserForm, UserEmail, Users } from "@/lib/definitions";
import { User } from "@/lib/models";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    db();
    
    const form_user = request.nextUrl.searchParams;
    const form = {
        sub: form_user.get('sub'),
        email: form_user.get('email'),
        name: form_user.get('name'),
        picture: form_user.get('picture'),
    }

    // const email: Readonly<UserEmail> = form.email

    const get_users = async (email: UserEmail, option: boolean) => {
        const users = await User.aggregate([
            {
                $match: {
                    email: option ? {$eq: email} : {$ne: email}
                }
            }
        ]);
        return users;
    }

    const verification = async (email: UserEmail, form_user: UserForm, users: Users) => {
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

    const users = await get_users(form.email, true);
    const verify = await verification(form.email, form, users);
    
    return NextResponse.json(verify);
}

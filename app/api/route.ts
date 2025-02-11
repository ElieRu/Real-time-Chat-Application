import db from "@/lib/db";
import { Users } from "@/lib/models";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    db();

    // const user: Session | undefined | null = await getSession();
    const get_users = async (email: string, option: boolean) => {
        const users = await Users.aggregate([
            {
                $match: {
                    email: option ? {$eq: email} : {$ne: email}
                }
            }
        ]);
        return users;
    }

    const verification = async (email: string, users: string[]) => {
        if (users.length > 0) {
            const all_users = await get_users(email, false);
            return all_users;
        } else {
            const formUser = {
                email: email
            }
            const create_user = new Users(formUser);
            create_user.save();
            const all_users = await get_users(email, false);
            return all_users;
        }
    }

    const users = await get_users('user@gmail.com', true);
    const verify = await verification('user@gmail.com', users);
    
    console.log('request');
    return NextResponse.json(verify);
}

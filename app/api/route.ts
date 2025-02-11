import db from "@/lib/db";
import { Users } from "@/lib/models";
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

    // const user: Session | undefined | null = await getSession();
    const get_users = async (email: string | null, option: boolean) => {
        const users = await Users.aggregate([
            {
                $match: {
                    email: option ? {$eq: email} : {$ne: email}
                }
            }
        ]);
        return users;
    }

    const verification = async (email: string | null, form_user: object, users: string[]) => {
        if (users.length > 0) {
            const all_users = await get_users(email, false);
            return all_users;
        } else {
            console.log(form);
            const create_user = new Users(form);
            create_user.save();
            const all_users = await get_users(email, false);
            return all_users;
        }
    }

    const users = await get_users(form.email, true);
    const verify = await verification(form.email, form_user, users);
    
    return NextResponse.json(verify);
}

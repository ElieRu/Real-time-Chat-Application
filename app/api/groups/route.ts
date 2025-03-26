import { Group } from "@/lib/models";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const groups = await Group.find({}).exec();
    return NextResponse.json(groups);
}

export async function POST(request: NextRequest) {
    const groupForm = await request.json();
    
    const group = new Group(groupForm);
    try {
        await group.save();
        const newList = await Group.find({});
        return NextResponse.json(newList);
    } catch (error) {
        return NextResponse.json(error);
    }
}
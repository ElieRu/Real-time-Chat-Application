import { Group } from "./definitions";

export async function createNewGroup(form: Group) {
    try {
        const request = await fetch (`/api/groups`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(form)
        });

        const groups = await request.json();
        return groups;
    } catch (error) {
        console.log(error);        
    }
}


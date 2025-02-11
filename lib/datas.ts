import { User } from "./definitions";

export const fetchUsers = async (user: User) => {
    try {
        const response = await fetch(`/api`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: 'user'})
        })
        const users = await response.json();
        console.log(user);
        return users;
    } catch (error) {
        console.log(error);        
    }
}
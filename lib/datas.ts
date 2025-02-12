import { UserForm } from "./definitions";

export const fetchUsers = async (user: UserForm) => {
    try {
        const response = await fetch(`/api?sub=${user?.sub}&email=${user?.email}&name=${user?.name}&picture=${user?.picture}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const users = await response.json();
        return users;
    } catch (error) {
        console.log(error);        
    }
}
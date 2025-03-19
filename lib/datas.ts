import { selected_user, UserForm } from "./definitions";

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

export const fetchMessages = async (selected_user: selected_user) => {
    try {
        const response = await fetch(`http://localhost:3001/messages?selected_user=${selected_user}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const messages = await response.json();
        // console.log(messages);

        return messages;
    } catch (error) {
        console.log(error);
    }
}



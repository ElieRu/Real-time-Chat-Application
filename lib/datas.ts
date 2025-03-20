import { selected_user, UserProfile, VerifyCurrent } from "./definitions";

export const currentUser = (email: string | null | undefined) => {
    console.log(email);
    // try {
    //     const response = await fetch(`/api?email=${email}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     const currentUser = await response.json();
    //     console.log(currentUser);
    // } catch (error) {
    //     console.log(error);        
    // }
}

export const fetchUsers = async (user: UserProfile, currentUser: VerifyCurrent) => {
    try {
        const response = await fetch(`/api?sub=${user?.sub}&email=${user?.email}&name=${user?.name}&picture=${user?.picture}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const users = await response.json();
        if (currentUser) {
            // Return the current user when it's defined
            // Else You get all users
            return users[1][0];
        } else {
            return users[0];
        }
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

        return messages;
    } catch (error) {
        console.log(error);
    }
}



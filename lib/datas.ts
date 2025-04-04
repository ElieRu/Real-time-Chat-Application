import { findMessages, UserProfile, VerifyCurrent } from "./definitions";

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

export const fetchMessages = async (findMessages: findMessages) => {
    try {
        const response = await fetch(`http://localhost:3001/messages?userId=${findMessages.userId}&recieverId=${findMessages.recieverId}`, {
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

export const fetchGroups = async () => {
    try {
        const response = await fetch(`/api/groups`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const groups = await response.json();

        return groups;
    } catch (error) {
        console.log(error);
    }
}

// 

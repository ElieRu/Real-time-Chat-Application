import { findMessages, UserProfile, VerifyCurrent } from "./definitions";
import { getUnreadedMsg, getLastMsg } from "./utils";

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
            const all_users = users[0];
            for (let i = 0; i < all_users.length; i++) {
                all_users[i].unreaded_message = getUnreadedMsg(all_users[i].last_message);
                // Get The Last Message
                all_users[i].last_message = getLastMsg(all_users[i].last_message);
            }
            return all_users;
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

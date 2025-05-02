import { UserProfile } from "@auth0/nextjs-auth0/client";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Messages, VerifyCurrent } from "./definitions";
import { fetchUsers } from "./datas";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getCurrentUser = async (
  user: UserProfile | undefined,
  current_user: VerifyCurrent
  ) => {
    if (user) {
      return await fetchUsers(user, current_user);
    }
  };

  export const formatTime = (isoString: string | undefined | null) => {
    if (isoString) {
      const date = new Date(isoString);
      const hours = date.getUTCHours()+2;
      const minutes = date.getUTCMinutes();
      return `${hours}:${minutes}`;
    }
  }

  export const getLastMsg = (msg: string | string[] | null | undefined | unknown) => {
    let TmpMsg = {};
    if (Array.isArray(msg)) {
      const lastElementArray = msg.slice(-1);
      TmpMsg = lastElementArray[0];

      if (msg.length == 0) {
        return 'Empty Message'
      }
      
      if ("content" in TmpMsg) {
        return TmpMsg.content;
      } 
      else {
        return ''
      }
    }
  }

  const UnreadedMessages = (messages: Messages, receiverId: string) => {
    const unreaded_msg = [];
    let Tmp = {};
    
    for (let i = 0; i < messages.length; i++) {
      Tmp = messages[i];
      if ('seen' in Tmp && 'userId' in Tmp) {
        if (Tmp.seen === false && Tmp.userId === receiverId) {
          unreaded_msg.push(messages[i]);
        }
      }
    }

    return unreaded_msg;
  }

  export const getUnreadedMsg = (messages: Messages, receiverId: string) => {
    const unreaded_msg = UnreadedMessages(messages, receiverId);    
    return unreaded_msg;
  }




import { UserProfile } from "@auth0/nextjs-auth0/client";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { VerifyCurrent } from "./definitions";
import { fetchUsers } from "./datas";
import { useEffect } from "react";

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

  export const getLastMsg = (msg: string | string[] | null | undefined) => {
    if (Array.isArray(msg)) {
      return msg.shift();
    }    
  }
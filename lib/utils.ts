import { UserProfile } from "@auth0/nextjs-auth0/client";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { VerifyCurrent } from "./definitions";
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
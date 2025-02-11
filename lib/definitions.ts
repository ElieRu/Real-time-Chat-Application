import { UserProfile } from "@auth0/nextjs-auth0/client";

export type User = UserProfile | undefined

export type UserSub = Pick<UserProfile, "sub"> | null | undefined | string







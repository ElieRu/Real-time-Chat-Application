import { UserProfile } from "@auth0/nextjs-auth0/client";

export type UserForm = UserProfile

export type UserSub = Pick<UserProfile, "sub"> | null | undefined | string

export type Users = UserForm[]

export type UserEmail = Pick<UserProfile, 'email'> | null | undefined | string

export type OnChange = (v: string) => string

export type UserName = Pick<UserProfile, 'name'>

export type UniqueUser = Readonly<UserName> | null | undefined




import { UserProfile as UserImported } from "@auth0/nextjs-auth0/client"

export type UserForm = UserImported

export interface UserFieldsAdded {
    status?: string | null | undefined,
    last_message?: string | null | undefined
}

export type UserProfile = UserImported & UserFieldsAdded

export type UserSub = Pick<UserImported, "sub"> | null | undefined | string

export type Users = UserForm[]

export type UserEmail = Pick<UserImported, 'email'> | null | undefined | string

export type OnChange = (v: string) => string

export type UserName = Pick<UserImported, 'name'>

export type UniqueUser = Readonly<UserName> | null | undefined

export type UserDatas = {
    name: string, 
    picture: string,
    status: string | null
} 
export interface Message {
    _id: string | null | undefined;
    user_sub: string;
    selected_user_sub: string | null | undefined;
    picture: string;
    content: string;
    time: string;
    createdAt: string | null | undefined;
    updatedAt: string | null | undefined;
    __v: number
  };

  export type Messages = Message[];

  export type SubType = Readonly<string>
  export type PictureType = Readonly<string>
  export type findMessages = {
    user_sub: string | null | undefined,
    selected_user: string | null | undefined
}

  export type VerifyCurrent = boolean | undefined | null
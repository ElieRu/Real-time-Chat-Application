import { UserProfile as UserImported } from "@auth0/nextjs-auth0/client"

export type UserForm = UserImported

export interface UserFieldsAdded {
    status?: string | null | undefined,
    last_message?: string | null | undefined,
    _id?: string | null | undefined;
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
    userId: string | null | undefined;
    recieverId: string | null | undefined;
    content: string;
    createdAt: string | null | undefined;
    updatedAt: string | null | undefined;
    __v: number
  };

  export type Messages = Message[];

  export type SubType = Readonly<string>
  export type PictureType = Readonly<string>
  export type findMessages = {
    recieveId: string | null | undefined,
    userId: string | null | undefined
}


  export type VerifyCurrent = boolean | undefined | null

  export interface Group {
    title: string | null | undefined,
    userId: string | null | undefined
  };

  export type GroupForm = {
    title: string,
    userId: string
  };

  export type Groups = Group[];
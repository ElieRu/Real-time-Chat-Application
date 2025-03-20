import { UserProfile } from "@/lib/definitions";
import Image from "next/image";
import React from "react";

const UserItem = ({ user, onClick }: { user: UserProfile, onClick: (user: UserProfile) => UserProfile }) => {

  const handleClick = (user: UserProfile) => {
    onClick(user);
  };
  
  return (
    <div
      className="mt-2 flex items-center border rounded-lg p-2 hover:bg-green-500 hover:text-white hover:drop-shadow-md active:bg-green-300"
      style={{ cursor: "pointer" }}
      onClick={() => handleClick(user)}
    >
      <div className="mr-2">
        <Image
          height={50}
          width={50}
          src={user?.picture ? user?.picture : "/me.png"}
          alt="User Profile"
          className="rounded-full"
        ></Image>
      </div>
      <div className="flex w-full justify-between items-center">
        <div>
          <strong className="capitalise">{user?.name}</strong>
          <div>
            <span className="text-sm">Hello</span>
          </div>
        </div>
        <span className="text-sm">{user?.status}</span>
      </div>
    </div>
  );
};

export default UserItem;

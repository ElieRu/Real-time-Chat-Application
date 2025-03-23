import { UserProfile } from "@/lib/definitions";
import Image from "next/image";
import React, { useEffect } from "react";

const UserItem = ({
  user,
  onClick,
  last_message
}: {
  user: UserProfile;
  onClick: (user: UserProfile) => UserProfile;
  last_message: unknown[]
}) => {
  const handleClick = (user: UserProfile) => {
    onClick(user);
  };

  // useEffect(() => {
  //   console.log(last_message);
  // }, []);

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
          <strong className="capitalize">{user?.name}</strong>
          <div>
            <span className="text-gray-400" style={{ fontSize: "12px" }}>
              {user?.last_message && user?.last_message.length > 30
                ? `${user?.last_message?.slice(0, 30)}...`
                : user?.last_message}
            </span>
          </div>
        </div>
        <span
          className={`${
            user?.status == "online" ? "text-green-500" : "text-gray-400"
          }`}
          style={{ fontSize: "12px" }}
        >
          {user?.status}
        </span>
      </div>
    </div>
  );
};

export default UserItem;

import { Message, UserProfile } from "@/lib/definitions";
import { getLastMsg } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const UserItem = ({
  user,
  onClick,
}: {
  user: UserProfile;
  onClick: (user: UserProfile) => UserProfile;
}) => {
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
          <strong className="capitalize">{user?.name}</strong>
          <div>
            <span className="text-gray-400" style={{ fontSize: "12px" }}>
              {typeof user.last_message == "string"
                ? user.last_message.length > 30
                  ? `${user.last_message.slice(0, 30)}...`
                  : `${user.last_message}`
                : "wait..."}
            </span>
          </div>
        </div>
        <div>
          <div className="flex justify-end">
            <span
              className={`${
                user?.status == "online" ? "text-green-500" : "text-gray-400"
              }`}
              style={{ fontSize: "12px" }}
            >
              {user?.status}
            </span>
          </div>
          <div>
            {typeof user.unreaded_message == "number" &&
              user.unreaded_message !== 0 && (
                <span
                  className="text-gray-100 bg-green-500 py-1 px-2 rounded-lg"
                  style={{ fontSize: "12px" }}
                >
                  {user.unreaded_message > 99
                    ? `99+`
                    : user.unreaded_message +
                      ` Unreaded message${
                        user.unreaded_message > 1 ? "s" : ""
                      }`}
                </span>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;

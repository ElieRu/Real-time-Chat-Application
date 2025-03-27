import Image from "next/image";
import React from "react";
import UsersDialog from "./users-dialog";
import GroupsDialog from "./groups-dialog";
import { Group, UserProfile } from "@/lib/definitions";

const ChatBar = ({
  user,
  group,
  onClick,
}: {
  user: UserProfile;
  group: Group;
  onClick: (user: UserProfile) => UserProfile;
}) => {
  return (
    <div className="flex items-center justify-between bg-gray-200 rounded-lg pr-2 drop-shadow-md">
      <div className="flex rounded-2xl p-2">
        <div className="mr-2">
          <Image
            height={40}
            width={40}
            src={user?.picture ? user?.picture : "/me.png"}
            alt="User Profile"
            className="rounded-full"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div>
          {user.name && <strong className="capitalize">{user.name}</strong>}
          {group.title && <strong className="capitalize">{group.title}</strong>}
          <div style={{ marginTop: "-8px" }}>
            <span className="text-sm text-green-500">
              {user?.status ? user?.status : "5 Memmbers"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="md:hidden">
          <UsersDialog onClick={onClick} />
        </div>
        <div className="lg:hidden">
          <GroupsDialog />
          {/* <NewGroup /> */}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;

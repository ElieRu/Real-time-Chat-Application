import Image from "next/image";
import React from "react";
import UsersDialog from "./users-dialog";
import GroupsDialog from "./groups-dialog";
import NewGroup from "./new-group";

const ChatBar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-200 rounded-lg pr-2 drop-shadow-md">
      <div className="flex rounded-2xl p-2">
        <div className="mr-2">
          <Image
            height={40}
            width={40}
            src="/me.jpeg"
            alt="User Profile"
            className="rounded-full"
            style={{width: 'auto', height: 'auto'}}
          />
        </div>
        <div>
          <strong>John Doe</strong>
          <div style={{ marginTop: "-8px" }}>
            <span className="text-sm text-green-500">Connected</span>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="md:hidden">
          <UsersDialog />
        </div>
        <div className="lg:hidden">
          <GroupsDialog />
          <NewGroup />
        </div>
      </div>
    </div>
  );
};

export default ChatBar;

"use client";
import Navbar from "@/components/local/navbar";
import Users from "@/components/local/users";
import Chat from "@/components/local/chat";
import Groups from "@/components/local/groups";
import { Group, UserProfile } from "@/lib/definitions";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const [selectedUser, setSelectedUser] = useState<UserProfile>({});
  const [selectedGroup, setSelectedGroup] = useState<Group>({
    title: "",
    userId: "",
  });
  const [selected, setSelected] = useState(false);
  const { user } = useUser();

  const selectUser = (user: UserProfile) => {
    setSelected(true);
    setSelectedUser(user);
    setSelectedGroup({
      title: "",
      userId: "",
    });
    return user;
  };

  // isConnected and isDisconnected
  useEffect(() => {
    const socket = io("http://localhost:3001");
    if (user) {
      socket.emit("isConnected", user.email);
      socket.emit("isDisconnected", user.email);
    }
  }, [user]);

  const selectGroup = (group: Group) => {
    setSelectedGroup(group);
    setSelectedUser({});
    setSelected(true);
    return group;
  };

  return (
    <div
      className="px-5 py-2"
      style={{ position: "absolute", width: "100%", height: "100%" }}
    >
      <Navbar />
      <div style={{ height: "85%" }}>
        <div className="my-3 grid grid-cols-4 gap-4" style={{ height: "100%" }}>
          <Users onClick={selectUser} />
          <Chat
            user={selectedUser && selectedUser}
            group={selectedGroup && selectedGroup}
            selected={selected}
            onClick={selectUser}
            select_group={selectGroup}
          />
          <Groups select_group={selectGroup} />
        </div>
      </div>
    </div>
  );
}

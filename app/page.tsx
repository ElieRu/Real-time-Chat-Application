"use client";
import Navbar from "@/components/local/navbar";
import Users from "@/components/local/users";
import Chat from "@/components/local/chat";
import Groups from "@/components/local/groups";
import { Messages, UserForm } from "@/lib/definitions";
import { useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";
export default function Home() {
  const [user, setUser] = useState<UserForm>({});
  const [selected, setSelected] = useState(false);

  const selectUser = (user: UserForm) => {
    setSelected(true);
    setUser(user);
    return user;
  };

  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const socket = io("http://localhost:3001");
    const i: any[] = [];
    socket.on("response", (response) => {
      i.push(response.message);
      setMessages([...messages, i]);
    });
  }, [messages]);

  return (
    <div
      className="px-5 py-2"
      style={{ position: "absolute", width: "100%", height: "100%" }}
    >
      <Navbar></Navbar>

      <div style={{ height: "85%" }}>
        <div className="my-3 grid grid-cols-4 gap-4" style={{ height: "100%" }}>
          <Users onClick={selectUser} />
          <Chat
            user={user}
            selected={selected}
            onClick={selectUser}
            messages={messages[0] ? messages[0] : []}
          />
          <Groups />
        </div>
      </div>
    </div>
  );
}

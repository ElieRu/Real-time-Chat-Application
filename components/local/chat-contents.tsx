"use client";
import { fetchMessages } from "@/lib/datas";
import { Messages, findMessages, UserProfile } from "@/lib/definitions";
import { useUser } from "@auth0/nextjs-auth0/client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const ChatContents = ({ selectedUser }: { selectedUser: UserProfile }) => {
  const { user } = useUser();
  const [sub, setSub] = useState<string | undefined | null>("");
  const [messages, setMessages] = useState<Messages>([]);
  const [findMsg, setFindMsg] = useState<findMessages>({
    user_sub: "",
    selected_user: "",
  });

  useEffect(() => {
    if (user?.sub && selectedUser.sub) {
      setSub(user.sub);
      setFindMsg({
        user_sub: user?.sub,
        selected_user: selectedUser.sub,
      });
    }
  }, [user?.sub, selectedUser.sub]);

  const getMesages = async (selectedUser: findMessages) => {
    setMessages(await fetchMessages(selectedUser));
  };

  useEffect(() => {
    getMesages(findMsg);
  }, [findMsg]);

  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.emit("joinRoom", {
      selected_user: selectedUser.sub,
      user_sub: user?.sub,
    });

    socket.on("recieveMsg", (response) => {
      // Show information
      console.log(response);
      // if (
      //   (selectedUser.sub === response.selected_user_sub &&
      //     user?.sub === response.user_sub) ||
      //   (selectedUser.sub === response.user_sub &&
      //     user?.sub === response.selected_user_sub)
      // ) {
        setMessages([...messages, response]);
      // }
    });
  }, [messages, user?.sub, selectedUser.sub]);

  return (
    <div
      className="bg-gray-200 my-3 p-2 rounded-lg overflow-hidden"
      style={{
        height: "65%",
        width: "100%",
        position: "relative",
        overflowAnchor: "none",
      }}
    >
      <div
        className="pb-4 overflow-y-scroll"
        style={{
          position: "absolute",
          height: "100%",
          width: "98%",
          scrollbarColor: "gray transparent",
          scrollbarWidth: "thin",
          marginRight: "10px",
          overflowAnchor: "unset",
        }}
      >
        {messages && (
          <div style={{ width: "100%" }}>
            {messages.map((message, index) => (
              <div
                className={
                  sub == message.user_sub
                    ? `flex p-2 flex-row-reverse items-center`
                    : `flex p-2`
                }
                key={index}
              >
                {sub !== message.user_sub && (
                  <div className={sub == message.user_sub ? `ml-2` : "mr-2"}>
                    <Image
                      height={40}
                      width={40}
                      className="rounded-full"
                      src={message?.picture ? message?.picture : "/me.png"}
                      alt="My profile"
                    ></Image>
                  </div>
                )}
                <div
                  className={
                    sub == message.user_sub
                      ? "bg-green-500 px-4 py-1 rounded-lg rounded-tr-none"
                      : "bg-gray-500 px-4 py-1 rounded-lg rounded-tl-none"
                  }
                >
                  <div>
                    <span className="text-white">{message.content}</span>
                  </div>
                  <div style={{ marginTop: "-5px" }}>
                    <span
                      className="text-gray-200"
                      style={{ fontSize: "12px" }}
                    >
                      {message.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatContents;

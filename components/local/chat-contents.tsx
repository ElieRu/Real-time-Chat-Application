"use client";
import { fetchMessages } from "@/lib/datas";
import { Messages, findMessages, UserProfile } from "@/lib/definitions";
import { formatTime, getCurrentUser } from "@/lib/utils";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const ChatContents = ({ selectedUser }: { selectedUser: UserProfile }) => {
  const { user } = useUser();
  const [messages, setMessages] = useState<Messages>([]);
  const [connectedUser, setConnectedUser] = useState<UserProfile>({});

  const getUser = async (user: UserProfile | undefined) => {
    setConnectedUser(await getCurrentUser(user, true));
  };

  const getMesages = async (selectDataMsg: findMessages) => {
    setMessages(await fetchMessages(selectDataMsg));
  };

  // Get the connected user
  useEffect(() => {
    if (user) {
      getUser(user);
    } 
  }, [user]);

  // Select the conversation
  useEffect(() => {
    if (connectedUser._id && selectedUser._id) {
      getMesages({
        userId: connectedUser._id,
        recieverId: selectedUser._id,
      });
    }
  }, [connectedUser._id, selectedUser._id]);

  // Real-Time informations with Socket.io
  useEffect(() => {
    const socket = io("http://localhost:3001");
    socket.emit("joinRoom");
    socket.on("recieveMsg", (response) => {
      // Show information
      console.log(response);
      if (
        (selectedUser._id === response.recieverId &&
          connectedUser._id === response.userId) ||
        (selectedUser._id === response.userId &&
          connectedUser._id === response.recieverId)
      ) {
        setMessages([...messages, response]);
      }
    });
  }, [messages, connectedUser._id, selectedUser._id]);

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
                  connectedUser._id == message.userId
                    ? `flex p-2 flex-row-reverse items-center`
                    : `flex p-2`
                }
                key={index}
              >
                {connectedUser._id !== message.userId && (
                  <div
                    className={
                      connectedUser._id == message.userId ? `ml-2` : "mr-2"
                    }
                  >
                    <Image
                      height={40}
                      width={40}
                      className="rounded-full"
                      src={
                        selectedUser.picture ? selectedUser.picture : "/me.png"
                      }
                      alt="My profile"
                    ></Image>
                  </div>
                )}
                <div
                  className={
                    connectedUser._id == message.userId
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
                      {formatTime(message.createdAt)}
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

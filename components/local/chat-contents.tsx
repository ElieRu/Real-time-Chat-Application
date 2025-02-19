"use client";
import { Message, Messages } from "@/lib/definitions";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";

const ChatContents = ({messages}: {messages: any[]}) => {
  // const [messages, setMessages] = useState<Messages>([]);
  // const updateState = () => {
  //   const socket = io("http://localhost:3001");
    // const i: Messages = [];

    // socket.on("response", (response) => {
    //   i.push(response.message);
    //   console.log(response.message);
    // });
  // };
  // useEffect(() => {
  //   updateState();
  // }, []);


  


  return (
    <div
      className="bg-gray-200 my-3 p-2 rounded-lg overflow-hidden"
      style={{
        height: "70%",
        width: "100%",
        position: "relative",
        scrollbarColor: "gray transparent",
        scrollbarWidth: "thin",
      }}
    >
      <div
        className="overflow-y-scroll pb-4"
        style={{
          position: "absolute",
          height: "100%",
          width: "97%",
          scrollbarColor: "gray transparent",
          scrollbarWidth: "thin",
        }}
      >
        <div>
          {messages.map((data, index) => (
            <div className="flex p-2" key={index}>
              <div className="mr-2">
                <Image
                  height={40}
                  width={40}
                  className="rounded-full"
                  src={data.picture ? data.picture : "/me.png"}
                  alt="My profile"
                ></Image>
              </div>
              <div className="bg-green-500 px-4 py-1 rounded-lg rounded-tl-none">
                <div>
                  <span className="text-white">{data.content}</span>
                </div>
                <div style={{ marginTop: "-5px" }}>
                  <span className="text-gray-200" style={{ fontSize: "12px" }}>
                    11:40 PM
                  </span>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="flex p-2">
            <div className="mr-2">
              <Image
                height={40}
                width={40}
                className="rounded-full"
                src={"/me.png"}
                alt="My profile"
              ></Image>
            </div>
            <div className="bg-green-500 px-4 py-1 rounded-lg rounded-tl-none">
              <div>
                <span className="text-white">How are you doing?</span>
              </div>
              <div style={{ marginTop: "-5px" }}>
                <span className="text-gray-200" style={{ fontSize: "12px" }}>
                  11:40 PM
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end p-2">
            <div className="bg-gray-500 px-4 py-1 rounded-lg rounded-tr-none">
              <div>
                <span className="text-white">
                  Courses 
                </span>
              </div>
              <div style={{ marginTop: "-5px" }}>
                <span className="text-gray-200" style={{ fontSize: "12px" }}>
                  11:40 PM
                </span>
              </div>
            </div>
            <div className="ml-2">
              <Image
                height={40}
                width={40}
                className="rounded-full"
                src={"/me.png"}
                alt="My profile"
              ></Image>
            </div>
          </div>
          <div className="flex justify-end p-2">
            <div className="bg-gray-500 px-4 py-1 rounded-lg rounded-tr-none">
              <div>
                <span className="text-white">
                  Courses 
                </span>
              </div>
              <div style={{ marginTop: "-5px" }}>
                <span className="text-gray-200" style={{ fontSize: "12px" }}>
                  11:40 PM
                </span>
              </div>
            </div>
            <div className="ml-2">
              <Image
                height={40}
                width={40}
                className="rounded-full"
                src={"/me.png"}
                alt="My profile"
              ></Image>
            </div>
          </div>
          <div className="flex justify-end p-2">
            <div className="bg-gray-500 px-4 py-1 rounded-lg rounded-tr-none">
              <div>
                <span className="text-white">
                  Courses 
                </span>
              </div>
              <div style={{ marginTop: "-5px" }}>
                <span className="text-gray-200" style={{ fontSize: "12px" }}>
                  11:40 PM
                </span>
              </div>
            </div>
            <div className="ml-2">
              <Image
                height={40}
                width={40}
                className="rounded-full"
                src={"/me.png"}
                alt="My profile"
              ></Image>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ChatContents;

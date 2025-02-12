'use client'
import Image from "next/image";
import React from "react";
// import { io } from "socket.io-client";

const ChatContents = () => {

  // const socket = io('http://localhost:3000')

  // socket.on('response', (response) => {
  //   console.log(response);
  // })

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
          <div className="flex p-2">
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
                <span className="text-white">Hey!</span>
              </div>
              <div style={{ marginTop: "-5px" }}>
                <span className="text-gray-200" style={{ fontSize: "12px" }}>
                  11:40 PM
                </span>
              </div>
            </div>
          </div>
          <div className="flex p-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContents;

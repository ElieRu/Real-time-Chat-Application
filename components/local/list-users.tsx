"use client";
import Image from "next/image";
import React from "react";

const ListUsers = () => {
  const users = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="p-1 pr-2 pb-2">
        {users.map((user, index) => (
          <div
            className="mt-2 flex items-center border rounded-lg p-2 hover:bg-gray-200 hover:drop-shadow-md active:bg-gray-100"
            style={{ cursor: "pointer" }}
            key={index}
          >
            <div className="mr-2">
              <Image
                height={50}
                width={50}
                src={"/me.jpeg"}
                alt="User Profile"
                className="rounded-full"
              ></Image>
            </div>
            <div className="flex w-full justify-between items-center">
              <div>
                <strong className="capitalize">John Doe</strong>
                <div>
                  <span className="text-sm">Hello</span>
                </div>
              </div>
              <span className="text-sm">12:00</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListUsers;

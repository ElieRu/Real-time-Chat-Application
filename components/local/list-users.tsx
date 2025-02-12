"use client";
import { OnChange, UniqueUser, UserForm, Users } from "@/lib/definitions";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { fetchUsers } from "@/lib/datas";
import Search from "./search";

const ListUsers = () => {
  const [search, setSearch] = useState("");
  const onChange: OnChange = (value) => {
    setSearch(value);
    return value;
  };

  const { user } = useUser();
  const [users, setUsers] = useState<Users>([]);

  const getUsers = async (user: UserForm | undefined) => {
    if (user) {
      setUsers(await fetchUsers(user));
    }
  };

  useEffect(() => {
    getUsers(user);
  }, [user]);

  return (
    <>
      <Search search={search} onChange={(value) => onChange(value)} />
      <div
        className="overflow-y-scroll"
        style={{
          height: "90%",
          scrollbarColor: "gray transparent",
          scrollbarWidth: "thin",
        }}
      >
        <div className="p-1 pr-2 pb-2">
          {users
            .filter((user) => {
              const MyUser: UniqueUser = {
                name: user.name,
              };

              return search.toLowerCase() === ""
                ? user
                : MyUser?.name && MyUser?.name.includes(search);
            })
            .map((user, index) => (
              <div
                className="mt-2 flex items-center border rounded-lg p-2 hover:bg-green-500 hover:text-white hover:drop-shadow-md active:bg-green-300"
                style={{ cursor: "pointer" }}
                key={index}
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
                    <strong className="capitalise">{user?.name}</strong>
                    <div>
                      <span className="text-sm">Hello</span>
                    </div>
                  </div>
                  <span className="text-sm">12:00</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ListUsers;

"use client";
import {
  OnChange,
  UniqueUser,
  UserForm,
  UserProfile,
  Users,
  VerifyCurrent,
} from "@/lib/definitions";
import React from "react";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { fetchUsers } from "@/lib/datas";
import Search from "./search";
import UserItem from "./user-item";
import { io } from "socket.io-client";

const ListUsers = ({ onClick }: { onClick: (user: UserForm) => UserForm }) => {
  const [search, setSearch] = useState("");
  const onChange: OnChange = (value) => {
    setSearch(value);
    return value;
  };

  const { user } = useUser();
  const [users, setUsers] = useState<Users>([]);

  const getUsers = async (
    user: UserProfile | undefined,
    current_user: VerifyCurrent
  ) => {
    if (user) {
      setUsers(await fetchUsers(user, current_user));
    }
  };

  useEffect(() => {
    getUsers(user, false);
  }, [user]);

  useEffect(() => {
    const socket = io("http://localhost:3001");

    for (let i = 0; i < users.length; i++) {
      socket.emit("userConnected", {
        email: users[i].email,
        status: users[i].status,
      });
    }
  }, [users]);

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
              <UserItem key={index} user={user} onClick={onClick} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ListUsers;

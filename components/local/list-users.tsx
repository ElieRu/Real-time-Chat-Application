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
  const [lastMsg, setLastMsg] = useState<unknown[]>([]);

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

  // useEffect(() => {
  //   let tmp = [];
  //   for (let i = 0; i < users.length; i++) {
  //     tmp.push(users[i].last_message);
  //   }
  //   setLastMsg(tmp);
  // }, [users]);

  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.emit("joinRoom", "name");

    socket.on("updateUsersDatas", (response) => {
      
      // How to uppdate an attribute inside
      // an array with setUser();
      setUsers((users) =>
        users.map((user) =>
          user.sub === response.selected_user
            ? { ...user, last_message: response.last_message }
            : user
        )
      );
    });
    // }
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
              <UserItem
                key={index}
                last_message={lastMsg}
                user={user}
                onClick={onClick}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ListUsers;

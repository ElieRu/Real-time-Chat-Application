"use client";
import {
  OnChange,
  UniqueUser,
  UserForm,
  UserProfile,
  VerifyCurrent,
} from "@/lib/definitions";
import React from "react";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { fetchUsers } from "@/lib/datas";
import Search from "./search";
import UserItem from "./user-item";
import { io } from "socket.io-client";
import { SubNav } from "./sub-nav";
import { getCurrentUser } from "@/lib/utils";

const ListUsers = ({
  onClick,
  seen,
}: {
  onClick: (user: UserForm) => UserForm;
  seen: boolean;
}) => {
  const [search, setSearch] = useState("");
  const onChange: OnChange = (value) => {
    setSearch(value);
    return value;
  };
  const [users, setUsers] = useState<UserProfile[]>([]);
  const { user } = useUser();
  const [connectedUser, setConnectedUser] = useState<UserProfile>({});

  const getUsers = async (
    user: UserProfile | undefined,
    current_user: VerifyCurrent
  ) => {
    if (user) {
      setUsers(await fetchUsers(user, current_user));
    }
  };

  const getUser = async (user: UserProfile | undefined) => {
    setConnectedUser(await getCurrentUser(user, true));
  };

  // Get the connected user
  useEffect(() => {
    if (user) {
      getUser(user);
    }
  }, [user]);

  // Get all users
  useEffect(() => {
    getUsers(user, false);
  }, [user]);

  // Real-time informations with socket.io
  useEffect(() => {
    const socket = io("http://localhost:3001");
    socket.emit("joinRoom");
    socket.on("updateUsersDatas", (response) => {
      // Handle actions for the *reciever user
      if (connectedUser._id === response.recieverId) {
        setUsers((users) =>
          users.map((user) =>
            user._id === response.recieverId || user._id === response.userId
              ? {
                  ...user,
                  last_message: response.content,
                  unreaded_message:
                    // seen == false ?
                      typeof user.unreaded_message == "number" &&
                      user.unreaded_message++
                      // : 0
                }
              : user
          )
        );
      }
    });
    console.log(seen);
  }, [connectedUser._id]);

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
        <SubNav />
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
              <UserItem key={index} user={user} onClick={onClick} seen={seen} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ListUsers;

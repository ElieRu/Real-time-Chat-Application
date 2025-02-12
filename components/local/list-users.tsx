"use client";
import { OnChange, UniqueUser, UserForm, Users } from "@/lib/definitions";
import React from "react";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { fetchUsers } from "@/lib/datas";
import Search from "./search";
import UserItem from "./user-item";

const ListUsers = ({onClick}: {onClick: (user: UserForm) => UserForm}) => {
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
              <UserItem key={index} user={user} onClick={onClick} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ListUsers;

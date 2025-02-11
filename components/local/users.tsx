import { useEffect, useState } from "react";
import ListUsers from "./list-users";
import Search from "./search";
import { useUser } from "@auth0/nextjs-auth0/client";
import { fetchUsers } from "@/lib/datas";

export default function Users() {
  const { user } = useUser();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    if (user) {
      setUsers(await fetchUsers(user));
    }
  };

  useEffect(() => {
      getUsers();
  }, [user]);

  return (
    <div
      className="row-span-full col-span-2 lg:col-span-1 rounded pr-3 pt-1 overflow-hidden hidden md:block"
      style={{ height: "100%" }}
    >
      <Search />
      <ListUsers users={users}></ListUsers>
    </div>
  );
}

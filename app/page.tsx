'use client'
import Navbar from "@/components/local/navbar";
import Users from "@/components/local/users";
import Chat from "@/components/local/chat";
import Groups from "@/components/local/groups";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from "react";
import { fetchUsers } from "@/lib/datas";

export default function Home() {

  const { user } = useUser()

  useEffect(() => {
    if (user) {
      fetchUsers(user)
    }
  }, [user]);

  return (
    <div
      className="px-5 py-2"
      style={{ position: "absolute", width: "100%", height: "100%" }}
    >
      <Navbar></Navbar>
      
      <div style={{ height: "85%" }}>
        <div className="my-3 grid grid-cols-4 gap-4" style={{ height: "100%" }}>
          <Users />
          <Chat />
          <Groups />
        </div>
      </div>
    </div>
  );
}

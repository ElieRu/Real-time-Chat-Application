"use client";

import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { user } = useUser();

  const handleClick = () => {
    alert("good");
  };

  return (
    <div className="flex justify-between items-center pl-1">
      <div>{"</>"}</div>
      <div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              {user ? <div className="flex items-center">
                <Image
                  width={30}
                  height={30}
                  className="rounded-2xl mr-2"
                  src={user?.picture ? user?.picture : "/user.png"}
                  alt="My profile"
                />
                <div>
                  <div style={{marginBottom: '-5px'}} className="text-start">{user?.name}</div>
                  <span className="text-sm text-gray-500">{user?.email}</span>
                </div>
              </div> : 'Not Connected'}
            </MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy" onClick={handleClick}>
                  Notice
                </MenubarRadioItem>
                {user && (
                  <Link href="/api/auth/me">
                    <MenubarRadioItem value="andy">Profile</MenubarRadioItem>
                  </Link>
                )}
              </MenubarRadioGroup>
              <MenubarSeparator />
              {!user && (
                <Link href="/api/auth/login">
                  <MenubarItem inset>Login</MenubarItem>
                </Link>
              )}
              {user && (
                <Link href="/api/auth/logout">
                  <MenubarItem inset>Logout</MenubarItem>
                </Link>
              )}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "../ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

const Navbar = () => {
  const { user, isLoading } = useUser();

  const handleClick = () => {
    alert("good");
  };

  return (
    <div className="flex justify-between items-center">
      <div>{"</>"}</div>
      <div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <div>
                {/* <Image width={5} height={5} src={user?.picture} alt="My profile" /> */}
                {user ? user?.name : 'Not Connected'}
              </div>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy" onClick={handleClick}>
                  Notice
                </MenubarRadioItem>
                {user && (
                  <a href="/api/auth/me">
                    <MenubarRadioItem value="andy">Profile</MenubarRadioItem>
                  </a>
                )}
              </MenubarRadioGroup>
              <MenubarSeparator />
              {!user && (
                <a href="/api/auth/login">
                  <MenubarItem inset>Login</MenubarItem>
                </a>
              )}
              {user && (
                <a href="/api/auth/logout">
                  <MenubarItem inset>Logout</MenubarItem>
                </a>
              )}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};

export default Navbar;

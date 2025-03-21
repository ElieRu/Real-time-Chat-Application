"use client";

import React, { useEffect, useState } from "react";
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
import { UserProfile, VerifyCurrent } from "@/lib/definitions";
import { fetchUsers } from "@/lib/datas";

const Navbar = () => {
  const { user } = useUser();
  const [connectedUser, setConnectedUser] = useState<UserProfile>({});

  const handleClick = () => {
    alert("good");
  };

  const getCurrentUser = async (
    user: UserProfile | undefined,
    current_user: VerifyCurrent
  ) => {
    if (user) {
      setConnectedUser(await fetchUsers(user, current_user));
    }
  };

  useEffect(() => {
    getCurrentUser(user, true);
  }, [user]);

  return (
    <div className="flex justify-between items-center px-1">
      <div>
        <Link href={"/"}>{"</>"}</Link>
      </div>
      <div>
        <Menubar style={{ height: "50px" }}>
          <MenubarMenu>
            <MenubarTrigger>
              {user ? (
                <div className="flex items-center">
                  <Image
                    width={30}
                    height={30}
                    className="rounded-2xl mr-2"
                    src={
                      connectedUser.picture
                        ? connectedUser.picture
                        : "/user.png"
                    }
                    alt="My profile"
                  />
                  <div className="text-start">
                    <div
                      style={{ marginBottom: "-5px" }}
                      className="text-start"
                    >
                      {connectedUser.name}
                    </div>
                    <span className="text-sm text-green-500">
                      {connectedUser.status}
                    </span>
                  </div>
                </div>
              ) : (
                "Not Connected"
              )}
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

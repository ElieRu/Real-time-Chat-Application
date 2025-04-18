"use client";
import { UserForm } from "@/lib/definitions";
import ListUsers from "./list-users";

export default function Users({
  onClick,
  seen
}: {
  onClick: (user: UserForm) => UserForm;
  seen: boolean;
}) {
  

  return (
    <div
      className="row-span-full col-span-2 lg:col-span-1 rounded pr-3 pt-1 overflow-hidden hidden md:block"
      style={{ height: "100%" }}
    >
      <ListUsers onClick={onClick} seen={seen} ></ListUsers>
    </div>
  );
}

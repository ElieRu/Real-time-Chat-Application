"use client";
import { Group, Groups, OnChange } from "@/lib/definitions";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NewGroup from "./new-group";
import Search from "./search";
import { Groups as ListOfGroups } from "@/lib/definitions";
import { fetchGroups } from "@/lib/datas";

const ListGroups = () => {
  const [search, setSearch] = useState("");

  const onChange: OnChange = (value) => {
    setSearch(value);
    return value;
  };

  const [groups, setGroups] = useState<ListOfGroups>([]);
  const getGroups = async () => {
    setGroups(await fetchGroups());
  };

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <>
      <Search search={search} onChange={(value) => onChange(value)} />
      <div>
        <NewGroup updateGroups={(groups) => setGroups(groups)} />
      </div>
      <div
        className="overflow-y-scroll"
        style={{
          height: "90%",
          scrollbarColor: "gray transparent",
          scrollbarWidth: "thin",
        }}
      >
        <div className="p-1 pr-2 pb-2">
          {groups
            .filter((group) => {
              const MyGroup: Group = {
                title: group.title,
                userId: group.userId,
              };

              return search.toLowerCase() === ""
                ? group
                : MyGroup?.title && MyGroup?.title.includes(search);
            })
            .map((group, index) => (
              <div
                className="mt-2 flex items-center border rounded-lg p-2 hover:bg-green-500 hover:text-white hover:drop-shadow-md active:bg-green-300"
                style={{ cursor: "pointer" }}
                key={index}
              >
                <div className="mr-2 rounded-full border">
                  <Image
                    height={50}
                    width={50}
                    src={"/group.png"}
                    alt="group Profile"
                    className="rounded-full"
                  ></Image>
                </div>
                <div className="flex w-full justify-between items-center">
                  <div>
                    <strong className="capitalize">{group.title}</strong>
                    <div>
                      <span className="text-sm">Hello</span>
                    </div>
                  </div>
                  <span className="text-sm">12:00</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ListGroups;

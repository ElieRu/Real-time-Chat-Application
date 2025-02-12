import { useState } from "react";
import ListGroups from "./list-groups";
import NewGroup from "./new-group";
import Search from "./search";
import { OnChange } from "@/lib/definitions";

export default function Groups() {

  const [search, setSearch] = useState("");
    const onChange: OnChange = (value) => {
      setSearch(value);
      return value;
    };

  return (
    <div
      className="rounded pr-1 pt-1 overflow-hidden hidden lg:block"
      style={{ height: "100%" }}
    >
      <Search search={search} onChange={(value) => onChange(value)} />
      <div className="flex justify-between items-center pl-1 py-2">
        <strong className="underline">Groups</strong>
        <NewGroup />
      </div>
      <ListGroups />
    </div>
  );
}

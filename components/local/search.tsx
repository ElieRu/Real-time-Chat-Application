import React from "react";
import { Input } from "../ui/input";
import { OnChange } from "@/lib/definitions";

const Search = ({search, onChange}: {search: string, onChange: OnChange}) => {
  return (
    <div className="pl-1 pb-1 mt-1 lg:mt-0 mr-1 lg:mr-0">
      <Input placeholder="Search" type="search" value={search} onChange={e => onChange(e.target.value)} />
    </div>
  );
};

export default Search;

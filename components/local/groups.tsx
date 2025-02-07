import ListGroups from "./list-groups";
import NewGroup from "./new-group";
import Search from "./search";

export default function Groups() {
  return (
    <div
      className="rounded pr-1 pt-1 overflow-hidden hidden lg:block"
      style={{ height: "100%" }}
    >
      <Search />
      <div className="flex justify-between items-center pl-1 py-2">
        <strong className="underline">Groups</strong>
        <NewGroup />
      </div>
      <ListGroups />
    </div>
  );
}

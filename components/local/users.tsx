import ListUsers from "./list-users";
import Search from "./search";

export default function Users() {
  return (
    <div
      className="row-span-full rounded pr-3 pt-1 overflow-hidden"
      style={{ height: "100%" }}
    >
      <Search />
      <div
        className="overflow-y-scroll"
        style={{
          height: "90%",
          scrollbarColor: "gray transparent",
          scrollbarWidth: "thin",
        }}
      >
        <ListUsers></ListUsers>
      </div>
    </div>
  );
}

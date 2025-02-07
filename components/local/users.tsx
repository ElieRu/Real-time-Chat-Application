import ListUsers from "./list-users";
import Search from "./search";

export default function Users() {
  const users = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
  return (
    <div
      className="row-span-full col-span-2 lg:col-span-1 rounded pr-3 pt-1 overflow-hidden hidden md:block"
      style={{ height: "100%" }}
    >
      <Search />
      <ListUsers></ListUsers>
    </div>
  );
}

import { Group } from "@/lib/definitions";
import ListGroups from "./list-groups";

export default function Groups({
  select_group,
}: {
  select_group: (group: Group) => void;
}) {
  return (
    <div
      className="rounded pr-1 pt-1 overflow-hidden hidden lg:block"
      style={{ height: "100%" }}
    >
      <ListGroups select_group={select_group} />
    </div>
  );
}

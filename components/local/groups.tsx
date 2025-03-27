import { Group } from "@/lib/definitions";
import ListGroups from "./list-groups";

export default function Groups({
  OnClick,
}: {
  OnClick: (group: Group) => void;
}) {
  return (
    <div
      className="rounded pr-1 pt-1 overflow-hidden hidden lg:block"
      style={{ height: "100%" }}
    >
      <ListGroups OnClick={OnClick} />
    </div>
  );
}

import ChatBar from "./chat-bar";
import ChatInput from "./chat-input";
import ChatContents from "./chat-contents";
import { Group, UserProfile } from "@/lib/definitions";

export default function Chat({
  user,
  group,
  onClick,
  selected,
}: {
  user: UserProfile;
  group: Group;
  onClick: (user: UserProfile) => UserProfile;
  selected: boolean;
}) {

  // console.log(user);

  return (
    <div className="bg-gray-100 mt-1 col-span-4 md:col-span-2 rounded-lg p-4">
      {selected && <ChatBar user={user} group={group} onClick={onClick} />}
      {selected && <ChatContents selectedUser={user} />}
      {selected && <ChatInput selectedUser={user} />}
    </div>
  );
}

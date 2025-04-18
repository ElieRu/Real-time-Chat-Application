import ChatBar from "./chat-bar";
import ChatInput from "./chat-input";
import ChatContents from "./chat-contents";
import { Group, UserProfile } from "@/lib/definitions";

export default function Chat({
  user,
  group,
  onClick,
  selected,
  seenMsg,
}: {
  user: UserProfile;
  group: Group;
  onClick: (user: UserProfile) => UserProfile;
  selected: boolean;
  seenMsg: (seen: boolean) => void;
}) {
  return (
    <div className="bg-gray-100 mt-1 col-span-4 md:col-span-2 rounded-lg p-4">
      {selected && <ChatBar user={user} group={group} onClick={onClick} />}
      {selected && <ChatContents selectedUser={user} seenMsg={seenMsg} />}
      {selected && <ChatInput selectedUser={user} />}
    </div>
  );
}

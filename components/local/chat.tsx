import ChatBar from "./chat-bar";
import ChatInput from "./chat-input";
import ChatContents from "./chat-contents";
import { UserForm } from "@/lib/definitions";

export default function Chat({
  user,
  onClick,
  selected,
}: {
  user: UserForm;
  onClick: (user: UserForm) => UserForm;
  selected: boolean;
}) {
  return (
    <div className="bg-gray-100 mt-1 col-span-4 md:col-span-2 rounded-lg p-4">
      {selected && <ChatBar user={user} onClick={onClick} />}
      {selected && <ChatContents />}
      {selected && <ChatInput />}
    </div>
  );
}

import ChatBar from "./chat-bar";
import ChatInput from "./chat-input";
import ChatContents from "./chat-contents";
import { Message, Messages, UserForm } from "@/lib/definitions";

export default function Chat({
  user,
  onClick,
  selected,
}: {
  user: UserForm;
  onClick: (user: UserForm) => UserForm;
  selected: boolean;
}) {
  const messages: Messages = [];

  const getMessages = (message: Message) => {
    messages.push(message);
  };

  return (
    <div className="bg-gray-100 mt-1 col-span-4 md:col-span-2 rounded-lg p-4">
      {selected && <ChatBar user={user} onClick={onClick} />}
      {selected && <ChatContents />}
      {selected && <ChatInput sendMessages={getMessages} />}
    </div>
  );
}

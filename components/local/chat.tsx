import ChatBar from "./chat-bar";
import ChatInput from "./chat-input";
import ChatContents from "./chat-contents";

export default function Chat() {
  return (
    <div className="bg-gray-100 col-span-2 rounded-lg p-4">
      <ChatBar/>
      <ChatContents/>
      <ChatInput/>
    </div>
  );
}

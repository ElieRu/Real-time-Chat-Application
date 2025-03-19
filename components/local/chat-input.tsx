import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Message, UserProfile } from "@/lib/definitions";
import { io } from "socket.io-client";
import { useUser } from "@auth0/nextjs-auth0/client";

const ChatInput = ({ selectedUser }: { selectedUser: UserProfile }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Message>();

  const { user } = useUser();

  const [roomName, setRoomName] = useState({
    // type: "",
    selected_user: "",
    user_sub: "",
  });

  useEffect(() => {
    if (user?.sub && selectedUser?.sub) {
      setRoomName({
        // type: "createMsg",
        selected_user: selectedUser?.sub,
        user_sub: user?.sub,
      });
    }
  }, [user?.sub, selectedUser?.sub]);

  const onSubmit: SubmitHandler<Message> = (form) => {
    if (user?.sub && user?.picture && selectedUser) {
      form.user_sub = user?.sub;
      form.selected_user_sub = selectedUser?.sub;
      form.picture = user?.picture;
    }

    const socket = io("http://localhost:3001");

    // const joinRoom = () => {
    socket.emit("joinRoom", roomName);
    // }

    socket.emit("sendMsg", form);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="block w-full mr-2">
            <Textarea
              style={{ resize: "none" }}
              placeholder="Your Message"
              {...register("content", { required: true })}
            />
            {errors.content && (
              <span className="text-sm text-red-500">Message is required</span>
            )}
          </div>
          <Button
            className="bg-green-500 btn-sm"
            type="submit"
            onSubmit={handleSubmit(onSubmit)}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;

import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Message, UserProfile } from "@/lib/definitions";
import { io } from "socket.io-client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getCurrentUser } from "@/lib/utils";

const ChatInput = ({ selectedUser }: { selectedUser: UserProfile }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Message>();

  const { user } = useUser();
  const [connectedUser, setConnectedUser] = useState<UserProfile>({});

  const getUser = async (user: UserProfile | undefined) => {
    setConnectedUser(await getCurrentUser(user, true));
  };

  // Get the connected user
  useEffect(() => {
    if (user) {
      getUser(user);
    } 
  }, [user]);

  const onSubmit: SubmitHandler<Message> = (form) => {
    if (connectedUser && selectedUser) {
      form.userId = connectedUser._id;
      form.recieverId = selectedUser._id;
    }

    const socket = io("http://localhost:3001");
    socket.emit("joinRoom");
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

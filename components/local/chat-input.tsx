import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Message } from "@/lib/definitions";
import { io } from "socket.io-client";
import { useUser } from "@auth0/nextjs-auth0/client";

const ChatInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Message>();

  const messages: string[] = [];

  const socket = io("http://localhost:3000");
  socket.on('response', (response) => {
    messages.push(response);
    console.log(messages);
  });

  const { user } = useUser()
  
  const onSubmit: SubmitHandler<Message> = (message) => {
    
    if (user?.sub && user?.picture) {
      message.sub = user?.sub
      message.picture = user?.picture
    }

    socket.emit("message", {
      message: message,
    });
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

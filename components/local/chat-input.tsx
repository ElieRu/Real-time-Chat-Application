import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";

const ChatInput = () => {
  
    return (
    <div>
      <form method="post">
        <div className="flex">
          <Textarea
            style={{ resize: "none" }}
            placeholder="Your Message"
            className="mr-2"
          />
          <Button className="bg-green-500 btn-sm" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;

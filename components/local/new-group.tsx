import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Plus } from 'lucide-react';

const NewGroup = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-green-500 rounded-md text-white text-sm py-1 px-2">
        <Plus/>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new group</DialogTitle>
          <DialogDescription>
            <div>
              <form method="post">
                <div className="my-2">
                  <Input placeholder="Name"></Input>
                </div>
                <div className="my-2">
                  <Textarea placeholder="Description" style={{resize: 'none'}}></Textarea>
                </div>
                <div>
                  <span className="text-sm text-red-500">Incorrect Form</span>
                </div>
                <div className="my-2">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default NewGroup;

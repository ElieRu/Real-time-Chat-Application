import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User } from "lucide-react";
import Search from "./search";
import ListUsers from "./list-users";

const UsersDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-green-500 rounded-md text-white text-sm py-1 px-2">
        <User/>
      </DialogTrigger>
      <DialogContent style={{height: '400px'}} className="overflow-hidden">
        <DialogHeader style={{height: '400px'}} className="overflow-hidden">
          <DialogTitle>User</DialogTitle>
          <div className="pr-1">
            <Search />
          </div>
          <DialogDescription className="overflow-hidden">
            <ListUsers/>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UsersDialog;

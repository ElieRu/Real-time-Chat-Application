import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ListGroups from "./list-groups";
import Search from "./search";
import { Users } from 'lucide-react';


const GroupsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-green-500 rounded-md text-white text-sm py-1 px-2 mx-2">
        <Users/>
      </DialogTrigger>
      <DialogContent style={{height: '400px'}} className="overflow-hidden">
        <DialogHeader style={{height: '400px'}} className="overflow-hidden">
          <DialogTitle>Groups</DialogTitle>
          <div className="pr-1">
            <Search />
          </div>
          <DialogDescription className="overflow-hidden">
            <ListGroups/>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default GroupsDialog;

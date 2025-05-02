import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Group, Groups } from "@/lib/definitions";
import { createNewGroup } from "@/lib/actions";
import { useUser } from "@auth0/nextjs-auth0/client";

const NewGroup = ({updateGroups}: {updateGroups: (groups: Groups) => void}) => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Group>();

  const [valid, setValid] = useState(false);
  useEffect(() => {
    setValid(false);
  }, []);
  const { user } = useUser();

  const onSubmit: SubmitHandler<Group> = async (form) => {
    if (user?.sub) {
      form.userId = user?.sub;
    }

    updateGroups(await createNewGroup(form));
    setValid(true);
    reset();
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger><span className="text-green-500">Create new group</span></AccordionTrigger>
        <AccordionContent className="p-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-2">
              <Input
                {...register("title", { required: true })}
                placeholder="Name"
              ></Input>
            </div>
            {valid && (
              <div className="bg-green-500 p-3 rounded-lg text-white">
                New group is created.
              </div>
            )}
            <div className="my-2">
              <Button disabled={user ? false : true} type="submit">Submit</Button>
            </div>
          </form>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    // <Dialog>
    //   <DialogTrigger className="bg-green-500 rounded-md text-white text-sm py-1 px-2">
    //     <Plus />
    //   </DialogTrigger>
    //   <DialogContent>
    //     <DialogHeader>
    //       <DialogTitle>Create a new group</DialogTitle>
    //       {/* <DialogDescription> */}
    //       <div>
    //       </div>
    //       {/* </DialogDescription> */}
    //     </DialogHeader>
    //   </DialogContent>
    // </Dialog>
  );
};

export default NewGroup;

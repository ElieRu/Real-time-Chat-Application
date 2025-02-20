import Image from "next/image";
import React from "react";
import UsersDialog from "./users-dialog";
import GroupsDialog from "./groups-dialog";
import NewGroup from "./new-group";
import { UserForm, UserProfile } from "@/lib/definitions";

const ChatBar = ({
  user,
  onClick,
}: {
  user: UserProfile;
  onClick: (user: UserForm) => UserForm;
}) => {
  // const [status, setStatus] = useState("");

  // useEffect(() => {
  //   const socket = io("http://localhost:3001");
  //   const s: string = ''
  //   socket.on("status", (data) => {
  //     // s = data
  //     // setStatus(data);
  //     console.log(data)
  //   });
  // }, [status]);

  // console.log(status);  

  return (
    <div className="flex items-center justify-between bg-gray-200 rounded-lg pr-2 drop-shadow-md">
      <div className="flex rounded-2xl p-2">
        <div className="mr-2">
          <Image
            height={40}
            width={40}
            src={user.picture ? user.picture : "/me.png"}
            alt="User Profile"
            className="rounded-full"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div>
          <strong>{user.name}</strong>
          <div style={{ marginTop: "-8px" }}>
            <span className="text-sm text-green-500">
              {user?.status ? user?.status : "Connected"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="md:hidden">
          <UsersDialog onClick={onClick} />
        </div>
        <div className="lg:hidden">
          <GroupsDialog />
          <NewGroup />
        </div>
      </div>
    </div>
  );
};

export default ChatBar;

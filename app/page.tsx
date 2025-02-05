import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/local/navbar";

export default function Home() {
  return (
    <div className="px-5 py-2" style={{position: 'absolute', width: '100%', height: '100%'}}>
      <Navbar></Navbar>
      <div style={{height: '90%'}}>
        <div className="my-3 grid grid-cols-4 gap-4">
          <div className="bg-gray-100 row-span-full rounded">List Chat</div>
          <div className="bg-gray-100 col-span-2 rounded">All Messages</div>
          <div className="bg-gray-100 rounded">Groups</div>
        </div> 
      </div>
    </div>
  );
}

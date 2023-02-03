import FormExperience from "src/components/FormExperience";
import React from "react";
import ChatList from "src/components/ChatList";
import Chat from "src/components/Chat";

function ChatSection() {
  return (
    <div className="bg-[#E5E5E5] flex justify-center h-auto pb-24">
      <div className="flex justify-center container">
        <div className="mt-10 mb-5 text-xl font-semibold w-full md:flex md:justify-between">
          <div className="hidden md:w-[29%] lg:block">
            <ChatList name="Tamura Hono" />
          </div>
          <div className="md:w-[69%]">
            <Chat name="Tamura Hono" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatSection;

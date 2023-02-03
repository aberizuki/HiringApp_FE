import React from "react";

function ChatList(props) {
  const { name } = props;
  const data = [2];

  return (
    <>
      <div className="flex h-full">
        <div className="w-full bg-white rounded-lg px-5 py-5 mb-10 ">
          <div className="text-[22px] mb-5 mx-5">Chat</div>
          <hr className="mb-5 mx-5" />
          <div className="flex-col justify-center items-center">
            <div className="flex flex-col ">
              <div className="mr-5 flex justify-center w-full">
                <div className="flex h-[50px]">
                  <img
                    className="h-[50px] w-[50px] rounded-full"
                    src={require("src/assets/img/hono.jpg")}
                    alt="smhfbdhf"
                  />
                  <div className="mx-1">
                    <p className="text-[15px] text-black font-semibold">
                      {name}
                    </p>
                    <div className="text-[12px] text-base font-normal">
                      <p className="text-[#9EA0A5]">apakah</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatList;

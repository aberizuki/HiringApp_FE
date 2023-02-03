import React from "react";

export default function Chat(props) {
  const { name } = props;
  return (
    <>
      <div className="flex h-full">
        <div className="w-full bg-white rounded-lg px-5 py-5 mb-10 ">
          <div className="w-full md:w-[100%] text-base md:text-lg">
            <div className="text-[22px] mb-5 mx-5">
              <div className="flex ">
                <div>
                  <img
                    className="h-[50px] w-[50px] rounded-full"
                    src={require("src/assets/img/hono.jpg")}
                    alt="smhfbdhf"
                  />
                </div>
                <div className="items-center p-2">
                  <p className="text-[15px] text-black font-semibold inline-block align-middle">
                    {name}
                  </p>
                </div>
              </div>
            </div>
            <hr className="mb-5 mx-5" />
            <div className="h-[500px]">
              <div className="h-full"></div>
            </div>

            <div className="flex justify-end m-5">
              <input
                className="h-[50px] appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                id="username"
                type="text"
                placeholder="Type message..."
              />
              <button className="bg-[#5E50A1] hover:bg-[#5E50A1] text-white font-bold py-2 px-4 rounded-full w-[50px] mx-4">
                <img
                  className="rounded-full"
                  src={require("src/assets/img/sendbtn.png")}
                  alt="smhfbdhf"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

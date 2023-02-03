import React from "react";

function Header() {
  return (
    <div>
      <div className="hidden md:flex">
        <div className="flex justify-center bg-[#5E50A1] w-full h-[90px]">
          <div className="container flex items-center ">
            <p className="text-white text-3xl font-bold">Top Jobs</p>
          </div>
        </div>
      </div>
      <div className="flex md:hidden bg-[]">
        <div className="flex justify-center bg-[#5E50A1] w-full h-[180px] relative rounded-br-3xl">
          {/* <img
                        src={require("src/assets/Vector.png")}
                        alt=""
                        className="absolute w-full bottom-0 rounded-br-3xl"/>
                    <img/> */}
          <img
            src={require("src/assets/bell-icon-white.png")}
            alt=""
            className="absolute w-8 right-7 top-[70px]"
          />
          <img
            src={require("src/assets/shadow-header.png")}
            alt=""
            className="absolute w-full bottom-0 rounded-br-3xl"
          />
          <div className="container flex flex-col ">
            <img
              src={require("src/assets/Union.png")}
              alt=""
              className="w-[94px] mb-9"
            />
            <div>
              <p className="text-white text-lg">Sen, 21 April 2020</p>
              <p className="text-white text-2xl semibold">Hai, Mohammad!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

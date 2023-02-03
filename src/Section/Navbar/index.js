import React from "react";

function Navbar() {
  return (
    <div className="hidden md:w-full md:flex md:justify-center md:h-[100px] bg-white">
      <div className="flex justify-cente w-full container">
        <div className="flex justify-between items-center w-full">
          <div>
            <img
              className="w-[127px] h-[35px]"
              src={require("src/assets/logo-powerland.webp")}
              alt="logo-peworld"
            />
          </div>
          <div className="flex">
            <img
              className="w-[24px] h-[24px] mr-5"
              src={require("src/assets/bell-icon.png")}
              alt="logo-peworld"
            />
            <img
              className="w-[24px] h-[24px] mr-5"
              src={require("src/assets/mail-icon.png")}
              alt="logo-peworld"
            />
            <img
              className="w-[32px] h-[32px] rounded-full"
              src={require("src/assets/christian-buehner-DItYlc26zVI-unsplash 1.png")}
              alt="logo-peworld"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

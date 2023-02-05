import React from 'react'

function AfterLogin() {
  return (
    <div>
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
              onClick={() => setDropDown(!dropDown)}
              className="w-[32px] h-[32px] rounded-full"
              src={require("src/assets/christian-buehner-DItYlc26zVI-unsplash 1.png")}
              alt="logo-peworld"
            />
          </div>
    </div>
  )
}

export default AfterLogin
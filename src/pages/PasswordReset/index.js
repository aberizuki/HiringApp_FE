
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ResetPass() {
  return (
    <>
      <main className="bg-[#F6F7F8] h-screen flex">
        <section className="invisible w-[0px] lg:visible lg:w-screen">
          <div className="m-[50px] align-center h-[85%] bg-hero from-violet-500 to-fuchsia-500 bg-no-repeat bg-cover">
            <div className="">
              <img
                className="pl-10 pt-10 invisible lg:visible"
                src={require("src/assets/img/logo-white.png")}
              />
            </div>
            <div className="lg:text-[44px] m-[50px] mt-[130px] font-semibold text-white">
              Temukan developer <br /> berbakat & terbaik <br /> di berbagai
              bidang <br /> keahlian
            </div>
          </div>
        </section>
        <section className="w-screen">
          <div className="h-[85%] lg:m-[50px]">
            <div>
              <img
                className="pl-5 pt-10 lg:invisible"
                src={require("src/assets/img/logo.png")}
              />
            </div>
            <div className="visible pl-5 pl-5 pt-10 text-[32px] font-bold text-[#46505C]">
              Reset Password
            </div>

            <div className="pl-5 pt-2 text-[14px] text-[#858D96]">
              Enter your user account's verified email address and we will send
              you a password reset link.
            </div>
            <form className=" mt-10 ml-5 mr-5">
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Email
                </span>
                <input
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10"
                  id="username"
                  type="text"
                  placeholder="Insert your Email"
                />
              </div>
            </form>
            <div className="flex justify-center m-5">
              <button className="bg-[#FBB017] hover:bg-blue-700 text-white font-bold py-2 px-4 w-[343px] h-[50px] w-[100%] rounded">
                Send password reset email
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// export default Login;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginOption() {
  return (
    <>
      <main className="block bg-[#F6F7F8] h-screen md:flex lg:flex">
        <section>
          <div className="block h-screen w-screen bg-hero bg-cover lg:hidden">
            <div className="h-[85%] lg:m-[50px] w-screen">
              <div className="">
                <div className="">
                  <img
                    className="pl-5 pt-10 lg:hidden m-"
                    src={require("src/assets/img/logo-white.png")}
                  />
                </div>

                <div className="m-10 text-[36px] font-semibold text-white flex justify-center mt-[130px]">
                  Temukan developer <br /> berbakat & terbaik <br /> di berbagai
                  bidang <br /> keahlian
                </div>

                <div className="flex justify-center m-5 mt-[150px]">
                  <Link to="/user-login">
                    <button className="bg-[#FFFF] hover:bg-[#5E50A1] text-[#5E50A1] font-bold py-2 px-4 w-[343px] h-[50px] w-[100%] rounded">
                      Login as Employee
                    </button>
                  </Link>
                </div>
                <div>
                  <div className="">
                    <div className="flex justify-center bg-[#FFFFF] text-[#FFFF] font-bold">
                      or
                    </div>
                  </div>
                </div>
                <div className="flex justify-center m-5">
                  <Link to="/comp-login">
                    <button className="bg-[#FFFFF] border hover:bg-[#5E50A1] text-white font-bold py-2 px-4 w-[343px] h-[50px] w-[100%] rounded">
                      Login as Employer
                    </button>
                  </Link>
                </div>

                <div className="flex justify-center m-7"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden w-[0px] lg:flex lg:w-screen">
          <div className="m-[50px] align-center h-[85%] bg-hero from-violet-500 to-fuchsia-500 bg-no-repeat bg-cover">
            <div className="">
              <img
                className="pl-10 pt-10 hidden lg:flex"
                src={require("src/assets/img/logo-white.png")}
              />
            </div>
            <div className="lg:text-[44px] m-[50px] mt-[130px] font-semibold text-white">
              Temukan developer <br /> berbakat & terbaik <br /> di berbagai
              bidang <br /> keahlian
            </div>
          </div>
        </section>
        <section className="w-screen hidden w-[0px] lg:flex lg:w-screen h-">
          <div className="h-[85%] lg:m-[50px] flex items-center">
            <div className="">
              <div className="">
                <img
                  className="pl-5 pt-10 lg:hidden"
                  src={require("src/assets/img/logo.png")}
                />
              </div>

              <div className=" hidden lg:flex lg:pl-5 lg:text-[32px] font-bold text-[#46505C]">
                Hello, Pewpeople
              </div>

              <div className="pl-5 pt-2 text-[14px] text-[#858D96]">
                Please choose login option below
              </div>

              <div className="flex justify-center m-5">
                <Link to="/user-login">
                  <button className="bg-[#5E50A1] text-white font-bold py-2 px-4 w-[343px] h-[50px] w-[100%] rounded">
                    Login as Employee
                  </button>
                </Link>
              </div>
              <div>
                <div className="">
                  <div className="flex justify-center bg-[#FFFFF] font-bold text-[#46505C]">
                    or
                  </div>
                </div>
              </div>
              <div className="flex justify-center m-5">
                <Link to="/comp-login">
                  <button className="bg-[#FFFFF] text-[#5E50A1] border border-[#5E50A1] font-bold py-2 px-4 w-[343px] h-[50px] w-[100%] rounded">
                    Login as Employer
                  </button>
                </Link>
              </div>

              <div className="flex justify-center m-7"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// export default Login;

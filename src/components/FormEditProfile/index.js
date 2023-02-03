import React from "react";

export default function FormUserEdit() {
  return (
    <>
      <div className="flex ">
        <div className="w-full bg-white rounded-lg px-5 py-5 mb-10 ">
          <div className="w-full md:w-[100%] text-base md:text-lg">
            <div className="text-[22px] mb-5 mx-5">Your Profile</div>
            <hr className="mb-5 mx-5" />
            <form className=" mt-10 ml-5 mr-5">
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Full Name
                </span>
                <input
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                  id="username"
                  type="text"
                  placeholder="Insert your Name"
                />
              </div>
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Job Desk
                </span>
                <input
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                  id="username"
                  type="email"
                  placeholder="Insert your Email"
                />
              </div>
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Employment Type
                </span>
                <select
                  id=""
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                >
                  <option selected>Employment Type</option>
                  <option>Freelance</option>
                  <option>Full Time</option>
                </select>
              </div>
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Domicile
                </span>
                <input
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                  id="username"
                  type="text"
                  placeholder="Insert your Phone"
                />
              </div>
              <div className="block lg:flex justify-between">
                <div className="mb-4 lg:mr-4 w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Instargram
                  </span>
                  <input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder="Insert your Password"
                  />
                </div>
                <div className="mb-4 lg:mx-4 w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Github
                  </span>
                  <input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="mb-4 lg:ml-4 w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Gitlab
                  </span>
                  <input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Description
                </span>
                <input
                  className="h-[140px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                  id="username"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="flex justify-end m-5">
                <button className="bg-[#FBB017] hover:bg-[#FBB017] text-white font-bold py-2 px-4 rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

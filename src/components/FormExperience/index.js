import React from "react";

export default function FormExperience() {
  return (
    <>
      <div className="flex ">
        <div className="w-full bg-white rounded-lg px-5 py-5 mb-10 ">
          <div className="w-full md:w-[100%] text-base md:text-lg">
            <div className="text-[22px] mb-5 mx-5">Job Experience</div>
            <hr className="mb-5 mx-5" />
            <form className=" mt-10 ml-5 mr-5">
              <div className="block lg:flex justify-between">
                <div className="mb-4 lg:mr-4 w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Company name
                  </span>
                  <input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder="Insert company name"
                  />
                </div>
                <div className="mb-4 lg:mx-4 w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Position
                  </span>
                  <input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder="Insert position"
                  />
                </div>
              </div>
              <div className="block lg:flex justify-between">
                <div className="mb-4 lg:mr-4 w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Date in
                  </span>
                  <input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder="DD-MM-YYYY"
                  />
                </div>
                <div className="mb-4 lg:mx-4 w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Date out
                  </span>
                  <input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder="DD-MM-YYYY"
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
              <hr className="mx-5" />
              <div className="flex justify-center m-5">
                <button className="bg-[#FFFFF] text-[#FBB017] border border-[#FBB017] font-bold py-2 px-4 rounded  w-[100%]">
                  Add Job Experience
                </button>
              </div>
              <hr className="mx-5" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

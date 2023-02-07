import React,{useState} from "react";
import Input from "../Input";

export default function FormCompanyEdit() {
  const [param,SetParam] = useState ({username:'',email:''})


  return (
    <>

      <div className="flex ">
        <div className="w-full bg-white rounded-lg px-5 py-5 mb-10 ">
          <div className="w-full md:w-[100%] text-base md:text-lg">
            <div className="text-[22px] mb-5 mx-5">Your Profile</div>
            <div className=" mt-10 ml-5 mr-5">
              <hr className="mb-5 mx-5" />
              {/* <div className="mb-4"> */}
                {/* <span className="ml-1 block text-[12px] text-[#858D96]">
                  Company Name
                </span> */}
                {/* <input
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                  id="username"
                  type="text"
                  placeholder="Insert company name"
                /> */}
                <Input label="Company Name" id="username" type="text" placeholder="Insert company name" onChangeInput={(e)=>SetParam({...param,username:e.target.value})} />
                <Input label="Field"  id="email" type="email" placeholder="Insert Company Field" onChangeInput={(e)=>SetParam({...param,email:e.target.value})} />
              {/* </div> */}
              {/* <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Field
                </span>
                <input
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                  id="username"
                  type="email"
                  placeholder="Insert Company Field"
                />
              </div> */}
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
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Email
                </span>
                <input
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                  id="username"
                  type="text"
                  placeholder="Insert email"
                />
              </div>
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Instagram
                </span>
                <input
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                  id="username"
                  type="text"
                  placeholder="Insert instagram"
                />
              </div>
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Phone
                </span>
                <input
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                  id="username"
                  type="text"
                  placeholder="Insert phone"
                />
              </div>
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Linkedin
                </span>
                <input
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                  id="username"
                  type="text"
                  placeholder="Insert linkedin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

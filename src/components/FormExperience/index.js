import axios from "axios";
import React, { useState } from "react";

export default function FormExperience() {
  const url = process.env.REACT_APP_HOST
  const idLogin = JSON.parse(localStorage.getItem('@userLogin')).user.id_user

  const [formExperience, setFormExperience] = useState({
    id_user: idLogin,
    company_name: '',
    job_position: '',
    day_in: '',
    day_out: '',
    description: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${url}/api/users-experiences`, formExperience)
      .then(res => {
        alert('Experience updated!')
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
  }
  return (
    <>
      <div className="flex ">
        <div className="w-full bg-white rounded-lg px-5 py-5 mb-10 ">
          <div className="w-full md:w-[100%] text-base md:text-lg">
            <div className="text-[22px] mb-5 mx-5">Job Experience</div>
            <hr className="mb-5 mx-5" />
            <form onSubmit={handleSubmit} className=" mt-10 ml-5 mr-5">
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
                    onChange={(e) => setFormExperience({ ...formExperience, company_name: e.target.value })}
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
                    onChange={(e) => setFormExperience({ ...formExperience, job_position: e.target.value })}
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
                    onChange={(e) => setFormExperience({ ...formExperience, day_in: e.target.value })}
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
                    onChange={(e) => setFormExperience({ ...formExperience, day_out: e.target.value })}
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
                  onChange={(e) => setFormExperience({ ...formExperience, description: e.target.value })}
                />
              </div>
              <hr className="mx-5" />
              <div className="flex justify-center m-5">
                <button type="submit" className="bg-[#FFFFF] text-[#FBB017] border border-[#FBB017] font-bold py-2 px-4 rounded  w-[100%]">
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

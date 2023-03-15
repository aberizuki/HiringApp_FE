import axios from "axios";
import React, { useState } from "react";

export default function FormUserEdit() {
  const url = process.env.REACT_APP_HOST
  const idLogin = JSON.parse(localStorage.getItem('@userLogin')).user.id_user

  const [formUser, setFormUser] = useState({
    full_name: '',
    job_desk: '',
    employment_type: '',
    domicile: '',
    ig_account: '',
    github_account: '',
    gitlab_account: '',
    description: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = new FormData();

    // append a large amount of data to a FormData object with different keys and values
    for (const key in formUser) {
      if (formUser.hasOwnProperty(key)) {
        const value = formUser[key];
        body.append(key, value);
      }
    }
    try {
      await axios.patch(`${url}/api/users/${idLogin}`, body, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        }
      })
      alert('Profile information updated!')
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
  return (
    <>
      <div className="flex ">
        <div className="w-full bg-white rounded-lg px-5 py-5 mb-10 ">
          <div className="w-full md:w-[100%] text-base md:text-lg">
            <div className="text-[22px] mb-5 mx-5">Your Profile</div>
            <hr className="mb-5 mx-5" />
            <form className=" mt-10 ml-5 mr-5" onSubmit={handleSubmit}>
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Full Name
                </span>
                <input
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                  id="username"
                  type="text"
                  placeholder="Insert your Name"
                  onChange={(e) => setFormUser({ ...formUser, full_name: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Job Desk
                </span>
                <input
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                  id="username"
                  type="text"
                  placeholder="Insert your Job Desk"
                  onChange={(e) => setFormUser({ ...formUser, job_desk: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Employment Type
                </span>
                <select
                  id=""
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                  onChange={(e) => setFormUser({ ...formUser, employment_type: e.target.value })}
                >
                  <option selected>Employment Type</option>
                  <option value='freelance'>Freelance</option>
                  <option value='full time'>Full Time</option>
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
                  onChange={(e) => setFormUser({ ...formUser, domicile: e.target.value })}
                />
              </div>
              <div className="block lg:flex justify-between">
                <div className="mb-4 lg:mr-4 w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Instagram
                  </span>
                  <input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder="Insert your Password"
                    onChange={(e) => setFormUser({ ...formUser, ig_account: e.target.value })}
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
                    onChange={(e) => setFormUser({ ...formUser, github_account: e.target.value })}
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
                    onChange={(e) => setFormUser({ ...formUser, gitlab_account: e.target.value })}
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
                  onChange={(e) => setFormUser({ ...formUser, description: e.target.value })}
                />
              </div>
              <div className="flex justify-end m-5">
                <button className="bg-[#FBB017] hover:bg-[#FBB017] text-white font-bold py-2 px-4 rounded" type="submit">
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

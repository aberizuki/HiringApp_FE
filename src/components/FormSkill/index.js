import axios from "axios";
import React, { useState } from "react";

export default function FormUserSkill() {
  const url = process.env.REACT_APP_HOST
  const idLogin = JSON.parse(localStorage.getItem('@userLogin')).user.id_user

  const [skill, setSkill] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${url}/api/users-skills`, {
      skill_name: skill,
      id_user: idLogin
    })
      .then(res => {
        alert('Skil added!')
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
            <div className="text-[22px] mb-5 mx-5">Skill</div>
            <hr className="mb-5 mx-5" />
            <div className="flex justify-between">
              <div className="m-5 w-[100%]">
                <div className="mb-4">
                  <input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder="Input skill"
                    onChange={(e) => setSkill(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-end m-5">
                <button
                  className="bg-[#FBB017] hover:bg-[#FBB017] text-white font-bold py-2 px-4 rounded h-[50px]"
                  onClick={handleSubmit}>
                  Save
                </button>
              </div>
            </div>
            <button className="bg-[#FBB01799] border rounded border-solid border-[#FBB017] text-[#FFFFFF] px-6 py-1 mr-3 my-3 m-5 text-[10px]">
              <div className="">
                <div>Python</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

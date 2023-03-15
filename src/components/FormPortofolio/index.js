import axios from "axios";
import React, { useState } from "react";

export default function FormPortofolio() {
  const url = process.env.REACT_APP_HOST
  const idLogin = JSON.parse(localStorage.getItem('@userLogin')).user.id_user

  const [image, setImage] = useState('')
  const [imagePreview, setImagePreview] = useState('')
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file)
    setImagePreview(URL.createObjectURL(file))
  }

  const [formPortofolio, setFormPortfolio] = useState({
    id_user: idLogin,
    project_name: '',
    link_repository: '',
    img_portfolio: image,
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = new FormData();

    // append a large amount of data to a FormData object with different keys and values
    for (const key in formPortofolio) {
      if (formPortofolio.hasOwnProperty(key)) {
        const value = formPortofolio[key];
        body.append(key, value);
      }
    }
    try {
      await axios.post(`${url}/api/users-portfolio`, body, {
        method: 'POST',
        headers: {
          'Content-type': 'multipart/form-data',
        }
      })
      alert('Portfolio added!')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex ">
        <div className="w-full bg-white rounded-lg px-5 py-5 mb-10 ">
          <div className="w-full md:w-[100%] text-base md:text-lg">
            <div className="text-[22px] mb-5 mx-5">Portofolio</div>
            <hr className="mb-5 mx-5" />
            <form onSubmit={handleSubmit} className=" mt-10 ml-5 mr-5">
              <div className="block lg:flex justify-between">
                <div className="mb-4 lg:mr-4 w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Application name
                  </span>
                  <input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder="Insert application name"
                    onChange={e => setFormPortfolio({ ...formPortofolio, project_name: e.target.value })}
                  />
                </div>
              </div>
              <div className="block lg:flex justify-between">
                <div className="mb-4 lg:mr-4 w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Repository
                  </span>
                  <input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder="Insert repository link"
                    onChange={e => setFormPortfolio({ ...formPortofolio, link_repository: e.target.value })}
                  />
                </div>
              </div>

              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Image Upload
                </span>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                  id="username"
                  type="file"
                  multiple
                  onChange={(e) => onImageUpload(e)}
                />
                {imagePreview ? <img src={imagePreview} className='w-[350] h-[250px]' alt='Profile' /> : <></>}
              </div>
              <hr className="mx-5" />
              <div className="flex justify-center m-5">
                <button type="submit" className="bg-[#FFFFF] text-[#FBB017] border border-[#FBB017] font-bold py-2 px-4 rounded  w-[100%]">
                  Add Portofolio
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

import axios from "axios";
import React, { useEffect, useState } from "react";
import imagePlaceHolder from '../../assets/placeholder.png'
import { useNavigate } from "react-router-dom";

function CardUserEdit() {
  const url = process.env.REACT_APP_HOST
  const idLogin = JSON.parse(localStorage.getItem('@userLogin')).user.id_user
  const navigate = useNavigate()
  const [dataProfile, setDataProfile] = useState([])
  const [image, setImage] = useState('')
  const [imagePreview, setImagePreview] = useState('')

  useEffect(() => {
    axios.get(`${url}/api/users/${idLogin}`)
      .then(res => setDataProfile(res.data.data))
  }, [])

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file)
    setImagePreview(URL.createObjectURL(file))
  }

  const handleSubmit = () => {
    const body = new FormData();
    body.append('img_profile', image);

    // axios.patch(`${url}/api/users/${idLogin}`, body, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-type': 'multipart/form-data',
    //   }
    // })
    //   .then(res => {
    //     // console.log(res);
    //     setTimeout(() => {
    //       window.location.reload();
    //     }, 1500);
    //   })
    //   .catch(error => {
    //     console.log(error.response.data.message);
    //   })
  }

  return (
    <>
      <div className="flex ">
        <div className="w-full bg-white rounded-lg px-5 py-5 mb-10 ">
          <div className="card-profil flex-col justify-center items-center py-10">
            <div className="flex flex-col ">
              <div className="mr-5 flex justify-center w-full">
                {imagePreview ? <img src={imagePreview} className='w-[150px] rounded-full' alt='Profile' /> : <img src={imagePlaceHolder} className='w-[150px] rounded-full' alt='Profile' />}
              </div>
              <div className="">
                <div className="text-[#9EA0A5] flex justify-center mt-5" style={{ cursor: 'pointer' }} onClick={() => document.querySelector(".input-field").click()}>
                  Edit
                </div>
                <input type='file' className='input-field' hidden onChange={(e) => onImageUpload(e)} />
                <p className="text-3xl text-black font-semibold my-5">{dataProfile.full_name}</p>
                <p className="text-black mb-2">{`${dataProfile.job_desk} - ${dataProfile.employment_type}`}</p>
                <div className="text-base font-normal">
                  <p className="text-[#9EA0A5] mb-3">{dataProfile.domicile}</p>
                  <p className="text-[#9EA0A5] mb-3">{dataProfile.role}</p>
                  {/* <p className="text-[#9EA0A5] mb-3">Talent</p> */}
                  <p className="text-[#9EA0A5]">
                    {dataProfile.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="btn-primary py-4 px-8 w-full mb-10">
          Edit Password
        </button>
        <button
          className="bg-transparent text-[#5E50A1] border border-[#5E50A1] rounded py-4 px-8 w-full mb-10"
          onClick={handleSubmit()}>
          Save Update
        </button>
      </div>
    </>
  );
}

export default CardUserEdit;

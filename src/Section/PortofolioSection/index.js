import React, { useEffect, useState } from "react";
import CardDetailPortofolio from "src/components/CardDetailPortofolio";
import CardInfoDetail from "src/components/CardDetailProfile";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function PortofolioSection() {
    const url = process.env.REACT_APP_HOST
    const Navigate = useNavigate()
    const { id } = useParams()
    const [dataUser, setDataUser] = useState('')

    // get data product
    useEffect(() => {
        axios.get(`${url}/api/users/${id}`)
            .then(res => setDataUser(res.data.data))
            .catch((err) => console.log(err))
    }, [])
    const img = `${url}/uploads/images/${dataUser.img_profile}`

    const isComp = () => {
        let role = JSON.parse(localStorage.getItem('@userLogin'))?.user?.role
        if (role === 'talent') {
            return 'Apply'
        } else {
            return 'Hire'
        }
    }

    return (
        <div>
            <div className="hidden md:flex md:bg-[#5E50A1] md:h-[370px] md:w-full"></div>
            <div className="bg-[#E5E5E5] flex justify-center h-auto pb-24">
                <div className="container">
                    <div
                        className="md:mt-[-300px] mt-[70px] mb-5 text-xl font-semibold w-full md:flex md:justify-between">
                        <div className="md:w-[29%]">
                            <CardInfoDetail
                                button={<button 
                                onClick={()=> Navigate(`/hire-page/${id}`)}
                                className = "btn-primary py-4 px-8 w-full mb-10" > {isComp()} </button>}
                                sosmed={<div className = "mt-16" > <div className="flex w-full my-4">
                                    <img
                                        className="w-[24px] mr-5"
                                        src={require("src/assets/mail-icon.png")}
                                        alt="smhfbdhf"/>
                                    <p className="text-[#9EA0A5] font-normal text-base">Louistommo@gmail.com</p>
                                </div>
                                <div className="flex w-full my-5">
                                    <img
                                        className="w-[24px] mr-5"
                                        src={require("src/assets/instagram.png")}
                                        alt="smhfbdhf"/>
                                    <p className="text-[#9EA0A5] font-normal text-base">Louistommo@gmail.com</p>
                                </div>
                                <div className="flex w-full my-5">
                                    <img
                                        className="w-[24px] mr-5"
                                        src={require("src/assets/github.png")}
                                        alt="smhfbdhf"/>
                                    <p className="text-[#9EA0A5] font-normal text-base">Louistommo@gmail.com</p>
                                </div>
                                <div className="flex w-full my-5">
                                    <img
                                        className="w-[24px] mr-5"
                                        src={require("src/assets/Vector.png")}
                                        alt="smhfbdhf"/>
                                    <p className="text-[#9EA0A5] font-normal text-base">Louistommo@gmail.com</p>
                                </div>
                            </div>
                                }
                            />
                        </div>
                        <div className="md:w-[69%]">
                            <CardDetailPortofolio/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortofolioSection

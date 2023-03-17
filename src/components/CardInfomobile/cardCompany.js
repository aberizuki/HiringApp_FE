import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CardCompany(props) {
    const urlApi = process.env.REACT_APP_HOST

    const Navigate = useNavigate()
    const { searching } = props
    const [isData, setIsData] = useState([])



    const getDataCompany = () => {
        axios
            .get(`${urlApi}/api/company/`)
            .then(res => {
                console.log("ini mbile user", res.data.result)
                setIsData(
                    res?.data.result
                )
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getDataCompany()
    }, [searching]);
    return (
        <div>
            <div
                onClick={() => Navigate("/home/profile-portofolio")}
                className="flex  flex-col md:hidden">
                {
                    isData.map((item, i) => (
                        <div className="w-full bg-white rounded-lg px-4 mt-2">
                            <div className="card-profil flex justify-between items-center py-4">
                                <div className="flex items-center ">
                                    <div className="mr-5">
                                        <img
                                            className="w-[70px]"
                                            src={require("src/assets/user-image.webp")}
                                            alt="smhfbdhf" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-black font-semibold mb-3">{item.name_company}</p>
                                        <p className="text-[#9EA0A5] text-xs">{item.field_company}</p>
                                        <p className="text-[#9EA0A5] mb-2 text-xs">{item.address}</p>
                                        <div className="flex">
                                            <button className="btn-secondary px-2 py-1 mr-1 text-[12px]">PHP</button>
                                            <button className="btn-secondary px-2 py-1 mr-1 text-[12px]">JavaScript</button>
                                            <button className="btn-secondary px-2 py-1 mr-1 text-[12px]">HTML</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CardCompany
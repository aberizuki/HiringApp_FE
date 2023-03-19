import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardCompany from "./cardCompany";

function CardInfoMobile(props) {
    const urlApi = process.env.REACT_APP_HOST
    const urlImage = process.env.REACT_APP_IMG

    const Navigate = useNavigate()
    const { param } = props
    const [isData, setIsData] = useState([])

    let dataLocal = localStorage.getItem('@userLogin')
    dataLocal = JSON.parse(dataLocal)
    let role = dataLocal?.user?.role

    const getData = () => {
        axios
            .get(`${urlApi}/api/users?search=${param}`)
            .then(res => {
                //   console.log("ini mbile user", res.data.data)
                setIsData(
                    res
                        ?.data.data
                )
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [param]);

    // console.log("data api mobile", isData);
    return (
        <div>
            {
                role ? <div
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
                                            <p className="text-sm text-black font-semibold mb-3">{item.full_name}</p>
                                            <p className="text-[#9EA0A5] text-xs">{item.job_desk}</p>
                                            <p className="text-[#9EA0A5] mb-2 text-xs">{item.domicile}</p>
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
                    : <CardCompany />
            }
        </div>
    )
}

export default CardInfoMobile

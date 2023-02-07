import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Paginations from "./paginations";
import axios from "axios";

function CardInfo(props) {

    const {search,param} = props
    const navigate = useNavigate()
    const [isData, setIsData] = useState([])
    const [isPage, setIspage] = useState()
    // console.log("param info", param);
    // // const [filter, setFilter]= useState("")
    // console.log("is page data",isPage);

    const url = (param)=>{
        if (search !== "") {
            return(`http://localhost:5500/api/users?search=${search}`)
        } else if(param === "freelance") {
            return(`http://localhost:5500/api/users?employment_type=${param}`) 
        } else if(param === "full time") {
            return(`http://localhost:5500/api/users?employment_type=${param}`) 
        }else{
            return(`http://localhost:5500/api/users?search=&page=${isPage}&limit=2`)
        }
    }

    // console.log("test url", url(param))
    

    const getData = () => {
        // console.log("get data", param);
        axios
            .get(url(param))
            .then(res => {
              console.log(res.data.data)
                setIsData(res?.data.data)
            })
            .catch(err => console.log(err))
        }

    useEffect(() => {
        getData()
    }, [param,search, isPage]);

    console.log("data api", isData);

    return (
        <div className="hidden md:flex md:flex-col md:items-center">
            <div className="w-full bg-white rounded-lg px-5 mb-10 ">
                {/* {
                    isData?.map((item,i) => (
                        <div className="card-profil flex justify-between items-center py-10">
                            <div className="flex ">
                                <div className="mr-5">
                                    <img
                                        className="w-[100px] rounded-full"
                                        // src={require("src/assets/user-image.webp")}
                                        src={`http://localhost:5500/api/users`}
                                        alt="smhfbdhf"
                                        />
                                </div>
                                <div>
                                    <p className="text-2xl text-black font-semibold mb-3">{item.full_name}</p>
                                    <p className="text-[#9EA0A5]">{item.job_desk}</p>
                                    <div className="flex mb-2 items-center">
                                        <img src={require("src/assets/map-pin.png")} className="w-4 h-4 mr-3"/>
                                        <p className="text-[#9EA0A5]">{item.domicile}</p>
                                    </div>
                                    <div>
                                        <button className="btn-secondary px-6 py-1 mr-3">PHP</button>
                                        <button className="btn-secondary px-6 py-1 mr-3">JavaScript</button>
                                        <button className="btn-secondary px-6 py-1 mr-3">HTML</button>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <button
                                    onClick={() => navigate(`profile-portofolio`)}
                                    className="btn-primary py-4 px-8 mr-12">
                                    Lihat Profile
                                </button>
                            </div>
                        </div>
                    ))
                } */}

                {isData.map((item) => {
                    const img = `http://localhost:5500/uploads/images/${item.img_profile}`
                    // const idProduct = item.images[0].id_product;
                    // console.log(img);
                    return (
                        <div className="card-profil flex justify-between items-center py-10">
                            <div className="flex ">
                                <div className="mr-5">
                                    <img
                                        className="w-[100px] rounded-full"
                                        // src={require("src/assets/user-image.webp")}
                                        src={img}
                                        alt="smhfbdhf"
                                    />
                                </div>
                                <div>
                                    <p className="text-2xl text-black font-semibold mb-3">{item.full_name}</p>
                                    <p className="text-[#9EA0A5]">{`${item.job_desk} - ${item.employment_type}`}</p>
                                    <div className="flex mb-2 items-center">
                                        <img src={require("src/assets/map-pin.png")} className="w-4 h-4 mr-3" />
                                        <p className="text-[#9EA0A5]">{item.domicile}</p>
                                    </div>
                                    <div>
                                        <button className="btn-secondary px-6 py-1 mr-3">PHP</button>
                                        <button className="btn-secondary px-6 py-1 mr-3">JavaScript</button>
                                        <button className="btn-secondary px-6 py-1 mr-3">HTML</button>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <button
                                    onClick={() => navigate(`profile-portofolio/${item.id_user}`)}
                                    className="btn-primary py-4 px-8 mr-12">
                                    Lihat Profile
                                </button>
                            </div>
                        </div>
                    )
                })}

            </div>
            <Paginations getPage={(e)=> setIspage(e) }/>
        </div>
    )
}

export default CardInfo
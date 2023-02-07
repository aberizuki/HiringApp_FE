import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Paginations from "./paginations";
import axios from "axios";

function CardInfoCompany({getSearch, getFilter}) {
    // console.log("data get company" ,getSearch);
    // const {isFilter,param} = props

    console.log("data filter company",getFilter);
    const [isComp, setIsComp] = useState(false)

    useEffect(() => {
        let dataLocal = localStorage.getItem('@userLogin')
        dataLocal = JSON.parse(dataLocal)
        let role = dataLocal?.user?.role
        if (role == "recruiter") {
            setIsComp(true)
        } else {
            setIsComp(false)
        }
    }, [isComp])


    const navigate = useNavigate()
    const [isData, setIsData] = useState([])
    const [isPage, setIspage] = useState()
    console.log("company filter", isPage);

    // const url =(getSearch)=>{
    //     if (getSearch != "") {
    //         return (`http://localhost:5500/api/company/?company=${getSearch}`)
    //     } else if (isPage != null){
    //         return (`http://localhost:5500/api/company/?limit=1&page=${isPage}`)
    //     }else{
    //         return(`http://localhost:5500/api/company/`)
    //     }
    // }

    const url =(getSearch)=>{
        if (getSearch !== "") {
            return(`http://localhost:5500/api/company/?company=${getSearch}`)    
        } else if(getFilter == "NONIT"){
            return(`http://localhost:5500/api/company/?field=${getFilter}`) 
        }else if(getFilter == "IT"){
            return(`http://localhost:5500/api/company/?field=${getFilter}`) 
        }
        else{
            return (`http://localhost:5500/api/company/?limit=3&page=${isPage}`)
        }
    }
    

    console.log("tesssss",url(getSearch));
    const getData = () => {
        axios
            .get(url(getSearch))
            .then(res => {
                //   console.log(res.data.result)
                setIsData(
                    res?.data.result
                )
            })
            .catch(err => console.log(err))
        }

    useEffect(() => {
        getData()
    }, [getSearch, isPage, getFilter]);

    console.log("data api company", isData);

    return (
        <div className="hidden md:flex md:flex-col md:items-center">
            <div className="w-full bg-white rounded-lg px-5 mb-10 ">
                {
                    isData?.map((item, i) => (
                            <div className="card-profil flex justify-between items-center py-10">
                                <div className="flex ">
                                    <div className="mr-5">
                                        <img className="w-[100px] rounded-full"
                                            // src={require("src/assets/user-image.webp")}
                                            src={`http://localhost:5500/api/users`} alt="smhfbdhf"/>
                                    </div>
                                    <div>
                                        <p className="text-2xl text-black font-semibold mb-3">{item.name_company}</p>
                                        <p className="text-[#9EA0A5]">{item.field_company}</p>
                                        <div className="flex mb-2 items-center">
                                            <img src={require("src/assets/map-pin.png")} className="w-4 h-4 mr-3"/>
                                            <p className="text-[#9EA0A5]">{item.address}</p>
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
                                        onClick={()=>navigate("/home/profile-comp") }
                                        className="btn-primary py-4 px-8 mr-12">
                                        Lihat Profile
                                    </button>
                                </div>
                            </div>
                        ))
                }

            </div>
            <Paginations getPage={(e)=> setIspage(e) }/>
        </div>
    )
}

export default CardInfoCompany
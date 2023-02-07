import CardInfoMobile from "src/components/CardInfomobile";
import React,{useState} from "react";
import CardFilter from "src/components/CardFilter";
import CardInfo from "src/components/CardInfo";
import CardInfoCompany from "src/components/CardInfoCompany";

function HomeSection() {
    const [param,setParam] = useState("")
    const [isSearch,setIsSearch] = useState("")
    console.log("ini param in home", param);

    const getData = (value) =>{
        console.log('valuee value',value)
        setParam(value)
    }

    let dataLocal = localStorage.getItem('@userLogin')
    dataLocal = JSON.parse(dataLocal)
    // console.log("data ", dataLocal?.company?.role);
    let role = dataLocal?.user?.role  

    return (
        <div className="bg-[#E5E5E5] flex justify-center h-auto pb-24">
            <div className="container">
                <div className="">
                    <CardFilter getValue={getData} getSearch={(e)=> setIsSearch(e)} />
                    <div className="mt-10 mb-5 text-xl font-semibold md:hidden">
                        Web developer
                    </div>
                </div>
                {/*  */}
                {role === "recruiter" ? <CardInfo param={param} search={isSearch}/> :
                    <CardInfoCompany getSearch={isSearch} getFilter={param}/>
                }
                
                <CardInfoMobile/>
            </div>
        </div>
    )
}

export default HomeSection
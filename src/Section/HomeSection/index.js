import CardInfoMobile from "src/components/CardInfomobile";
import React,{useState} from "react";
import CardFilter from "src/components/CardFilter";
import CardInfo from "src/components/CardInfo";

function HomeSection() {
    const [param,setParam] = useState("")



    const getData = (value) =>{
        console.log('valuee',value)
        setParam(value)
    }
    return (
        <div className="bg-[#E5E5E5] flex justify-center h-auto pb-24">
            <div className="container">
                <div className="">
                    <CardFilter getValue={getData}/>
                    <div className="mt-10 mb-5 text-xl font-semibold">
                        Web developer
                    </div>
                </div>
                <CardInfo param={param}/>
                <CardInfoMobile/>
            </div>
        </div>
    )
}

export default HomeSection
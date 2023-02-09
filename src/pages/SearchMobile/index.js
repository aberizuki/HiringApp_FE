
import React, {useState} from "react";
import Footer from "src/Section/Footer";
import CardInfoMobile from "src/components/CardInfomobile";

function SearcMobile() {
    const [show, setShow] = useState(false)
    const [param,setParam] = useState("")
    function ListSort() {
        const btn = "py-5 font-normal text-start text-lg border-b-[2px] hover:text-[#5E50A1]"
        return (
            <div
                className="absolute bg-[#0000004D] top-[0] w-full h-[100vh] flex items-center justify-center " onClick={()=> setShow(!show)}>
                <div className="flex flex-col bg-white px-6 w-[75%] rounded">
                    <button className={btn}>Sortir berdasarkan nama</button>
                    <button className={btn}>Sortir berdasarkan Skill</button>
                    <button className={btn}>Sortir berdasarkan Lokasi</button>
                    <button className={btn}>Sortir berdasarkan Lokasi</button>
                </div>
            </div>
        )
    }
    return (
        <div className="">
            <div className="flex w-full justify-between  px-5 mt-16 rigth-0">
                <div className="w-[80%] flex h-[50px] bg-white items-center rounded shadow-lg">
                    <img
                        src={require("src/assets/search.png")}
                        className="w-5 h-5 ml-2 mr-3"
                        alt=""/>
                    <input placeholder="Android developer" className="py-3 text-bold" onChange={(e)=> setParam(e.target.value)}/>
                </div>
                <div
                    className="bg-white h-[50px] w-[18%] flex justify-center items-center rounded shadow-lg">
                    <img
                        onClick={() => setShow(!show)}
                        src={require("src/assets/list.png")}
                        className="w-9"
                        alt=""/>
                </div>
            </div>
            <CardInfoMobile param={param}/>
            {
                    show
                        ? <ListSort/>
                        : null  
                }
            <Footer/>
        </div>

    )
}

export default SearcMobile
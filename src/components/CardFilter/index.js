import React, {useState, useEffect} from "react";
import CardSort from "./CardSort";
function CardFilter(props) {

    const [show, setShow] = useState(false)
    const [sortir, setSortir] = useState("")
    const Btn = "py-5 w-full text-start border-b-[2px] rounded hover:bg- hover:text-[#5E50A1] c" +
            "ursor-pointer "

    const {getValue} = props

    
    const onChnageValue = (e) =>{
        setSortir(e)
        setShow(!show)
        getValue(e)
    }
    

    return (
        <div className="hidden md:flex md:justify-center md:my-10 relative">
            <div className="bg-white p-2 flex text-sm justify-between w-full rounded-lg ">
                <input className="w-[60%]" type="text" placeholder="Search for any skill"/>
                <div className="flex items-center">
                    <div className="border-r-[2px] h-full flex items-center ">
                        <img
                            src={require("src/assets/search.png")}
                            alt="search"
                            className="w-[24px] h-[24px] mr-5"/>
                    </div>
                    <input
                        value={sortir}
                        onClick={() => setShow(!show) }
                        className="w-[50%] ml-5 font-semibold text-[#5E50A1] border-none"
                        type="text"
                        placeholder="Kategori"
                        />
                    <button className="btn-primary py-4 px-8">
                        Search
                    </button>
                </div>
                {
                    show
                        ? (<CardSort onGetValue={(e)=>onChnageValue(e)} />): null
                }
            </div>
        </div>
    )
}

export default CardFilter

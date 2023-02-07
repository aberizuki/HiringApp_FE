import React, {useState, useEffect} from "react";
import CardSort from "./CardSort";
import CardSortCompany from "./CardSortCompany";
function CardFilter(props) {

    const [show, setShow] = useState(false)
    const [isComp, setIsComp] = useState(false)
    const [sortir, setSortir] = useState("")
    const Btn = "py-5 w-full text-start border-b-[2px] rounded hover:bg- hover:text-[#5E50A1] c" +
            "ursor-pointer "
    
    const {getValue, getSearch} = props

    
    const onChnageValue = (e) =>{
        setSortir(e)
        setShow(!show)
        getValue(e)
    }

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


    console.log("ini role", isComp);
    


    return (
        <div className="hidden md:flex md:justify-center md:my-14 relative">
            <div className="bg-white p-2 flex text-sm justify-between w-full rounded-lg ">
                <input 
                onChange={(e)=> getSearch(e.target.value)}
                className="w-[60%]" type="text" placeholder="Search for any skill"/>
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
                        className="w-[50%] ml-5 font-semibold text-[#5E50A1] border-none focus:outline-none"
                        type="text"
                        placeholder="Kategori"
                        />
                    <button className="btn-primary py-4 px-8">
                        Search
                    </button>
                </div>
                { isComp ? <>
                    { show? (<CardSort onGetValue={(e)=>onChnageValue(e)} />): null}
                </> : <>
                    { show? (<CardSortCompany onGetValue={(e)=>onChnageValue(e)} />): null}
                </>}
            </div>
        </div>
    )
}

export default CardFilter

import React, {useState} from "react";
import CardSort from "./CardSort";
function CardFilter(props) {

    const [show, setShow] = useState(false)
    const [sortir, setSortir] = useState("")
    const Btn = "py-5 w-full text-start border-b-[2px] rounded hover:bg- hover:text-[#5E50A1] c" +
            "ursor-pointer "

    return (
        <div className="hidden md:flex md:justify-center md:my-10 relative">
            <form className="bg-white p-2 flex text-sm justify-between w-full rounded-lg ">
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
                        ? <> < img
                    src = {
                        require("src/assets/bg-sort.webp")
                    }
                    alt = "dsadas"
                    className = "w-[300px] h-[300px] absolute top-10 right-[10%]" /> <div className="absolute top-[100px] right-[11.5%] px-5">
                        <div className="z-10 flex-col flex items-start text-lg">
                            <div
                                onClick={() => {
                                    setSortir("Skill");
                                    setShow(!show)
                                }}
                                className={Btn}>Sortir berdasarkan Skill</div>
                            <div onClick={() => {
                                    setSortir("Freelance");
                                    setShow(!show)
                                }} className={Btn}>Sortir berdasarkan Freelance</div>
                            <div onClick={() => {
                                    setSortir("Fulltime");
                                    setShow(!show)
                                }} className={Btn}>Sortir berdasarkan Fulltime</div>
                        </div>
                    </div>
                </>: null
                }
            </form>
        </div>
    )
}

export default CardFilter

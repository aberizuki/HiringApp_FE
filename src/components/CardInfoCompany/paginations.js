import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


    function Paginations({getPage}) {

        const navigate = useNavigate()
        const data = [2, 3, 3, 5]
        const [filter, setFilter] = useState("")
        const btnLight = "bg-white mx-2 py-[13px] rounded px-5 border-[2px] border-[#5E50A1] text-[#9EA0A5] hover:bg-[#5E50A1] hover:text-white"
        const btnBlue = "mx-2 py-[13px] rounded px-5 border-[2px] border-[#5E50A1] btn-primary"

        return (
            <div className="flex items-center">
                <button className="btn-primary py-4 px-5">
                    <img src={require("src/assets/min.png")} className="w-[12px]" alt=""/>
                </button>
                <button
                    onClick={() => {
                        setFilter(1)
                        getPage(1)
                    }}
                    className={filter === 1
                        ? btnBlue
                        : btnLight}>1</button>
                <button
                    onClick={() => {
                        setFilter(2)
                        getPage(2)
                    }}
                    className={filter === 2
                        ? btnBlue
                        : btnLight}>2</button>
                <button
                    onClick={() => {
                        setFilter(3)
                        getPage(3)
                    }}
                    className={filter === 3
                        ? btnBlue
                        : btnLight}>3</button>
                <button
                    onClick={() => {
                        setFilter(4)
                        getPage(4)
                    }}
                    className={filter === 4
                        ? btnBlue
                        : btnLight}>4</button>
                <button
                    onClick={() => {
                        setFilter(5)
                        getPage(5)
                    }}
                    className={filter === 5
                        ? btnBlue
                        : btnLight}>5</button>
                <button
                    onClick={() => {
                        setFilter(6)
                        getPage(6)
                    }}
                    className={filter === 6
                        ? btnBlue
                        : btnLight}>6</button>
                <button className="btn-primary py-4 px-5">
                    <img src={require("src/assets/max.png")} className="w-[12px]" alt=""/>
                </button>
            </div>
        )
    }



export default Paginations
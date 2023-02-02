import React from "react";

function CardFilter() {
    return (
        <div className="hidden tablet:flex tablet:justify-center tablet:my-10 ">
            <form className="bg-white p-2 flex text-sm justify-between w-full rounded-lg ">
                <input 
                className="w-[60%]"
                type="text"
                placeholder="Search for any skill"/>
                <div className="flex items-center">
                    <img src={require("src/assets/search.png")} alt="search" className="w-[24px] h-[24px]"/>
                    <input className="w-[50%]" type="text" placeholder="Kategori"/>
                    <button className="btn-primary py-4 px-8">
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CardFilter
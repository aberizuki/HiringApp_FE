import React from "react";

function CardInfo() {

    const data = [2, 3, 3,5]

    return (
        <div className="hidden md:flex">
            <div className="w-full bg-white rounded-lg px-5 mb-10 ">
                {data.map(()=>(
                    <div className="card-profil flex justify-between items-center py-10">
                    <div className="flex ">
                        <div className="mr-5">
                            <img
                                className="w-[100px]"
                                src={require("src/assets/user-image.webp")}
                                alt="smhfbdhf"/>
                        </div>
                        <div>
                            <p className="text-2xl text-black font-semibold mb-3">Louis Tomlinson</p>
                            <p className="text-[#9EA0A5]">Web developer - Freelance</p>
                            <p className="text-[#9EA0A5] mb-2">Bandung</p>
                            <div>
                                <button className="btn-secondary px-6 py-1 mr-3">PHP</button>
                                <button className="btn-secondary px-6 py-1 mr-3">JavaScript</button>
                                <button className="btn-secondary px-6 py-1 mr-3">HTML</button>
                            </div>
                        </div>
                    </div>
                    <div >
                        <button className="btn-primary py-4 px-8 mr-12">
                            Lihat Profile
                        </button>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    )
}

export default CardInfo
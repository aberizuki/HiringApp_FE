import React from "react";

function CardInfoDetailCompany() {

    return (
        <div className="flex flex-col">
            <div className="w-full bg-white rounded-lg  mb-10 md:pb-60 ">
                    <div className="md:bg-[#5E50A1] md:h-[200px] md:rounded-t-lg"></div>
                <div
                    className="card-profil flex-col justify-center items-center px-5 py-10 md:p-0 md:mt-[-75px]">
                    <div className="flex flex-col ">
                        <div className="mr-5 flex justify-center w-full">
                            <img
                                className="w-[150px]"
                                src={require("src/assets/user-image.webp")}
                                alt="smhfbdhf"/>
                        </div>
                        <div className="flex flex-col md:items-center">
                            <p className="text-2xl text-black font-semibold my-5">PT. Martabat Jaya Abadi</p>
                            <p className="text-[#9EA0A5] mb-3 font-normal text-base">Financial</p>
                            <div className="text-base font-normal flex flex-col md:items-center">
                                <div className="flex items-center mb-3">
                                    <img
                                        src={require("src/assets/map-pin.png")}
                                        alt="maps"
                                        className="w-4 h-4 mr-2"/>
                                    <p className="text-[#9EA0A5]">Bandung</p>
                                </div>
                                {/* <div className="flex items-center mb-3">
                                            <img src={require("src/assets/phone-icon.png")} alt="maps" className="w-4 h-4 mr-2"/>
                                            <p className="text-[#9EA0A5]">0812 - 3456 - 789</p>
                                        </div> */
                                }
                                <p className="text-[#9EA0A5] mb-10 md:text-center md:w-[60%]">Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida
                                    sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                            </div>
                            <button className="btn-primary py-4 text-base font-semibold w-full md:w-[30%]">
                                Edit profile
                            </button>
                        </div>
                        <div className="sosmed mt-10">
                            <div className="flex w-full my-4 md:flex  md:justify-center">
                                <img
                                    className="w-[24px] mr-5 "
                                    src={require("src/assets/mail-icon.png")}
                                    alt="smhfbdhf"/>
                                <p className="text-[#9EA0A5] font-normal text-base">Louistommo@gmail.com</p>
                            </div>
                            <div className="flex w-full my-4 md:flex  md:justify-center">
                                <img
                                    className="w-[24px] mr-5"
                                    src={require("src/assets/instagram.png")}
                                    alt="smhfbdhf"/>
                                <p className="text-[#9EA0A5] font-normal text-base">Louistommo@gmail.com</p>
                            </div>
                            <div className="flex w-full my-4 md:flex  md:justify-center">
                                <img
                                    className="w-[24px] mr-5"
                                    src={require("src/assets/github.png")}
                                    alt="smhfbdhf"/>
                                <p className="text-[#9EA0A5] font-normal text-base">Louistommo@gmail.com</p>
                            </div>
                            <div className="flex w-full my-4 md:flex  md:justify-center">
                                <img
                                    className="w-[24px] mr-5"
                                    src={require("src/assets/Vector.png")}
                                    alt="smhfbdhf"/>
                                <p className="text-[#9EA0A5] font-normal text-base">Louistommo@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardInfoDetailCompany
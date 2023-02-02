import React, {useState} from "react";

function CardDetailPortofolio() {

    const data = [
        2,
        4,
        5,
        6,
        64,
        5
    ]
    const [show, setShow] = useState(true)
    function CardPengalamanKerja() {
        return (data.map(() => (
            <div className="w-full flex py-10 border-b-[2px]">
                <div className="w-[25%] flex justify-center">
                    <img
                        className="w-10 h-10 tablet:w-16 tablet:h-16"
                        src={require("src/assets/tokopedia.png")}
                        alt="smhfbdhf"/>
                </div>
                <div className="w-[75%]">
                    <p className="text-[#1F2A36] text-xl font-semibold text-[#1F2A36] ">Engineer</p>
                    <p className="text-[#1F2A36] text-lg font-normal text-[#46505C] mt-3">Tokopedia</p>
                    <p className="text-[#1F2A36] text-base text-[#9EA0A5] mt-3 ">July 2019 - January 2020 6 months</p>
                    <p className="text-[#1F2A36] text-sm leading-6 mt-4">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                        Curabitur eu lacus fringilla, vestibulum risus at.</p>

                </div>
            </div>
        )))
    }
    return (
        <div className="flex ">
            <div className="w-full bg-white rounded-lg px-5 py-5 mb-10 ">
                <div className="card-profil flex-col justify-center items-center py-10">
                    <div className="flex flex-col ">
                        <div className="flex w-full tablet:w-[50%] text-base tablet:text-xl">
                            <p onClick={() => setShow(true)} className={show ? "w-1/2 border-b-[4px] pb-5 border-[#5E50A1] mr-3" : "w-1/2 text-[#9EA0A5] mr-3"  }>Portofolio</p>
                            <p onClick={() => setShow(false)} className={!show ? "w-1/2 border-b-[4px] pb-5 border-[#5E50A1]" : "w-1/2 text-[#9EA0A5]"  }>Pengalaman kerja</p>
                        </div>
                        <div className=" my-5 flex  w-full flex-wrap ">
                            {
                                show
                                    ? data.map(() => (
                                        <div
                                            className="tablet:w-[47%] my-5 tablet:mx-[1%] xl:mx-[1%] xl:w-[23%] tablet:flex tablet:flex-col tablet:items-center">
                                            <img
                                                className="w-full  my-5 "
                                                src={require("src/assets/Rectangle 637.webp")}
                                                alt="smhfbdhf"/>
                                            <p className="hidden xl:flex xl:text-[#1F2A36] xl:text-sm ">Remainder app</p>
                                        </div>
                                    ))
                                    : <CardPengalamanKerja/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetailPortofolio
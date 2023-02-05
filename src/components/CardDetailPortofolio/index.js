import axios from "axios";
import React, {useEffect, useState} from "react";

function CardDetailPortofolio() {
    const url = process.env.REACT_APP_HOST
    const [dataPortfolio, setDataPortfolio] = useState([])

    useEffect(() => {
        axios.get(`${url}/api/users-portfolio`)
            .then(res => setDataPortfolio(res.data.data))
            .catch((err) => console.log(err))
    }, [])

    // const loadPortfolio = async (limit, page) => {
    //     return await axios
    //         .get(`${url}/api/users-portfolio`)
    //         .then((res) => {
    //             setDataPortfolio(res.data.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

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
                        className="w-10 h-10 md:w-16 md:h-16"
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
                        <div className="flex w-full md:w-[50%] text-base md:text-xl">
                            <p onClick={() => setShow(true)} className={show ? "w-1/2 border-b-[4px] pb-5 border-[#5E50A1] mr-3" : "w-1/2 text-[#9EA0A5] mr-3"  }>Portofolio</p>
                            <p onClick={() => setShow(false)} className={!show ? "w-1/2 border-b-[4px] pb-5 border-[#5E50A1]" : "w-1/2 text-[#9EA0A5]"  }>Pengalaman kerja</p>
                        </div>
                        <div className=" my-5 flex  w-full flex-wrap ">
                            {
                                show ? dataPortfolio.map((item) => {
                                    const img = `${url}/uploads/images/${item.images[0].filename}`
                                    return (
                                        <div
                                            className="md:w-[47%] my-5 md:mx-[1%] lg:mx-[1%] lg:w-[23%] md:flex md:flex-col md:items-center">
                                            <img
                                                className="w-full  my-5 "
                                                src={img}
                                                alt="smhfbdhf" />
                                            <p className="hidden lg:flex lg:text-[#1F2A36] lg:text-sm ">{item.project_name}</p>
                                        </div>
                                    )
                                })
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

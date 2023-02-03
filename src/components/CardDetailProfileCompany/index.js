
import React from "react";

function CardInfoDetailCompany(props) {
    
    const {button, sosmed} = props

    const data = [2]
    const skill = [
        {
            tittle: "PHP"
        },{
            tittle: "javascript"
        },{
            tittle: "golang"
        },{
            tittle: "Kotlin"
        },{
            tittle: "C++"
        },{
            tittle: "C++"
        },{
            tittle: "React"
        },{
            tittle: "Veu.js"
        }
    ]
    const classSkill = "btn-secondary px-3 py-1 mr-3 my-3 text-sm"
    return (
        <div className="flex ">
            <div className="w-full bg-white rounded-lg px-5 py-5 mb-10 ">
                {
                    data.map(() => (
                        <div className="card-profil flex-col justify-center items-center py-10">
                            <div className="flex flex-col ">
                                <div className="mr-5 flex justify-center w-full">
                                    <img
                                        className="w-[150px]"
                                        src={require("src/assets/user-image.webp")}
                                        alt="smhfbdhf"/>
                                </div>
                                <div className="">
                                    <p className="text-3xl text-black font-semibold my-5">Louis Tomlinson</p>
                                    <p className="text-black mb-2">Web developer</p>
                                    <p className="text-[#9EA0A5] mb-3 font-normal text-base">Freelance</p>
                                    <div className="text-base font-normal">
                                        <div className="flex items-center mb-3">
                                            <img src={require("src/assets/map-pin.png")} alt="maps" className="w-4 h-4 mr-2"/>
                                            <p className="text-[#9EA0A5]">Bandung</p>
                                        </div>
                                        <div className="flex items-center mb-3">
                                            <img src={require("src/assets/phone-icon.png")} alt="maps" className="w-4 h-4 mr-2"/>
                                            <p className="text-[#9EA0A5]">0812 - 3456 - 789</p>
                                        </div>
                                        <p className="text-[#9EA0A5] mb-3">Talent</p>
                                        <p className="text-[#9EA0A5] mb-10">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                                            Curabitur eu lacus fringilla, vestibulum risus at.</p>
                                    </div>
                                    <div >
                                        {button}
                                    </div>
                                    <div className="skill">
                                        <p className="tesxt-2xl fon-semibold text-black mb-5">Skill</p>
                                        {
                                            skill.map((item) => (
                                                <button className={classSkill}>{item.tittle}</button>
                                            ))
                                        }
                                    </div>
                                </div>
                                {sosmed}
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default CardInfoDetailCompany
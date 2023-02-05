import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardDetailPortofolio from "src/components/CardDetailPortofolio";
import CardInfoDetail from "src/components/CardDetailProfile";

function HireSection() {
    const url = process.env.REACT_APP_HOST
    const idLoginCompany = JSON.parse(localStorage.getItem('@userLogin')).user.id_user
    const { id } = useParams()
    const navigate = useNavigate()

    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = new FormData();
        body.append('subject', subject);
        body.append('message', message);
        body.append('id_company', idLoginCompany)
        body.append('id_user', id)

        try {
            await axios.post(`${url}/api/hire`, body, {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                }
            })
            alert('Saved!')
        } catch (error) {
            console.log(error.response.data.message);
        }
        navigate('/home')
    }
    return (
        <div className="bg-[#E5E5E5] flex justify-center h-auto pb-24">
            <div className="container">
                <div
                    className="mt-10 mb-5 text-xl font-semibold w-full md:flex md:justify-between">
                    <div className="md:w-[29%]">
                        <CardInfoDetail/>
                    </div>
                    <div className="md:w-[60%]">
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <p className="text-3xl font-semibold text-[#1F2A36] mb-5">Hubungi Lous Tomlinson</p>
                                <p className="text-xl font-normal mb-12 text-[#46505C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et
                                    dui rhoncus auctor.</p>
                            </div>
                            <form className="flex flex-col" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <label className="text-base font-normal text-[#9EA0A5] mb-1">Tujuan tentang pesan ini</label>
                                    <input placeholder="Projek" className="p-4 rounded mb-6 text-lg font-normal" onChange={(e) => setSubject(e.target.value)}/>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-base font-normal text-[#9EA0A5] mb-1">pesan</label>
                                    <textarea className="h-[201px] font-normal text-lg" onChange={(e) => setMessage(e.target.value)}/>
                                </div>
                                <button className="btn-submit w-full font-base mt-12 p-4 text-[#000]" type="submit">
                                    Kirim
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireSection

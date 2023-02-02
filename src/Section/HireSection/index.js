import React from "react";
import CardDetailPortofolio from "src/components/CardDetailPortofolio";
import CardInfoDetail from "src/components/CardDetailProfile";

function HireSection() {
<<<<<<< HEAD
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
                            <form className="flex flex-col">
                                <div className="flex flex-col">
                                    <label className="text-base font-normal text-[#9EA0A5] mb-1">Tujuan tentang pesan ini</label>
                                    <input placeholder="Projek" className="p-4 rounded mb-6 text-lg font-normal"/>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-base font-normal text-[#9EA0A5] mb-1">pesan</label>
                                    <textarea className="h-[201px] font-normal text-lg"/>
                                </div>
                                <button className="btn-submit w-full font-base mt-12 p-4">
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
=======
  return (
    <div className="bg-[#E5E5E5] flex justify-center h-auto pb-24">
      <div className="container">
        <div className="mt-10 mb-5 text-xl font-semibold w-full md:flex md:justify-between">
          <div className="md:w-[29%]">
            <CardInfoDetail />
          </div>
          <div className="md:w-[69%]">
            <CardDetailPortofolio />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireSection;
>>>>>>> f9d947515261d4974332e6f026ab526bae8cd8ff

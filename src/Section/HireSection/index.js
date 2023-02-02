import React from "react";
import CardDetailPortofolio from "src/components/CardDetailPortofolio";
import CardInfoDetail from "src/components/CardDetailProfile";

function HireSection() {
    return (
        <div className="bg-[#E5E5E5] flex justify-center h-auto pb-24">
            <div className="container">
                <div className="mt-10 mb-5 text-xl font-semibold w-full tablet:flex tablet:justify-between">
                    <div className="tablet:w-[29%]">
                        <CardInfoDetail/>
                    </div>
                    <div className="tablet:w-[69%]">
                        <CardDetailPortofolio/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireSection
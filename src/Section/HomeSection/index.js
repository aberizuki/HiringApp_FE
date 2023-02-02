import CardInfoMobile from "src/components/Card-Info-mobile";
import React from "react";
import CardFilter from "src/components/Card-Filter";
import CardInfo from "src/components/Card-Info";

function HomeSection() {
    return (
        <div className="bg-[#E5E5E5] flex justify-center h-auto pb-24">
            <div className="container">
                <div className="">
                    <CardFilter/>
                    <div className="mt-10 mb-5 text-xl font-semibold">
                        Web developer
                    </div>
                </div>
                <CardInfo/>
                <CardInfoMobile/>
            </div>
        </div>
    )
}

export default HomeSection
import React from "react";
import CardFilter from "src/components/Card-Filter";
import CardInfo from "src/components/Card-Info";

function HomeSection() {
    return (
        <div className="bg-[#E5E5E5] flex justify-center">
            <div className="container">
                <div className="">
                    <CardFilter/>
                </div>
                <CardInfo/>
            </div>
        </div>
    )
}

export default HomeSection
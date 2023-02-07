import React from "react";
import CardInfoDetailCompany from "src/components/CardDetailProfileCompany";

function ProfileCompanySection() {
    return (
        <div className="bg-[#E5E5E5] flex justify-center h-auto pb-24">
            <div className="container">
                <div
                    className="mt-10 mb-5 text-xl font-semibold w-full md:flex md:justify-between">
                    <div className="md:w-full">
                        <CardInfoDetailCompany/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCompanySection
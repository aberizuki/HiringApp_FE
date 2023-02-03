import React from "react";
import CardDetailPortofolio from "src/components/CardDetailPortofolio";
import CardInfoDetail from "src/components/CardDetailProfile";

function PortofolioSection() {
  return (
    <div className="bg-[#E5E5E5] flex justify-center h-auto pb-24">
      <div className="flex justify-center m-20 container">
        <div className="mt-10 mb-5 text-xl font-semibold w-full md:flex md:justify-between">
          <div className="md:w-[29%]">
            <CardInfoDetail name="Peter Parker" />
          </div>
          <div className="md:w-[69%]">
            <CardDetailPortofolio />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortofolioSection;

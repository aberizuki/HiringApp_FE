import FormExperience from "src/components/FormExperience";
import React from "react";
import CardUserEdit from "@/components/CardEditUser";
import FormUserEdit from "src/components/FormEditProfile";
import FormUserSkill from "src/components/FormSkill";
import FormPortofolio from "src/components/FormPortofolio";

function PortofolioSection() {
  return (
    <div className="bg-[#E5E5E5] flex justify-center h-auto pb-24">
      <div className="flex justify-center m-[80px]">
        <div className="mt-10 mb-5 text-xl font-semibold w-full md:flex md:justify-between">
          <div className="md:w-[29%]">
            <CardUserEdit name="Tamura Hono" />
          </div>
          <div className="md:w-[69%]">
            <FormUserEdit />
            <FormUserSkill />
            <FormExperience />
            <FormPortofolio />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortofolioSection;

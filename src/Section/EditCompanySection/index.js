import React from "react";
import CardCompanyEdit from "src/components/CardEditCompany";
import FormCompanyEdit from "src/components/FormEditCompany";

function FormCompany() {
  return (
    <div className="bg-[#E5E5E5] flex justify-center h-auto pb-24">
      <div className="container flex justify-center">
        <div className="mt-10 mb-5 text-xl font-semibold w-full md:flex md:justify-between">
          <div className="md:w-[29%]">
            <CardCompanyEdit name="PT Nogizaka46" />
          </div>
          <div className="md:w-[69%]">
            <FormCompanyEdit />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCompany;

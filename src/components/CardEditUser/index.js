import React from "react";

function CardUserEdit(props) {
  const { name } = props;
  const data = [2];

  return (
    <>
      <div className="flex ">
        <div className="w-full bg-white rounded-lg px-5 py-5 mb-10 ">
          <div className="card-profil flex-col justify-center items-center py-10">
            <div className="flex flex-col ">
              <div className="mr-5 flex justify-center w-full">
                <img
                  className="w-[150px] rounded-full"
                  src={require("src/assets/img/hono.jpg")}
                  alt="smhfbdhf"
                />
              </div>
              <div className="">
                <div className="text-[#9EA0A5] flex justify-center mt-5">
                  Edit
                </div>
                <p className="text-3xl text-black font-semibold my-5">{name}</p>
                <p className="text-black mb-2">Web developer - Freelance</p>
                <div className="text-base font-normal">
                  <p className="text-[#9EA0A5] mb-3">Bandung</p>
                  <p className="text-[#9EA0A5] mb-3">Talent</p>
                  <p className="text-[#9EA0A5] mb-3">Talent</p>
                  <p className="text-[#9EA0A5]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="btn-primary py-4 px-8 w-full mb-10">
          Edit Password
        </button>
        <button className="bg-transparent text-[#5E50A1] border border-[#5E50A1] rounded py-4 px-8 w-full mb-10">
          Back
        </button>
      </div>
    </>
  );
}

export default CardUserEdit;

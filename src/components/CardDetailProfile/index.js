import React from "react";

function CardInfoDetail(props) {
  const { name } = props;
  const data = [2];

  return (
    <div className="flex ">
      <div className="w-full bg-white rounded-lg px-5 py-5 mb-10 ">
        {data.map(() => (
          <div className="card-profil flex-col justify-center items-center py-10">
            <div className="flex flex-col ">
              <div className="mr-5 flex justify-center w-full">
                <img
                  className="w-[150px] rounded-full"
                  src={require("src/assets/img/hono.jpg")}
                  alt="smhfbdhf"
                />
              </div>
              <div className="mb-16">
                <p className="text-3xl text-black font-semibold my-5">{name}</p>
                <p className="text-black mb-2">Web developer - Freelance</p>
                <div className="text-base font-normal">
                  <p className="text-[#9EA0A5] mb-3">Bandung</p>
                  <p className="text-[#9EA0A5] mb-3">Talent</p>
                  <p className="text-[#9EA0A5] mb-3">Talent</p>
                  <p className="text-[#9EA0A5] mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p>
                </div>
                <div>
                  <button className="btn-primary py-4 px-8 w-full mb-10">
                    Lihat Profile
                  </button>
                </div>
                <div className="skill">
                  <p className="tesxt-2xl fon-semibold text-black mb-5">
                    Skill
                  </p>
                  <button className="btn-secondary px-6 py-1 mr-3 my-3">
                    PHP
                  </button>
                  <button className="btn-secondary px-6 py-1 mr-3 my-3">
                    JavaScript
                  </button>
                  <button className="btn-secondary px-6 py-1 mr-3 my-3">
                    PHP
                  </button>
                  <button className="btn-secondary px-6 py-1 mr-3 my-3">
                    HTML
                  </button>
                  <button className="btn-secondary px-6 py-1 mr-3 my-3">
                    LARAVEL
                  </button>
                  <button className="btn-secondary px-6 py-1 mr-3 my-3">
                    KOTLIN
                  </button>
                  <button className="btn-secondary px-6 py-1 mr-3 my-3">
                    C++
                  </button>
                  <button className="btn-secondary px-6 py-1 mr-3 my-3">
                    SWIFT
                  </button>
                </div>
              </div>
              <div>
                <div className="flex w-full my-4">
                  <img
                    className="w-[24px] mr-5"
                    src={require("src/assets/mail-icon.png")}
                    alt="smhfbdhf"
                  />
                  <p className="text-[#9EA0A5] font-normal text-base">
                    Louistommo@gmail.com
                  </p>
                </div>
                <div className="flex w-full my-5">
                  <img
                    className="w-[24px] mr-5"
                    src={require("src/assets/instagram.png")}
                    alt="smhfbdhf"
                  />
                  <p className="text-[#9EA0A5] font-normal text-base">
                    Louistommo@gmail.com
                  </p>
                </div>
                <div className="flex w-full my-5">
                  <img
                    className="w-[24px] mr-5"
                    src={require("src/assets/github.png")}
                    alt="smhfbdhf"
                  />
                  <p className="text-[#9EA0A5] font-normal text-base">
                    Louistommo@gmail.com
                  </p>
                </div>
                <div className="flex w-full my-5">
                  <img
                    className="w-[24px] mr-5"
                    src={require("src/assets/Vector.png")}
                    alt="smhfbdhf"
                  />
                  <p className="text-[#9EA0A5] font-normal text-base">
                    Louistommo@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardInfoDetail;

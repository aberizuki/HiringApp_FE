import React from "react";

function CardInfoMobile() {
  const data = [2, 3, 3, 5, 6, 6, 6];

  return (
    <div className="flex md:hidden flex-col">
      {data.map(() => (
        <div className="w-full bg-white rounded-lg px-4 mt-2">
          <div className="card-profil flex justify-between items-center py-4">
            <div className="flex items-center ">
              <div className="mr-5">
                <img
                  className="w-[70px]"
                  src={require("src/assets/user-image.webp")}
                  alt="smhfbdhf"
                />
              </div>
              <div>
                <p className="text-sm text-black font-semibold mb-3">
                  Louis Tomlinson
                </p>
                <p className="text-[#9EA0A5] text-xs">
                  Web developer - Freelance
                </p>
                <p className="text-[#9EA0A5] mb-2 text-xs">Bandung</p>
                <div className="flex">
                  <button className="btn-secondary px-2 py-1 mr-1 text-[12px]">
                    PHP
                  </button>
                  <button className="btn-secondary px-2 py-1 mr-1 text-[12px]">
                    JavaScript
                  </button>
                  <button className="btn-secondary px-2 py-1 mr-1 text-[12px]">
                    HTML
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardInfoMobile;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Paginations from "./paginations";
import axios from "axios";

function CardInfo() {
  const navigate = useNavigate();
  const data = [2, 3, 3, 5];

  const [isData, setIsData] = useState([]);
  const [filter, setFilter] = useState("");

  const getData = () => {
    axios
      .get(`http://localhost:5500/api/users`)
      .then((res) => {
        console.log(res.data.data);
        setIsData(res?.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("data", isData);

  return (
    <div className="hidden md:flex md:flex-col md:items-center">
      <div className="w-full bg-white rounded-lg px-5 mb-10 ">
        {isData?.map((item, i) => (
          <div className="card-profil flex justify-between items-center py-10">
            <div className="flex ">
              <div className="mr-5">
                <img
                  className="w-[100px] rounded-full"
                  // src={require("src/assets/user-image.webp")}
                  src={item.avatar}
                  alt="smhfbdhf"
                />
              </div>
              <div>
                <p className="text-2xl text-black font-semibold mb-3">
                  {item.name}
                </p>
                <p className="text-[#9EA0A5]">{item.jobs}</p>
                <p className="text-[#9EA0A5] mb-2">{item.address}</p>
                <div>
                  <button className="btn-secondary px-6 py-1 mr-3">PHP</button>
                  <button className="btn-secondary px-6 py-1 mr-3">
                    JavaScript
                  </button>
                  <button className="btn-secondary px-6 py-1 mr-3">HTML</button>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => navigate("profile-portofolio")}
                className="btn-primary py-4 px-8 mr-12"
              >
                Lihat Profile
              </button>
            </div>
          </div>
        ))}
      </div>
      <Paginations />
    </div>
  );
}

export default CardInfo;

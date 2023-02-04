import React from "react";
import Footer from "src/Section/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, HashNavigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <main>
      <section>
        <div className="w-full flex justify-center h-[100px]">
          <div className="flex justify-center w-[90%]">
            <div className="flex justify-between items-center w-full">
              <div>
                <img
                  className="ml-5"
                  src={require("src/assets/img/logo.png")}
                  alt="logo-peworld"
                />
              </div>
              <div className="flex m-5">
                <div>
                  <Link to="/option-login">
                    <button className="bg-transparent text-[#5E50A1] font-semibold py-2 px-4 border border-[#5E50A1] rounded mr-5">
                      Log in
                    </button>
                  </Link>
                </div>

                <div>
                  <Link to="/option-regist">
                    <button className="bg-[#5E50A1] hover:bg-[#5E50A1] text-white font-bold py-2 px-4 rounded">
                      Sign in
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="lg:flex justify-center">
          <div className="m-10 lg:m-[50px] lg:ml-[100px]">
            <div className=" text-[30px] mb-5 lg:pt-[100px] font-semibold">
              Talenta terbaik negeri <br /> untuk perubahan <br /> revolusi 4.0
            </div>
            <div className="mb-5 text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </div>
            <div className="mb-5">
              <button className="bg-[#5E50A1] hover:bg-[#5E50A1] text-white font-bold py-2 px-4 rounded">
                Start from now
              </button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center m-10 lg:mr-[100px]">
            <img className="" src={require("src/assets/img/Landing1.png")} />
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="lg:flex">
          <div className="hidden lg:flex justify-center m-10">
            <img className="" src={require("src/assets/img/Landing2.png")} />
          </div>
          <div className="m-10 lg:mt-[80px] lg:mr-[100px]">
            <div className=" text-[30px] mb-10 font-semibold">
              Kenapa harus mencari talent di peworld
            </div>
            <div className="mb-8 text-[13px]">
              <div className="flex mb-5">
                <img
                  className="ml-5 w-[24] h-[24] mr-5"
                  src={require("src/assets/img/tick1.png")}
                  alt="logo-peworld"
                />
                <div className="text-[16px]"> Lorem ipsum dolor sit amet</div>
              </div>
            </div>
            <div className="mb-8 text-[13px]">
              <div className="flex mb-5">
                <img
                  className="ml-5 w-[24] h-[24] mr-5"
                  src={require("src/assets/img/tick1.png")}
                  alt="logo-peworld"
                />
                <div className="text-[16px]"> Lorem ipsum dolor sit amet</div>
              </div>
            </div>
            <div className="mb-8 text-[13px]">
              <div className="flex mb-5">
                <img
                  className="ml-5 w-[24] h-[24] mr-5"
                  src={require("src/assets/img/tick1.png")}
                  alt="logo-peworld"
                />
                <div className="text-[16px]"> Lorem ipsum dolor sit amet</div>
              </div>
            </div>
            <div className="mb-8 text-[13px]">
              <div className="flex mb-5">
                <img
                  className="ml-5 w-[24] h-[24] mr-5"
                  src={require("src/assets/img/tick1.png")}
                  alt="logo-peworld"
                />
                <div className="text-[16px]"> Lorem ipsum dolor sit amet</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="lg:flex justify-end">
          <div className="m-10 lg:ml-[100px] lg:mr-[0px]">
            <div className=" text-[30px] mb-5 font-semibold">Skill Talent</div>
            <div className="mb-5 text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </div>
            <div className="mb-5 flex w-[100%]">
              <div className="w-[50%]">
                <div className="mb-8 text-[13px]">
                  <div className="flex mb-10">
                    <img
                      className="ml-5 w-[24] h-[24] mr-5"
                      src={require("src/assets/img/tick2.png")}
                      alt="logo-peworld"
                    />
                    <div className="text-[16px]">Java</div>
                  </div>
                  <div className="flex mb-10">
                    <img
                      className="ml-5 w-[24] h-[24] mr-5"
                      src={require("src/assets/img/tick2.png")}
                      alt="logo-peworld"
                    />
                    <div className="text-[16px]">Kotlin</div>
                  </div>
                  <div className="flex mb-10">
                    <img
                      className="ml-5 w-[24] h-[24] mr-5"
                      src={require("src/assets/img/tick2.png")}
                      alt="logo-peworld"
                    />
                    <div className="text-[16px]">PHP</div>
                  </div>
                  <div className="flex mb-10">
                    <img
                      className="ml-5 w-[24] h-[24] mr-5"
                      src={require("src/assets/img/tick2.png")}
                      alt="logo-peworld"
                    />
                    <div className="text-[16px]">JavaScript</div>
                  </div>
                </div>
              </div>
              <div className="w-[50%]">
                <div className="mb-8 text-[13px]">
                  <div className="flex mb-10">
                    <img
                      className="ml-5 w-[24] h-[24] mr-5"
                      src={require("src/assets/img/tick2.png")}
                      alt="logo-peworld"
                    />
                    <div className="text-[16px]">Golang</div>
                  </div>
                  <div className="flex mb-10">
                    <img
                      className="ml-5 w-[24] h-[24] mr-5"
                      src={require("src/assets/img/tick2.png")}
                      alt="logo-peworld"
                    />
                    <div className="text-[16px]">C++</div>
                  </div>
                  <div className="flex mb-10">
                    <img
                      className="ml-5 w-[24] h-[24] mr-5"
                      src={require("src/assets/img/tick2.png")}
                      alt="logo-peworld"
                    />
                    <div className="text-[16px]">Ruby</div>
                  </div>
                  <div className="flex mb-10">
                    <img
                      className="ml-5 w-[24] h-[24] mr-5"
                      src={require("src/assets/img/tick2.png")}
                      alt="logo-peworld"
                    />
                    <div className="text-[16px]">etc.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center m-10 lg:mr-[100px]">
            <img className="" src={require("src/assets/img/Landing3.png")} />
          </div>
        </div>
      </section>
      <section className="p-[20px] bg-[#E2E5ED] lg:p-[50px]">
        <div className="text-[20px] lg:text-[36px] font-semibold flex justify-center m-10">
          Their opinion about Peworld
        </div>
        <div className="flex justify-center">
          <div className="w-full justify-items-center">
            <div className="justify-items-center z-[-10]">
              <Swiper
                spaceBetween={30}
                hashNavigation={{
                  watchState: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, HashNavigation]}
                className="mySwiper"
              >
                <SwiperSlide data-hash="slide1">
                  <div className="flex justify-center">
                    <img
                      className="h-[30px] w-[30px] rounded-full border-8 border-[#FBB0175E] m-5"
                      src={require("src/assets/img/hikaru.jpg")}
                      alt="logo-peworld"
                    />
                  </div>
                  <div className="px-5">
                    <h5 className="text-gray-900 text-[30px] font-medium mb-2 flex justify-center">
                      Morita Hikaru
                    </h5>
                    <div className="text-gray-700 mb-4 flex justify-center">
                      Web Developer
                    </div>
                    <p className="text-gray-700 mb-4 flex text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In euismod ipsum et dui rhoncus auctor.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide2">
                  <div className="flex justify-center">
                    <img
                      className="h-[30px] w-[30px] rounded-full border-8 border-[#FBB0175E] m-5 p-[]"
                      src={require("src/assets/img/hono.jpg")}
                      alt="logo-peworld"
                    />
                  </div>
                  <div className="px-5">
                    <h5 className="text-gray-900 text-[30px] font-medium mb-2 flex justify-center">
                      Tamura Hono
                    </h5>
                    <div className="text-gray-700 mb-4 flex justify-center">
                      Web Developer
                    </div>
                    <p className="text-gray-700 mb-4 flex text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In euismod ipsum et dui rhoncus auctor.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide3">
                  <div className="flex justify-center">
                    <img
                      className="h-[30px] w-[30px] rounded-full border-8 border-[#FBB0175E] m-5"
                      src={require("src/assets/img/mizuki.jpg")}
                      alt="logo-peworld"
                    />
                  </div>
                  <div className="px-5">
                    <h5 className="text-gray-900 text-[30px] font-medium mb-2 flex justify-center">
                      Yamashita Mizuki
                    </h5>
                    <div className="text-gray-700 mb-4 flex justify-center">
                      Web Developer
                    </div>
                    <p className="text-gray-700 mb-4 flex text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In euismod ipsum et dui rhoncus auctor.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="w-full flex justify-center h-[250px]">
          <div className="flex justify-center w-[100%] h-[100%] p-10">
            <div className="flex justify-between items-center w-[90%] bg-banner bg-no-repeat bg-cover rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-b-lg">
              <div className="text-[25px] m-5 lg:text-[36px] lg:ml-[40px] text-[#FFFFFF]">
                Lorem ipsum <br />
                dolor sit amet
              </div>
              <div className="flex m-5">
                <div>
                  <button className="bg-[#FFFFFF] hover:bg-[#5E50A1] text-[#5E50A1] font-semibold hover:text-white py-2 px-4 border border-[#5E50A1] hover:border-transparent rounded mr-5">
                    Start from now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <footer className="flex justify-center w-full bg-[#5E50A1]">
        <div className="container text-lg text-white">
          <div className="flex flex-col pt-[70px] pb-10">
            <div className="w-full md:w-full lg:w-[30%]">
              <img
                className="mx-8 md:mx-[0px] lg:mx-[0px]"
                src={require("src/assets/img/logo-white.png")}
                alt="logo"
              />
              <p className="mx-8 my-8 md:mx-[0px] lg:mx-[0px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
            </div>
            <hr className="h-[1.5px] my-8 mb  border-0 bg-white "></hr>
            <div className="flex justify-between">
              <p className="mx-8 md:mx-[0px] lg:mx-[0px]">
                2020 Pewworld. All right reserved
              </p>
              <div className="flex">
                <p className="mr-20">Phone</p>
                <p className="mr-8 md:mx-[0px] lg:mx-[0px]">Email</p>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </main>
  );
}

export default Landing;

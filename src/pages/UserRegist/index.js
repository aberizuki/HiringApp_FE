import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function UserRegist() {
  const urlApi = process.env.REACT_APP_HOST

  const [signupForm, setSignupForm] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [validate, setValidate] = useState({ error: false, message: "" });
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    console.log(signupForm);
    axios({
      url: `${urlApi}/api/auth/regis-user`,
      method: "POST",
      data: signupForm,
    })
      .then((res) => {
        // console.log(res.data.data);
        alert(res.data.message);
        navigate("/user-login");
      })
      .catch((err) => {
        setValidate({ error: true, message: err.response.data.errors });
      });
  };

  return (
    <>
      <main className="bg-[#F6F7F8] h-screen flex">
        <section className="invisible w-[0px] lg:visible lg:w-screen">
          <div className="m-[50px] align-center h-[85%] bg-hero from-violet-500 to-fuchsia-500 bg-no-repeat bg-cover">
            <div className="">
              <img
                className="pl-10 pt-10 invisible lg:visible"
                src={require("src/assets/img/logo-white.png")}
              />
            </div>
            <div className="lg:text-[44px] m-[50px] mt-[130px] font-semibold text-white">
              Temukan developer <br /> berbakat & terbaik <br /> di berbagai
              bidang <br /> keahlian
            </div>
          </div>
        </section>
        <section className="w-screen">
          <div className="h-[85%] lg:m-[50px]">
            <div>
              <img
                className="pl-5 pt-10 lg:invisible"
                src={require("src/assets/img/logo.png")}
              />
            </div>
            <div className="visiblepl-5 pl-5 pt-10 text-[32px] font-bold text-[#46505C] lg:invisible lg:h-[0%] ">
              Sign up
            </div>
            <div className=" invisible lg:visible lg:pl-5 lg:text-[32px] font-bold text-[#46505C]">
              Hello, Pewpeople
            </div>

            <div className="pl-5 pt-2 text-[14px] text-[#858D96]">
              Insert your Email and Password to register
            </div>
            <form onSubmit={handleSignup} className=" mt-10 ml-5 mr-5">
              {validate.error && (
                <div className="alert alert-error shadow-lg my-3 bg-red-400 p-5 rounded">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{validate.message}</span>
                  </div>
                </div>
              )}
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Name
                </span>
                <input
                  onChange={(e) =>
                    setSignupForm({
                      ...signupForm,
                      full_name: e.target.value,
                    })
                  }
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Insert your Name"
                />
              </div>
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Email
                </span>
                <input
                  onChange={(e) =>
                    setSignupForm({
                      ...signupForm,
                      email: e.target.value,
                    })
                  }
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="email"
                  placeholder="Insert your Email"
                />
              </div>

              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Phone
                </span>
                <input
                  onChange={(e) =>
                    setSignupForm({
                      ...signupForm,
                      phone: e.target.value,
                    })
                  }
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Insert your Phone"
                />
              </div>
              <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Password
                </span>
                <input
                  onChange={(e) =>
                    setSignupForm({
                      ...signupForm,
                      password: e.target.value,
                    })
                  }
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="password"
                  placeholder="Insert your Password"
                />
              </div>
              {/* <div className="mb-4">
                <span className="ml-1 block text-[12px] text-[#858D96]">
                  Confirm Password
                </span>
                <input
                  className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Confirm Password"
                />
              </div> */}
              <div className="flex justify-center m-5">
                <button
                  type="submit"
                  className="bg-[#FBB017] text-white font-bold py-2 px-4 w-[343px] h-[50px] w-[100%] rounded"
                >
                  Submit
                </button>
              </div>
              <div className="flex justify-center m-7">
                <div className="text-[14px]">Already have an account?</div>
                <Link to="/user-login">
                  <div className="text-[14px] ml-1 text-[#FBB017]">
                    Click here
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

// export default Login;

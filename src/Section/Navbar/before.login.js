import React from "react";
import { Link } from "react-router-dom";

function BeforeLogin() {
  return (
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
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BeforeLogin;

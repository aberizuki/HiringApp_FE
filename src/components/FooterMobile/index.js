import React from "react";
import { useNavigate } from "react-router-dom";



function FooterMobile() {

    const Navigate = useNavigate()

    return (
        <div className="flex md:hidden bg-transparent shadow fixed bottom-0 w-full">
            <div
                className="h-20 rounded-t-[30px] w-full bg-white p-7 flex w-full justify-between">
                <img src={require("src/assets/home-icon.png")} 
                onClick={()=> Navigate("/home")}
                alt="" className="w-6 h-6"/>
                <img src={require("src/assets/search.png")} 
                onClick={()=> Navigate("/search-mobile")}
                alt="" className="w-6 h-6"/>
                <img src={require("src/assets/chat-icon.png")} alt="" className="w-6 h-6"/>
                <img src={require("src/assets/avatar-icon.png")} alt="" className="w-6 h-6"/>
            </div>
            
        </div>
    )
}

export default FooterMobile

function CardSortCompany(props) {
    const {onGetValue} =props


    const Btn = "py-5 w-full text-start border-b-[2px] rounded hover:bg- hover:text-[#5E50A1]"
    return(
    <>
            <img
                src={require("src/assets/bg-sort.webp")}
                alt=""
                className="w-[300px] h-[300px] absolute top-10 right-[10%]"/>
            <div className="absolute top-[100px] right-[11.5%] px-5">
                <div className="z-10 flex-col flex items-start text-lg">
                    <button className={Btn} onClick={()=>onGetValue("skill")}>Sortir berdasarkan Skill</button>
                    <button className={Btn} onClick={()=>onGetValue("Tech")}>Sortir berdasarkan Tech</button>
                    <button className={Btn} onClick={()=>onGetValue("NonTech")}>Sortir berdasarkan NonTech</button>
                </div>
            </div>
        </>
    )
}


export default CardSortCompany
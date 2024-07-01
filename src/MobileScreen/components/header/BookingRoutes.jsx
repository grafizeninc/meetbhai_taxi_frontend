import React from 'react'
import { Link } from 'react-router-dom'
import AirportSearchingScreen from '../searching/AirportSearchingScreen'
import LocalSearchingScreen from '../searching/LocalSearchingScreen'

export default function BookingRoutes({ airportSelector, destinationSelector, packageSelector, citySelector, activeMainTab, setActiveMainTab, activeTab, setactiveTab, airportSearchBarActive, localSearchBarActive, menuOverLap }) {

    const datalist = [
        { w: "w-[80px]", redirection: "/", ico: "../../../public/IMG/sidebar/airport-black.png", icoActive: "../../../public/IMG/sidebar/airport-white.png", name: "Airport/Local" },
        { w: "w-[80px]", redirection: "/", ico: "../../../public/IMG/sidebar/outstation-black.png", icoActive: "../../../public/IMG/sidebar/outstation-white.png", name: "Out station" },
        { w: "w-[80px]", redirection: "/", ico: "../../../public/IMG/sidebar/hourly-black.png", icoActive: "../../../public/IMG/sidebar/hourly-white.png", name: "Hourly Rental" },
    ]

    return (
        <>
            <div className={` w-100 py-1 px-3 pb-5 mx-auto  ${menuOverLap ? "min-h-fit max-h-fit h-fit" : " "} col bs-blue rounded-t-none rounded-b-3xl relative flex flex-col items-center justify-between shadow-md rounded-r- `}>

                <div className={`${airportSearchBarActive || localSearchBarActive ? "hidden" : ""}  w-100 flex items-center justify-between`}>
                    <div className="">
                        <p className='text-[25px] p-0 m-0 tx-white font-bold font-Outfit'>HI,</p>
                        <p className='text-[18px] p-0 m-0 tx-white font-Outfit'>Welcome to <span className=' font-semibold'>YBGO!!</span> </p>
                    </div>
                    <div className="w-fit">
                        <div className="w-[clamp(40px,40px,40px)] h-[clamp(40px,40px,40px)] bs-org rounded-full flex items-center justify-center relative">
                            <i class="fa-light fa-bell tx-white text-[18px]"></i>
                            <div className="absolute top-0 end-0 rounded-full w-[clamp(13px,13px,13px)] h-[clamp(13px,13px,13px)] bs-white text-[9px] flex items-center justify-center font-bold font-Outfit">2</div>
                        </div>
                    </div>
                </div>

                <div className={`${airportSearchBarActive || localSearchBarActive ? "hidden" : ""} w-100 min-h-[130px] bg-[#b1afaf] rounded-lg my-2`}>
                    <div className=""> 
                    </div>
                </div>

                <div className={`${airportSearchBarActive || localSearchBarActive ? "hidden" : ""}  h-fit w-[85%] my-2 flex justify-center gap-2 ${menuOverLap ? "" : "absolute top-100 start-50 translate-middle "}`}>
                    <div className="flex gap-3">
                        {datalist.map((item) => (
                            <Link to={item.redirection}>
                                <div onClick={() => setActiveMainTab(item.name)} className={`shadow-md ${activeMainTab === item.name ? "bs-org" : "bs-white border-1 border-blue"}  rounded-lg pointer flex flex-col px-2 items-center justify-end w-[clamp(90px,90px,90px)] h-[clamp(90px,90px,90px)]`}   >
                                    <div className={`px-2 flex items-center justify-center ${item.w} h-[clamp(100px,100px,100px)]`}>
                                        <img className={`${item.w}  object-`} src={activeMainTab === item.name ? item.icoActive : item.ico} alt="" />
                                    </div>
                                    <p className={`px-1 w-100 text-center text-[10px] font-semibold font-Outfit border-t-1 py-0.5   ${activeMainTab === item.name ? "tx-white border-white" : "tx-blue border-org"} `}>{item.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={`${airportSearchBarActive || localSearchBarActive ? "hidden" : ""}  h-fit w-[100%] flex justify-center absolute top-100 start-50 translate-middle`}>
                    <div className="flex border-1 rounded-lg bs-white overflow-hidden">
                        <div onClick={() => setactiveTab("Airport")} className={` ${activeTab === "Airport" ? "bs-org tx-white slide-right font-bold" : "  bs-white tx-black font-semibold"}  flex items-center pointer px-4 py-1.5 rounded-md gap-2 `}>
                            <p className='text-[16px] font-Outfit'>Airport</p>
                        </div>
                        <div onClick={() => setactiveTab("Local")} className={` ${activeTab === "Local" ? " bs-org tx-white slide-left font-bold" : " bs-white tx-black font-semibold"}  flex items-center pointer px-4 py-1.5 rounded-md gap-2 `}>
                            <p className='text-[16px] font-Outfit'>Local</p>
                        </div>
                    </div>
                </div>


                {airportSearchBarActive && <AirportSearchingScreen airportSelector={airportSelector} destinationSelector={destinationSelector} />}
                {localSearchBarActive && <LocalSearchingScreen packageSelector={packageSelector} citySelector={citySelector} />}
            </div>

        </>
    )
}

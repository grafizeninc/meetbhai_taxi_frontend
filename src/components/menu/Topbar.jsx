import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Topbar({ activeMainTab, setActiveMainTab, menuOverLap, setmenuOverLap, setAddPakagesModal, currentLocation }) {



    const handleaddPakagesModal = () => {
        setAddPakagesModal(true)
    }

    const datalist = [
        { w: "w-[90px]", click: () => setmenuOverLap(true), redirection: "/", ico: "../../../public/IMG/sidebar/airport-black.png", icoActive: "../../../public/IMG/sidebar/airport-white.png", name: "Airport/Local" },
        { w: "w-[90px]", click: () => setmenuOverLap(true), redirection: "/", ico: "../../../public/IMG/sidebar/outstation-black.png", icoActive: "../../../public/IMG/sidebar/outstation-white.png", name: "Out station" },
        { w: "w-[90px]", click: () => setmenuOverLap(true), redirection: "/", ico: "../../../public/IMG/sidebar/hourly-black.png", icoActive: "../../../public/IMG/sidebar/hourly-white.png", name: "Hourly Rental" },
    ]


    return (
        <>
            <div className={`w-100 py-3 px-4 pb-5 mx-auto  ${menuOverLap ? "min-h-[250px] max-h-[250px] " : "min-h-[150px] max-h-[150px]"} col bs-blue rounded-b-3xl relative flex flex-col items-center justify-between shadow-md rounded-r- `}>

                <div className="w-100 flex justify-between">
                    <div className="">
                        <p className='text-[30px] p-0 m-0 tx-white font-bold font-Outfit'>HI,</p>
                        <p className='text-[20px] p-0 m-0 tx-white font-Outfit'>Welcome to <span className=' font-semibold'>YBGO!!</span> </p>
                    </div>
                    <div className="w-fit">
                        <div className="w-[clamp(40px,40px,40px)] h-[clamp(40px,40px,40px)] bs-org rounded-full flex items-center justify-center relative">
                            <i class="fa-light fa-bell tx-white text-[18px]"></i>
                            <div className="absolute top-0 end-0 rounded-full w-[clamp(13px,13px,13px)] h-[clamp(13px,13px,13px)] bs-white text-[9px] flex items-center justify-center font-bold font-Outfit">2</div>
                        </div>
                    </div>
                </div>
                <div className={`h-fit w-[80%] flex justify-center gap-2 ${menuOverLap ? "" : "absolute top-100 start-50 translate-middle "}`}>
                    <div className="flex gap-5">
                        <div className="flex gap-3">
                            {datalist.map((item) => (
                                <Link to={item.redirection}>
                                    <div onClick={() => setActiveMainTab(item.name)} className={`shadow-md ${activeMainTab === item.name ? "bs-org" : "bs-white border-1 border-blue"}  rounded-lg pointer flex flex-col px-2 items-center justify-end w-[clamp(100px,100px,100px)] h-[clamp(100px,100px,100px)]`}   >
                                        <div className={`px-2 flex items-center justify-center ${item.w} h-[clamp(100px,100px,100px)]`}>
                                            <img className={`${item.w}  object-`} src={activeMainTab === item.name ? item.icoActive : item.ico} alt="" />
                                        </div>
                                        <p className={`px-1 w-100 text-center text-[10px] font-semibold font-Outfit border-t-1 py-0.5   ${activeMainTab === item.name ? "tx-white border-white" : "tx-blue border-org"} `}>{item.name}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`h-fit w-[100%] flex justify-center absolute top-100 start-50 translate-middle`}>
                    <div className="flex border-1 rounded-lg bs-white overflow-hidden">
                        <div onClick={() => setActiveMainTab("Airport")} className={` ${activeMainTab === "Airport" ? "bs-org tx-white slide-right font-bold" : "  bs-white tx-black font-semibold"}  flex items-center pointer px-4 py-2 rounded-md gap-2 `}>
                            <p className='text-[16px] font-Outfit'>Airport</p>
                        </div>
                        <div onClick={() => setActiveMainTab("Local")} className={` ${activeMainTab === "Local" ? " bs-org tx-white slide-left font-bold" : " bs-white tx-black font-semibold"}  flex items-center pointer px-4 py-2 rounded-md gap-2 `}>
                            <p className='text-[16px] font-Outfit'>Local</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BottomBar() {

    const [activeTab, setActiveTab] = useState("")

    const datalist = [
        { w: "w-[45px]", click: () => setmenuOverLap(true), redirection: "/airport", ico: "../../../public/IMG/BottomBar/home-black.png", icoActive: "../../../public/IMG/BottomBar/home-org.png", name: "Home" },
        { w: "w-[45px]", click: () => setmenuOverLap(true), redirection: "/local-trips", ico: "../../../public/IMG/BottomBar/calender-black.png", icoActive: "../../../public/IMG/BottomBar/calender-org.png", name: "Booking" },
        { w: "w-[45px]", click: () => setmenuOverLap(true), redirection: "/local-trips", ico: "../../../public/IMG/BottomBar/offer-black.png", icoActive: "../../../public/IMG/BottomBar/offer-org.png", name: "Offers" },
        { w: "w-[45px]", click: () => setmenuOverLap(true), redirection: "/local-trips", ico: "../../../public/IMG/BottomBar/customer-black.png", icoActive: "../../../public/IMG/BottomBar/customer-org.png", name: "Help" },
        { w: "w-[45px]", click: () => setmenuOverLap(true), redirection: "/local-trips", ico: "../../../public/IMG/BottomBar/user-black.png", icoActive: "../../../public/IMG/BottomBar/user-org.png", name: "Profile" },
    ]


    return (
        <>
            <div className="w-100 fixed bottom-0 start-0 bs-white py-2 shadow-md  " >
                <div className="flex w-100">
                    {datalist.map((item) => (
                        <div onClick={() => setActiveTab(item.name)} className={`rounded-lg pointer flex flex-col px-2 items-center justify-center col  ${activeTab === item.name ? "" : " "} `}   >
                            <div className={`px-2 flex items-center justify-center ${item.w}`}>
                                <img className={`${item.w}  object-`} src={activeTab === item.name ? item.icoActive : item.ico} alt="" />
                            </div>
                            <p className={`px-1 w-100 text-center text-[10px] font-semibold font-Outfit  py-0.5   ${activeTab === item.name ? "tx-org border-white" : "tx-black border-org"} `}>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

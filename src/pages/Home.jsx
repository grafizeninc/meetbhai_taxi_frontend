import { DatePicker } from '@nextui-org/react';
import React, { useState } from 'react';
import BottomBar from '../components/menu/BottomBar';
import { Link } from 'react-router-dom';

export default function Home({ activeMainTab, setActiveMainTab, menuOverLap, setmenuOverLap }) {
    console.log("🚀 ~ Home ~ activeMainTab:", activeMainTab)
    const [activeTab, setactiveTab] = useState("from-airport");
    const [activeWhichLocationTab, setactiveWhichLocationTab] = useState("");
    const [addStop, setAddStop] = useState(false);


    const datalist = [
        { w: "w-[90px]", click: () => setmenuOverLap(true), redirection: "/", ico: "../../../public/IMG/sidebar/airport-black.png", icoActive: "../../../public/IMG/sidebar/airport-white.png", name: "Airport/Local" },
        { w: "w-[90px]", click: () => setmenuOverLap(true), redirection: "/", ico: "../../../public/IMG/sidebar/outstation-black.png", icoActive: "../../../public/IMG/sidebar/outstation-white.png", name: "Out station" },
        { w: "w-[90px]", click: () => setmenuOverLap(true), redirection: "/", ico: "../../../public/IMG/sidebar/hourly-black.png", icoActive: "../../../public/IMG/sidebar/hourly-white.png", name: "Hourly Rental" },
    ]

    return (
        <>
            <div className={`w-100 py-3 px-4 pb-5 mx-auto  ${menuOverLap ? "min-h-[250px] max-h-[250px] " : "min-h-[150px] max-h-[150px]"} col bs-blue rounded-t-none rounded-b-3xl relative flex flex-col items-center justify-between shadow-md rounded-r- `}>

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
                        <div onClick={() => setactiveTab("Airport")} className={` ${activeTab === "Airport" ? "bs-org tx-white slide-right font-bold" : "  bs-white tx-black font-semibold"}  flex items-center pointer px-4 py-2 rounded-md gap-2 `}>
                            <p className='text-[16px] font-Outfit'>Airport</p>
                        </div>
                        <div onClick={() => setactiveTab("Local")} className={` ${activeTab === "Local" ? " bs-org tx-white slide-left font-bold" : " bs-white tx-black font-semibold"}  flex items-center pointer px-4 py-2 rounded-md gap-2 `}>
                            <p className='text-[16px] font-Outfit'>Local</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-[35px]">
                <div className={`h-fit w-[100%] flex justify-center  `}>
                    <div className="flex border-2 rounded-lg bs-blu overflow-hidden">
                        <div onClick={() => activeWhichLocationTab("from-airport")} className={` ${activeTab === "from-airport" ? " bs-blue tx-white slide-left font-bold" : " bs-white tx-black font-semibold"}  flex items-center pointer px-3 py-1 rounded-md gap-2 `}>
                            <p className='text-[14px] font-Outfit'>From Airport</p>
                        </div>
                        <div onClick={() => activeWhichLocationTab("to-airport")} className={` ${activeTab === "to-airport" ? "bs-blue tx-white slide-right font-bold" : "  bs-white tx-black font-semibold"}  flex items-center pointer px-3 py-1 rounded-md gap-2 `}>
                            <p className='text-[14px] font-Outfit'>To Airport</p>
                        </div>
                    </div>
                </div>

                {activeMainTab === "Airport/Local" || activeTab === "Airport" || activeWhichLocationTab &&
                    <>
                        <div className={`${activeTab === "from-airport" ? "" : "hidden"}  w-[80%] mx-auto min-h-[130px] max-h-[130px] relative flex items-center mt-3`}>
                            <div className="min-w-[3px] max-w-[3px] border-l-4 border-blue border-dotted col min-h-[50%] max-h-[50%] absolute top-50 start-[48px] translate-middle"></div>
                            <div className="flex flex-col w-100 min-h-[130px] max-h-[130px] justify-between">
                                <div className="w-100 py-2 px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue">
                                    <input type="radio" />
                                    <input className='h-fit w-[clamp(100%,100%,400px)]' placeholder='Pick-up Airport' type="text" />
                                </div>
                                <div className="w-100 py-2 px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue">
                                    <i class="fa-sharp fa-solid fa-location-dot tx-yellow"></i>
                                    <input className='h-fit w-[clamp(100%,100%,400px)]' placeholder='Your Destination' type="text" />
                                </div>
                            </div>
                        </div>
                        <div className={`${activeTab === "to-airport" ? "" : "hidden"}  w-[80%] mx-auto min-h-[130px] max-h-[130px] relative flex items-center mt-3`}>
                            <div className="min-w-[3px] max-w-[3px] border-l-4 border-blue border-dotted col min-h-[50%] max-h-[50%] absolute top-50 start-[48px] translate-middle"></div>
                            <div className="flex flex-col w-100 min-h-[130px] max-h-[130px] justify-between">
                                <div className="w-100 py-2 px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue">
                                    <i class="fa-sharp fa-solid fa-location-dot tx-yellow"></i>
                                    <input className='h-fit w-[clamp(100%,100%,400px)]' placeholder='Your Destination' type="text" />
                                </div>
                                <div className="w-100 py-2 px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue">
                                    <input type="radio" />
                                    <input className='h-fit w-[clamp(100%,100%,400px)]' placeholder='Pick-up Airport' type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="w-[80%] mx-auto flex gap-4 mt-3">
                            <div class="col border-2 border-blue h-fit relative mt-3 rounded-lg flex items-center px-3">
                                <p class="text-[12px] bs-white absolute top-[-10px] start-[10px] z-10 px-1 tx-grey">Pickup Date </p>
                                <div className="">
                                    <i class="fa-regular fa-calendar-days tx-blue"></i>
                                </div>
                                <DatePicker
                                    label={""}
                                    className="max-w-[284px]"
                                    description={""}
                                />
                            </div>
                            <div className="col border-2 border-blue h-fit relative mt-3 rounded-lg gap-3 flex items-center px-3 py-2">
                                <p class="text-[12px] bs-white absolute top-[-10px] start-[10px] z-10 px-1 tx-grey">Pickup Time </p>
                                <div className="">
                                    <img className=' min-w-[20px] max-w-[20px] object-cover' src="../../IMG/clock.png" alt="" />
                                </div>
                                <div className="col">
                                    <input className='col' type="time" />
                                </div>
                            </div>
                        </div>
                    </>
                }










                {activeMainTab === "Local" &&
                    <>
                        local
                    </>
                }
                <div className="w-100 px-4 mt-4">
                    <div className="w-100 bs-blue text-center py-2 rounded-2">
                        <p className='text-[15px] font-semibold tx-white'>Let's YBGO!</p>
                    </div>
                </div>



                <BottomBar />

            </div>
        </>
    )
}



















{/* <div className={`${addStop ? "" : "d-none"}  w-100 px-4 mt-3`}>
                            <div className="col py-2 px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue">
                                <i class="fa-sharp fa-solid fa-location-dot tx-blue"></i>
                                <input className='h-fit w-[clamp(100%,100%,400px)]' placeholder='Pick-up Location' type="text" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div onClick={() => setAddStop(false)} className={`${addStop ? "" : "hidden"}  flex col gap-1 items-center px-5`}>
                                <i class="fa-solid fa-plus tx-red text-[13px] "></i>
                                <p className='tx-red text-[13px] font-semibold'>Remove stop</p>
                            </div>
                            <div onClick={() => setAddStop(true)} className="flex col justify-end items-center gap-1 px-5">
                                <i class="fa-solid fa-plus tx-blue text-[13px] "></i>
                                <p className='tx-blue text-[13px] font-semibold'>Add stop</p>
                            </div>
                        </div> */}
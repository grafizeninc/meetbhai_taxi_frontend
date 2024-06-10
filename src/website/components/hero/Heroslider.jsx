import { Autocomplete, AutocompleteItem, DatePicker } from '@nextui-org/react'
import React, { useState } from 'react'

export default function Heroslider() {

    const [activeTrip, setActiveTrip] = useState("OutStation")
    const [activeRoundTrip, setActiveRoundTrip] = useState("oneway")
    const [activeAirportLocal, setActiveAirportLocal] = useState("airport")

    const dummyCitySelector = [
        { label: "Rajkot", value: "1", },
        { label: "Surat", value: "2", },
        { label: "Chennai", value: "3", },
    ];

    const dummyPackageSelector = [
        { label: "₹7/Km", value: "1", },
        { label: "₹9/Km", value: "2", },
        { label: "₹11/Km", value: "3", },
    ];

    return (
        <>
            <div className="h-[100vh] flex items-center relative">
                <div className="h-100 w-100 absolute top-0 left-0 opacity-90 border-b-2 border-org">
                    <img className='w-100 h-100 object-fill' src="../../../../public/IMG/Slider-back-1.png" alt="" />
                </div>
                <div className="w-[75%] mx-auto flex items-center justify-between">
                    <div className="flex flex-col gap-4 bs-white relative z-[90] w-100 h-fit rounded-xl py-[45px] px-4 shadow-2">
                        <div className="w-fit flex gap-3 absolute top-0 start-50 translate-middle select-none">
                            <div onClick={() => setActiveTrip("OutStation")} className={`${activeTrip === "OutStation" ? "bs-org tx-white" : "bs-white tx-"}  rounded-md px-3 whitespace-nowrap py-1 pointer drop-shadow-md`}>
                                <p className=' text-[14px] font-semibold font-Outfit '>OutStation</p>
                            </div>
                            <div onClick={() => setActiveTrip("Hourly")} className={`${activeTrip === "Hourly" ? "bs-org tx-white" : "bs-white tx-"}  rounded-md px-3 whitespace-nowrap py-1 pointer drop-shadow-md`}>
                                <p className=' text-[14px] font-semibold font-Outfit '>Hourly rental</p>
                            </div>
                            <div onClick={() => setActiveTrip("Airport")} className={`${activeTrip === "Airport" ? "bs-org tx-white" : "bs-white tx-"}  rounded-md px-3 whitespace-nowrap py-1 pointer drop-shadow-md`}>
                                <p className=' text-[14px] font-semibold font-Outfit '>Airport</p>
                            </div>
                        </div>
                        {activeTrip === "OutStation" &&
                            <>
                                <div className="w-100 flex gap-5 justify-center select-none">
                                    <div className="flex gap-2 items-center" onClick={() => setActiveRoundTrip("oneway")}>
                                        <input className='accent-[#2565df] !border-0 scale-125 !outline-1' type="radio" id="OneWay" checked={activeRoundTrip === "oneway" ? true : false} name="fav_language" value="OneWay" />
                                        <label className='text-[15px] opacity-75 font-bold font-Outfit' for="OneWay">One Way Trip</label>
                                    </div>
                                    <div className="flex gap-2 items-center" onClick={() => setActiveRoundTrip("round")}>
                                        <input className='accent-[#2565df] !border-0 scale-125 !outline-1' type="radio" id="Round" checked={activeRoundTrip === "round" ? true : false} name="fav_language" value="Round" />
                                        <label className='text-[15px] opacity-75 font-bold font-Outfit' for="Round">Round Trip</label>
                                    </div>
                                </div>
                                <div className="flex w-100 border-1 rounded-lg px-2">
                                    <div className="w-50 flex">
                                        <div className="w-50 px-2 py-2 col flex flex-col justify-center overflow-hidden">
                                            <p className='text-[16px] font-Outfit font-medium opacity-70 mt-2'>From</p>
                                            <input className='text-[28px] py-3 font-semibold font-Outfit placeholder:text-black' placeholder='From City' type="text" />
                                        </div>
                                        <div className="w-[clamp(1px,1px,1px)] bg-[#e5e7eb] rounded-full"></div>
                                        <div className="w-50 px-2 py-2 col flex flex-col justify-center overflow-hidden">
                                            <p className='text-[16px] font-Outfit font-medium opacity-70 mt-2'>To</p>
                                            <input className='text-[28px] py-3 font-semibold font-Outfit placeholder:text-black' placeholder='To City' type="text" />
                                        </div>
                                    </div>
                                    <div className="w-[clamp(1px,1px,1px)] bg-[#e5e7eb] rounded-full"></div>
                                    {activeRoundTrip === "oneway" &&
                                        <div className="w-50 flex">
                                            <div class="col w-50 relative rounded-lg flex flex-col justify-center px-3">
                                                <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Date </p>
                                                <DatePicker
                                                    label={""}
                                                    description={""}
                                                    className="max-w-[284px] hero-custome-date"
                                                />
                                            </div>
                                            <div className="w-[clamp(1px,1px,1px)] bg-[#e5e7eb] rounded-full"></div>
                                            <div className="col w-50 relative rounded-lg flex flex-col gap-2 justify-center px-3">
                                                <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Time </p>
                                                <div className="h-fit">
                                                    <input className='w-[clamp(100%,100%,100%)] h-[clamp(35px,35px,35px)] px-2 py-0 ' type="time" />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {activeRoundTrip === "round" &&
                                        <>
                                            <div className="w-50 flex">
                                                <div class="col relative rounded-lg flex flex-col gap-2 justify-center px-3">
                                                    <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Date </p>
                                                    <DatePicker
                                                        label={""}
                                                        className="max-w-[284px] hero-custome-date"
                                                        description={""}
                                                    />
                                                </div>
                                                <div className="w-[clamp(2px,2px,2px)] bg-[#e5e7eb] rounded-full"></div>
                                                <div class="col relative rounded-lg flex flex-col gap-2 justify-center px-3">
                                                    <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Drop Date </p>
                                                    <DatePicker
                                                        label={""}
                                                        className="max-w-[284px] hero-custome-date"
                                                        description={""}
                                                    />
                                                </div>
                                                <div className="w-[clamp(2px,2px,2px)] bg-[#e5e7eb] rounded-full"></div>
                                                <div className="col w-50 relative rounded-lg flex flex-col gap-2 justify-center px-3">
                                                    <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Time </p>
                                                    <div className="h-fit">
                                                        <input className='w-[clamp(100%,100%,100%)] h-[clamp(35px,35px,35px)] px-2 py-0 ' type="time" />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                    <div className="bs-blue rounded-md px-5 py-1 absolute top-100 start-50 translate-middle pointer">
                                        <p className='text-[18px] font-medium font-Outfit tx-white'>LET’S YBGO!</p>
                                    </div>
                                </div>
                            </>
                        }
                        {activeTrip === "Hourly" &&
                            <>
                                <div className="w-100 flex flex-col gap-[25px]">
                                    <div className="col flex gap-2 border-b-2 border-org rounded-md bs-white relative">
                                        <Autocomplete
                                            label=""
                                            defaultItems={dummyCitySelector}
                                            placeholder="From which city?"
                                            className="col w-100 !font-bold py-1 !text-[14px] autocompleate-custome"
                                        >
                                            {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                                        </Autocomplete>
                                    </div>
                                    <div className="col flex gap-2 border-b-2 border-org rounded-md bs-white relative">
                                        <Autocomplete
                                            label=""
                                            defaultItems={dummyPackageSelector}
                                            placeholder="Select your package?"
                                            className="col w-100 !font-bold py-1 !text-[14px] autocompleate-custome"
                                        >
                                            {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                                        </Autocomplete>
                                    </div>
                                </div>
                                <div className="flex border-b-2 py-3">
                                    <div class="col w-50 relative rounded-lg flex flex-col justify-center px-3">
                                        <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Date </p>
                                        <DatePicker
                                            label={""}
                                            className="max-w-[284px] hero-custome-date"
                                            description={""}
                                        />
                                    </div>
                                    <div className="w-[clamp(2px,2px,2px)] bg-[#e5e7eb] rounded-full"></div>
                                    <div className="col w-50 relative rounded-lg flex gap-1 flex-col justify-center px-3 py-1">
                                        <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Time </p>
                                        <div className="col">
                                            <input className='w-[clamp(100%,100%,100%)] px-2 py-0' type="time" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bs-blue rounded-md px-5 py-1 absolute top-100 start-50 translate-middle pointer">
                                    <p className='text-[18px] font-medium font-Outfit tx-white'>LET’S YBGO!</p>
                                </div>
                            </>
                        }
                        {activeTrip === "Airport" &&
                            <>
                                <div className="w-100 flex gap-5 justify-center select-none">
                                    <div className="flex gap-2 items-center pointer" onClick={() => setActiveAirportLocal("local")}>
                                        <input className='accent-[#2565df] !border-0 scale-125 !outline-1' type="radio" id="local" checked={activeAirportLocal === "local" ? true : false} name="airportLocal" value="local" />
                                        <label className='text-[15px] opacity-75 font-bold font-Outfit' for="local">Local</label>
                                    </div>
                                    <div className="flex gap-2 items-center pointer" onClick={() => setActiveAirportLocal("airport")}>
                                        <input className='accent-[#2565df] !border-0 scale-125 !outline-1' type="radio" id="airport" checked={activeAirportLocal === "airport" ? true : false} name="airportLocal" value="airport" />
                                        <label className='text-[15px] opacity-75 font-bold font-Outfit' for="airport">Airport</label>
                                    </div>
                                </div>
                                {activeAirportLocal === "local" &&
                                    <div className="w-100 flex flex-col gap-4">
                                        <div className="border-b-2 px-2">
                                            <input className='text-[15px] py-2 font-medium font-Outfit' placeholder='Enter airport' type="text" />
                                        </div>
                                        <div className="border-b-2 px-2">
                                            <input className='text-[15px] py-2 font-medium font-Outfit' placeholder='Enter destination' type="text" />
                                        </div>
                                    </div>
                                }
                                {activeAirportLocal === "airport" &&
                                    <div className="w-100 flex flex-col gap-4">
                                        <div className="border-b-2 px-2">
                                            <input className='text-[15px] py-2 font-medium font-Outfit' placeholder='Enter destination' type="text" />
                                        </div>
                                        <div className="border-b-2 px-2">
                                            <input className='text-[15px] py-2 font-medium font-Outfit' placeholder='Enter airport' type="text" />
                                        </div>
                                    </div>
                                }
                                <div className="flex border-b-2 pb-2.5">
                                    <div class="col w-50 relative rounded-lg flex flex-col justify-center px-3">
                                        <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Date </p>
                                        <DatePicker
                                            label={""}
                                            className="max-w-[284px] hero-custome-date"
                                            description={""}
                                        />
                                    </div>
                                    <div className="w-[clamp(2px,2px,2px)] bg-[#e5e7eb] rounded-full"></div>
                                    <div className="col w-50 relative rounded-lg flex gap-1 flex-col justify-center px-3 py-1">
                                        <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Time </p>
                                        <div className="col">
                                            <input className='w-[clamp(100%,100%,100%)] px-2 py-0 ' type="time" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bs-blue rounded-md px-5 py-1 absolute top-100 start-50 translate-middle pointer">
                                    <p className='text-[18px] font-medium font-Outfit tx-white'>LET’S YBGO!</p>
                                </div>
                            </>
                        }
                    </div >
                    {/* <div className="relative z-[90] w-fit">
                        <div className="w-fit">
                            <img className='w-[clamp(800px,800px,800px)] object-contain' src="../../../../public/IMG/hero-car.png" alt="" />
                        </div>
                    </div> */}
                </div >
            </div >
        </>
    )
}

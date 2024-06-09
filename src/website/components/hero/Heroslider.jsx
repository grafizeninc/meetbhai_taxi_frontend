import { DatePicker } from '@nextui-org/react'
import React from 'react'

export default function Heroslider() {
    return (
        <>
            <div className="h-[100vh] flex items-center relative">
                <div className="h-100 w-100 absolute top-0 left-0 opacity-90 border-b-2 border-org">
                    <img className='w-100 h-100 object-fill' src="../../../../public/IMG/Slider-back-1.png" alt="" />
                </div>
                <div className="w-[75%] mx-auto flex items-center justify-between">
                    <div className="flex flex-col h-fit gap-4 bs-white relative z-[90] w-[clamp(500px,500px,500px)] rounded-xl py-[45px] px-4 shadow-2">
                        <div className="w-fit flex gap-3 absolute top-0 start-50 translate-middle">
                            <div className="bs-org rounded-md px-4 py-1 drop-shadow-md">
                                <p className='tx-white text-[14px] font-semibold font-Outfit '>OutStation</p>
                            </div>
                            <div className="bs-org rounded-md px-4 py-1 drop-shadow-md">
                                <p className='tx-white text-[14px] font-semibold font-Outfit '>Local</p>
                            </div>
                            <div className="bs-org rounded-md px-4 py-1 drop-shadow-md">
                                <p className='tx-white text-[14px] font-semibold font-Outfit '>Airport</p>
                            </div>
                        </div>
                        <div className="w-100 flex gap-5 justify-center"> 
                            <div className="flex gap-2 items-center">
                                <input className='accent-[#2565df] !border-0 scale-125 !outline-1' type="radio" id="OneWay" name="fav_language" value="OneWay" />
                                <label className='text-[15px] opacity-75 font-bold font-Outfit' for="OneWay">One Way Trip</label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <input className='accent-[#2565df] !border-0 scale-125 !outline-1' type="radio" id="Round" name="fav_language" value="Round" />
                                <label className='text-[15px] opacity-75 font-bold font-Outfit' for="Round">Round Trip</label>
                            </div>
                        </div>
                        <div className="w-100 flex flex-col gap-4">
                            <div className="border-b-2 px-2">
                                <input className='text-[15px] py-2 font-medium font-Outfit' placeholder='Enter Pick-up location' type="text" />
                            </div>
                            <div className="border-b-2 px-2">
                                <input className='text-[15px] py-2 font-medium font-Outfit' placeholder='Enter Drop location' type="text" />
                            </div>
                        </div>
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
                    </div>
                    <div className=" relative z-[90] w-fit">
                        <div className="w-fit">
                            <img className='w-[clamp(800px,800px,800px)] object-contain' src="../../../../public/IMG/hero-car.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

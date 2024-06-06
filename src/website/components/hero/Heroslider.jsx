import { DatePicker } from '@nextui-org/react'
import React from 'react'

export default function Heroslider() {
    return (
        <>
            <div className="h-[100vh] flex items-center relative ">
                <div className="h-100 w-100 absolute top-0 left-0">
                    <img className='w-100 h-100 object-fill opacity-90' src="../../../../public/IMG/Slider-back-1.png" alt="" />
                </div>
                <div className="w-[75%] mx-auto">
                    <div className="flex flex-col gap-3 bs-white relative z-[90] w-[clamp(500px,500px,500px)] rounded-xl py-[35px] px-4 shadow-2">
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
                                <input type="radio" />
                                <p className='text-[13px] font-bold font-Outfit'>One Way Trip</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <input type="radio" />
                                <p className='text-[13px] font-bold font-Outfit'>Round Trip</p>
                            </div>
                        </div>
                        <div className="w-100 flex flex-col gap-3">
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
                        <div className="bs-blue rounded-md px-5 py-1 absolute top-100 start-50 translate-middle">
                            <p className='text-[18px] font-medium font-Outfit tx-white'>LET’S YBGO!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

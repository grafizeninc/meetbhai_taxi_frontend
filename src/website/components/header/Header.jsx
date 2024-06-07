import React from 'react'

export default function Header() {
    return (
        <>
            <div className="w-100">
                <div className="w-[80%] flex gap- mx-auto rounded-xl items-center overflow-hidden fixed z-[999999] top-[20px] left-0 right-0">
                    <div className="w-100 flex relative">
                        <div className="w-[clamp(300px,300px,300px)] h-[clamp(600px,600px,600px)] bs-org absolute z-20 end-0 bottom-0 rotate-[40deg] origin-bottom-left">
                            <div className="relative">
                                <div className="absolute top-0 left-0 border-l-[2.5px] border-org w-[15px] h-[clamp(600px,600px,600px)] bs-white col"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bs-white border-y-2 border-s-2 rounded-l-xl px-4 !pe-[300px] border-org col drop-shadow-lg">
                            <div className="px-5">
                                <p className='text-[30px] font-Outfit font-extrabold tracking-widest tx-whit'>TAXI</p>
                            </div>
                            <div className="flex gap-4 items-center justify-center pe-5">
                                <div className="">
                                    <p className='text-[15px] font-Outfit font-bold opacity-80'>Home</p>
                                </div>
                                <div className="">
                                    <p className='text-[15px] font-Outfit font-bold opacity-80'>Blog</p>
                                </div>
                                <div className="">
                                    <p className='text-[15px] font-Outfit font-bold opacity-80'>Driver</p>
                                </div>
                                <div className="">
                                    <p className='text-[15px] font-Outfit font-bold opacity-80'>Contact</p>
                                </div>
                            </div>
                        </div>
                        <div className=" absolute top-0 end-0 z-50 bs-org border-2 !border-y-3 rounded-r-xl rounded-tl-2xl !ps-[60px] pointer px-5 py-2.5  border-org">
                            {/* <div className="absolute top-[-30px] start-[10.5px] border-x-2 border-org origin-top-left bs-white z-10 rotate-[24deg] w-[clamp(18px,18px,18px)] h-[clamp(85px,85px,85px)]"></div> */}
                            <p className='text-[15px] font-Outfit font-bold opacity-95 tx-white'>BOOK YOUR TAXI</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

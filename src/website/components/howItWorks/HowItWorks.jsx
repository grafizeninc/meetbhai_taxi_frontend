import React from 'react'

export default function HowItWorks() {

    const dummydata = [
        { id: "1", title: "Search Cab", content: "Local, Outstation, Transfer or Oneway Drop simply select your trip type.", ico: "" },
        { id: "2", title: "Select Car", content: "Choose form wide range of fleets that will suit your travel needs.", ico: "" },
        { id: "3", title: "Pay & Book", content: "Confirm your booking by securely Pay with flexible payment options.", ico: "" },
    ]

    return (
        <>
            <div className="w-100 h-[70vh] flex flex-col items-center justify-center">
                <div className="my-5">
                    <p className="text-[30px] font-Outfit font-bold">How It Works</p>
                </div>
                <div className="flex w-[70%] flex-col items-center justify-center">
                    <div className="w-100 flex gap-5 justify-between">
                        <div className="relative active-cad pointer">
                            <div className="w-100 flex px-2 justify-end text-end active-level">
                                <p className='text-[50px] tx-org font-Outfit font-bold'>01</p>
                            </div>
                            <div className="flex flex-col items-center justify-center w-[clamp(300px,300px,300px)] border-b-2 border-org rounded-3xl px-5 pb-1 bs-white relative z-40">
                                <div className="w-[clamp(60px,60px,60px)] flex items-center justify-center">
                                    <img className='w-[clamp(50px,50px,50px)]' src="../../../../public/IMG/how it work/search.png" alt="" />
                                </div>
                                <div className="text-center">
                                    <p className='text-[20px] font-bold font-Outfit '>Search Cab</p>
                                    <p className='text-[15px] font-semibold opacity-75 font-Outfit '>Local, Outstation, Transfer or Oneway Drop simply select your trip type.</p>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-[200px]  w-[clamp(150px,150px,150px)] h-[clamp(80px,80px,80px)] overflow-hidden rotate-[70deg] origin-bottom-left  scale-[3]">
                                <svg class='anime-dotted-ln-svg' width="399" height="110" viewBox="0 0 399 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.499634 1.00049C8.5 20.0005 54.2733 13.6435 60.5 40.0005C65.6128 61.6426 26.4546 130.331 15 90.0005C-9 5.5 176.5 127.5 218.5 106.5C301.051 65.2247 202 -57.9188 344.5 40.0003C364 53.3997 384 22 399 22" stroke="orange" stroke-opacity="1" stroke-dasharray="3 3" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative active-cad pointer">
                            <div className="w-100 flex px-2 justify-end text-end active-level">
                                <p className='text-[50px] tx-org font-Outfit font-bold'>02</p>
                            </div>
                            <div className="flex flex-col items-center justify-center w-[clamp(300px,300px,300px)] border-b-2 border-org rounded-3xl px-5 pb-1 bs-white relative z-40">
                                <div className="w-[clamp(60px,60px,60px)] flex items-center justify-center">
                                    <img className='w-[clamp(50px,50px,50px)]' src="../../../../public/IMG/how it work/select.png" alt="" />
                                </div>
                                <div className="text-center">
                                    <p className='text-[20px] font-bold font-Outfit '>Select Car</p>
                                    <p className='text-[15px] font-semibold opacity-75 font-Outfit '>Choose form wide range of fleets that will suit your travel needs.</p>
                                </div>
                            </div>
                            <div className="absolute bottom-[100px] left-[200px]  w-[clamp(150px,150px,150px)] h-[clamp(80px,80px,80px)] overflow-hidden rotate-[110deg] origin-bottom-left  scale-[3]">
                                <svg class='anime-dotted-ln-svg' width="399" height="110" viewBox="0 0 399 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.499634 1.00049C8.5 20.0005 54.2733 13.6435 60.5 40.0005C65.6128 61.6426 26.4546 130.331 15 90.0005C-9 5.5 176.5 127.5 218.5 106.5C301.051 65.2247 202 -57.9188 344.5 40.0003C364 53.3997 384 22 399 22" stroke="orange" stroke-opacity="1" stroke-dasharray="3 3" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative active-cad pointer">
                            <div className="w-100 flex px-2 justify-end text-end active-level">
                                <p className='text-[50px] tx-org font-Outfit font-bold'>03</p>
                            </div>
                            <div className="flex flex-col items-center justify-center w-[clamp(300px,300px,300px)] border-b-2 border-org rounded-3xl px-5 pb-1 bs-white relative z-40">
                                <div className="w-[clamp(60px,60px,60px)] flex items-center justify-center">
                                    <img className='w-[clamp(50px,50px,50px)]' src="../../../../public/IMG/how it work/credit-card.png" alt="" />
                                </div>
                                <div className="text-center">
                                    <p className='text-[20px] font-bold font-Outfit '>Book & Pay</p>
                                    <p className='text-[15px] font-semibold opacity-75 font-Outfit '>Confirm your booking by securely Pay with flexible payment options.</p>
                                </div>
                            </div>
                            <div className="absolute bottom-[30px] right-[100px]  w-[clamp(120px,120px,120px)] h-[clamp(80px,80px,80px)] overflow-hidden rotate-[140deg] origin-bottom-left scale-[3]">
                                <svg class='anime-dotted-ln-svg ' width="399" height="110" viewBox="0 0 399 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.499634 1.00049C8.5 20.0005 54.2733 13.6435 60.5 40.0005C65.6128 61.6426 26.4546 130.331 15 90.0005C-9 5.5 176.5 127.5 218.5 106.5C301.051 65.2247 202 -57.9188 344.5 40.0003C364 53.3997 384 22 399 22" stroke="orange" stroke-opacity="1" stroke-dasharray="3 3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative mt-5 z-50">
                            <img className='w-[clamp(600px,600px,600px)]' src="../../../../public/IMG/how it work/Cab vector.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

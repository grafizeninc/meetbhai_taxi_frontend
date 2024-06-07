import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="w-100 relative mt-[700px] p-4">
                <div className="w-100">
                    <div className="w-100 flex items-end justify-between mx-auto box-border bs-white relative overflow-hidden drop-shadow-lg rounded-3xl">
                        <div className="w-[clamp(650px,650px,650px)] h-[clamp(600px,600px,600px)]  bs-org absolute end-0 bottom-0 rotate-[40deg] origin-bottom-left">
                            <div className="relative">
                                <div className="absolute top-0 left-0 border-l-[2px] border-org w-[20px] h-[clamp(600px,600px,600px)] bs-white col"></div>
                            </div>
                        </div>
                        <div className="col border-2 border-org px-5 py-4 rounded-3xl bs-white">
                            <div className="">
                                <p className='text-[40px] font-Outfit font-extrabold tracking-widest tx-whit'>TAXI</p>
                            </div>
                            <div className="px-1 mt-4">
                                <p className='tx- text-[16px] font-Outfit font-medium'>+92 92679 93738</p>
                                <p className='tx- text-[16px] font-Outfit font-medium'>taxi@gmail.com</p>
                                <p className='tx- text-[16px] font-Outfit font-medium'>Suite 975 342 Schaden Grove, West Myriam, WA 84678</p>
                            </div>
                        </div>
                        <div className="w-fit flex gap-3 absolute bottom-0 end-0 z-20 pe-5 py-4 rounded-3xl">
                            <p className='tx-white text-[15px] font-Poppins font-medium'>Privacy Policy</p>
                            <p className='tx-white text-[15px] font-Poppins font-medium'>Terms of service</p>
                            <p className='tx-white text-[15px] font-Poppins font-medium'>GDPR policy</p>
                            <p className='tx-white text-[15px] font-Poppins font-medium'>Refund policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

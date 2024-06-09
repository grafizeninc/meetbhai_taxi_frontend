import React from 'react'

export default function Information() {
    const dummydata = [
        { id: "1", name: "HATCHBACK", kmPrice: "₹9/Km", ac: "AC", seat: "4+1", price: "₹599", ico: "../../../../public/IMG/info/hatchback.png" },
        { id: "2", name: "SEDAN", kmPrice: "₹11/Km", ac: "AC", seat: "5+1", price: "₹659", ico: "../../../../public/IMG/info/sedan.png" },
        { id: "3", name: "SUV", kmPrice: "₹14/Km", ac: "AC", seat: "6+1", price: "₹710", ico: "../../../../public/IMG/info/suv-car.png" },
        { id: "4", name: "MPV'S", kmPrice: "₹22/Km", ac: "AC", seat: "12+2", price: "₹1300", ico: "../../../../public/IMG/info/van-taxi.png" },
    ]
    return (
        <>
            <div className="w-[75%] mx-auto h-[70vh] flex flex-col items-center justify-center">
                <div className="">
                    <p className="text-[30px] font-Outfit font-bold">Our Popular Fleets</p>
                </div>
                <div className="w-100 flex gap-4 justify-center py-5">
                    {dummydata.map((item) => (
                        <div className="bs-white border-1 border-org relative p-3 rounded-xl col">
                            <div className=" drop-shadow-md">
                                <img className='mx-auto w-[clamp(120px,120px,120px)]' src={item.ico} alt="" />
                                <div className="text-center">
                                    <div className="flex items-center justify-between">
                                        <p className='tx- font-bold text-[20px] font-Outfit'>{item.name}</p>
                                        <div className="w-100 flex justify-end gap-2">
                                            <i class="fa-solid fa-star tx-yellow"></i>
                                            <i class="fa-solid fa-star tx-yellow"></i>
                                            <i class="fa-solid fa-star tx-yellow"></i>
                                        </div>
                                    </div>
                                    <div className="flex items-end mt-4">
                                        <div className="col flex flex-col">
                                            <div className="flex items-center gap-2 text-">
                                                <i class="fa-solid fa-badge-check text-[15px]"></i>
                                                <p className='text-[15px] font-Outfit font-semibold'>{item.ac}</p>
                                            </div>
                                            <div className="flex items-center gap-2 text-">
                                                <i class="fa-solid fa-badge-check text-[15px]"></i>
                                                <p className='text-[15px] font-Outfit font-semibold'>{item.kmPrice}</p>
                                            </div>
                                            <div className="flex items-center gap-2 text-">
                                                <i class="fa-solid fa-badge-check text-[15px]"></i>
                                                <p className='text-[15px] font-Outfit font-semibold'>{item.seat} Seat</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className='text-[26px] font-Outfit font-bold tx-org'>{item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

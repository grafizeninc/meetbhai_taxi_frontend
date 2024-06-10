import React from 'react'

export default function AboutUs() {
    return (
        <>
            <div className="w-[75%] mx-auto flex items- gap-4 py-5">
                <div className="w-50 flex justify-center ">
                    <div className="w-[clamp(300px,300px,300px)] rounded-2xl overflow-hidden">
                        <img className='w-100 h-100 object-cover' src="../../../../public/IMG/about/SL-041222-49680-07.jpg" alt="" />
                    </div>
                </div>
                <div className="w-[clamp(3px,3px,3px)] bs-org min-h-[100%] rounded-xl"></div>
                <div className="w-50 py-3">
                    <div className="px-2">
                        <div className="">
                            <p className='text-[35px] text-start font-Outfit font-bold tx-org'>About Us</p>
                        </div>
                        <p className='text-[15px] font-Outfit font-semibold opacity-75 mt-2'>Welcome to YBGO Cab Rental One of the oldest car hire companies with the youngest fleet of cars in West India.
                            YBGO allows you to hire a rental car of your choice at an affordable rate. Book yourself a car with a chauffeur
                            conveniently through online booking or on your smartphone. To make your travel memorable, rewarding & hassle-free,
                            we offer high-quality service and a host of benefits to heighten your experience. </p>
                        <p className='text-[15px] font-Outfit font-semibold opacity-75 mt-2'>We offer the best car rental service for the tourists who wish to make their holidays comfortable and
                            unforgettable. We always make the effort to bring much more satisfaction, our clients pla</p>
                    </div>
                </div>
            </div>
        </>
    )
}

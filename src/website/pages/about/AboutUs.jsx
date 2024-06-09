import React from 'react'
import Header from '../../components/header/Header'

export default function AboutUs() {
    return (
        <>
            <div className="mt-[100px] h-[100vh] w-100">
                <Header />
                <div className="w-[75%] mx-auto">
                    <div className="">
                        <p className='text-[14px] '>Welcome To YBGO</p>
                        <p>Welcome to YBGO Cab Rental One of the oldest car hire companies with the youngest fleet of cars in West India. YBGO allows you to hire a rental car of your choice at an affordable rate. Book yourself a car with a chauffeur conveniently through online booking or on your smartphone. To make your travel memorable, rewarding & hassle-free, we offer high-quality service and a host of benefits to heighten your experience. </p>
                        <p>We offer the best car rental service for the tourists who wish to make their holidays comfortable and unforgettable. We always make the effort to bring much more satisfaction, our clients plan out. You will get well maintained (brand new) cars and polite and responsible drivers with excellent communication skills to make your experience pleasant and smooth.</p>
                        <p>YBGO Car rental provides you with the best road trip experience. We offer hourly, daily, weekly, and monthly plans to fulfil your business travel needs, weekends getaway needs, and leisure travel needs.</p>
                        <p>YBGO Taxi and Car Rental Service Available in Major Cities of India</p>
                        <p>Ahmedabad| Rajkot| Mumbai| Vadodara| Surat| Dwarka | 
                            Somnath| Jamnagar| Bhavnagar| Morbi| Aurangabad| Daman | 
                            Diu| vapi| Shirdi| coa| Nashik| Pune</p>
                        <p>Hire Taxi and Car Rental Service at an affordable price, through various cities of India.</p>
                    </div>
                </div>
                <div className="absolute bottom-0 end-0">
                    <img className='w-[clamp(400px,400px,400px)]' src="../../../../public/IMG/about/Black&White_vector.png" alt="" />
                </div>
            </div>
        </>
    )
}

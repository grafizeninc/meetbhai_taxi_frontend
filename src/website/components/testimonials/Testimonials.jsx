import React from 'react'
import Slider from 'react-slick'

export default function Testimonials() {

    const carslider = ({
        arrows: false,
        infinite: true,
        // autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        touchThreshold: 100,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    });

    const dummydata = [ 
        {id:1,name:"Vinay Shukla, Morbi",con:"YBGO has been the most reliable cab services I've opted for so far. Kudos to the team for providing safe taxi services in today's given conditions."},
        {id:1,name:"Vinay Shukla, Morbi",con:"YBGO has been the most reliable cab services I've opted for so far. Kudos to the team for providing safe taxi services in today's given conditions."},
        {id:1,name:"Vinay Shukla, Morbi",con:"YBGO has been the most reliable cab services I've opted for so far. Kudos to the team for providing safe taxi services in today's given conditions."},
        {id:1,name:"Vinay Shukla, Morbi",con:"YBGO has been the most reliable cab services I've opted for so far. Kudos to the team for providing safe taxi services in today's given conditions."},
        {id:1,name:"Vinay Shukla, Morbi",con:"YBGO has been the most reliable cab services I've opted for so far. Kudos to the team for providing safe taxi services in today's given conditions."},
    ]


    return (
        <>
            <div className="w-100">
                <div className="w-[75%] mx-auto mt-5">
                    <div className="">
                        <p className='text-[35px] text-start font-Outfit font-bold tx-org'>Why People Love</p>
                    </div>
                    <div className="">
                        <Slider {...carslider} className='w-100 p-3'>
                            {dummydata.map((item) => (
                                <div className="col mt-4 drop-shadow-lg py-4">
                                    <div className="w-[95%] mx-auto border-b-2 border-l-2 border-org shadow-md rounded-xl p-3">
                                        <p className='text-[15px] font-semibold font-Outfit opacity-70'>{item.con}</p> 
                                        <p className='text-[15px] tx-org font-semibold font-Outfit mt-5'>{item.name}</p> 
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

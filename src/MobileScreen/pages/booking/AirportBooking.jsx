import React from 'react';
import { DatePicker } from '@nextui-org/react';
import Slider from 'react-slick';



export default function AirportBooking({
    activeTab,
    activeMainTab,
    airportCarSelectorActive,
    airportSearchBarActive,
    setAirportSearchBarActive,
    localSearchBarActive,
    localCarSelectorActive,
    activeWhichLocationTab,
    setactiveWhichLocationTab,
    setLocalSearchBarActive,
    handleFareSummryModal
}) {
    const carslider = ({
        arrows: false,
        infinite: true,
        // autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        touchThreshold: 100,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 1,
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
    return (
        <>
            <div className={`${airportSearchBarActive || localSearchBarActive ? "hidden" : ""}  mt-[25px] h-[calc(100dvh-460px)] flex flex-col justify-between overflow-y-scroll`}>
                {activeMainTab === "Airport/Local" && activeTab === "Airport" &&
                    <>
                        <div className="">
                            <div className={`h-fit w-[100%] flex justify-center `}>
                                <div className="flex border-2 rounded-lg bs-blu overflow-hidden">
                                    <div onClick={() => setactiveWhichLocationTab("from-airport")} className={` ${activeWhichLocationTab === "from-airport" ? " bs-blue tx-white slide-left font-bold" : " bs-white tx-black font-semibold"}  flex items-center pointer px-3 py-1 rounded-md gap-2 `}>
                                        <p className='text-[14px] font-Outfit'>From Airport</p>
                                    </div>
                                    <div onClick={() => setactiveWhichLocationTab("to-airport")} className={` ${activeWhichLocationTab === "to-airport" ? "bs-blue tx-white slide-right font-bold" : "  bs-white tx-black font-semibold"}  flex items-center pointer px-3 py-1 rounded-md gap-2 `}>
                                        <p className='text-[14px] font-Outfit'>To Airport</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${activeWhichLocationTab === "from-airport" ? "hidden" : ""}  w-[90%] mx-auto min-h-[122px] max-h-[122px] relative flex items-center mt-3`}>
                                <div className="min-w-[3px] max-w-[3px] border-l-4 border-blue border-dotted col min-h-[35%] max-h-[35%] absolute top-50 start-[24px] translate-middle"></div>
                                <div className="flex flex-col w-100 min-h-[122px] max-h-[122px] justify-between">
                                    <div className="w-100  px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue" onClick={() => setAirportSearchBarActive(true)}>
                                        <input type="radio" className='ms-[-2px]' />
                                        <input className='py-2 w-[clamp(100%,100%,400px)] h-[clamp(50px,50px,50px)]' placeholder='Pick-up Airport' type="text" />
                                    </div>
                                    <div className="w-100  px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue" onClick={() => setAirportSearchBarActive(true)}>
                                        <i class="fa-sharp fa-solid fa-location-dot tx-yellow"></i>
                                        <input className='py-2 w-[clamp(100%,100%,400px)] h-[clamp(50px,50px,50px)]' placeholder='Your Destination' type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className={`${activeWhichLocationTab === "to-airport" ? "hidden" : ""}  w-[90%] mx-auto min-h-[122px] max-h-[122px] relative flex items-center mt-3`}>
                                <div className="min-w-[3px] max-w-[3px] border-l-4 border-blue border-dotted col min-h-[35%] max-h-[35%] absolute top-50 start-[24px] translate-middle"></div>
                                <div className="flex flex-col w-100 min-h-[122px] max-h-[122px] justify-between">
                                    <div className="w-100  px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue" onClick={() => setAirportSearchBarActive(true)}>
                                        <input type="radio" className='ms-[-2px]' />
                                        <input className='py-2 w-[clamp(100%,100%,400px)] h-[clamp(50px,50px,50px)]' placeholder='Your Destination' type="text" />
                                    </div>
                                    <div className="w-100  px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue" onClick={() => setAirportSearchBarActive(true)}>
                                        <i class="fa-sharp fa-solid fa-location-dot tx-yellow"></i>
                                        <input className='py-2 w-[clamp(100%,100%,400px)] h-[clamp(50px,50px,50px)]' placeholder='Pick-up Airport' type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[90%] mx-auto flex gap-3 mt-4">
                                <div class="col w-50 border-2 border-blue relative rounded-lg flex items-center px-3 h-[clamp(45px,45px,45px)]">
                                    <p class="text-[12px] bs-white absolute top-[-10px] start-[10px] z-10 px-1 tx-grey">Pickup Date </p>
                                    <div className="">
                                        <i class="fa-regular fa-calendar-days tx-blue"></i>
                                    </div>
                                    <DatePicker
                                        label={""}
                                        className="max-w-[284px] !bg-[#fff] custome-date"
                                        description={""}
                                    />
                                </div>
                                <div className="col w-50 border-2 border-blue relative rounded-lg gap-3 flex items-center px-3 h-[clamp(45px,45px,45px)] py-1">
                                    <p class="text-[12px] bs-white absolute top-[-10px] start-[10px] z-10 px-1 tx-grey">Pickup Time </p>
                                    <div className="">
                                        <img className=' min-w-[20px] max-w-[20px] object-cover' src="../../IMG/clock.png" alt="" />
                                    </div>
                                    <div className="col">
                                        <input className='w-[clamp(100%,100%,100%)]' type="time" />
                                    </div>
                                </div>
                            </div>
                            {airportCarSelectorActive === true &&
                                <div className={` min-w-[100%] max-w-[320px] h-[clamp(150px,150px,150px)] mx-auto`}>
                                    <Slider {...carslider} className='w-100'>
                                        <div className="col mt-4" onClick={handleFareSummryModal}>
                                            <div className="w-[90%] mx-auto bs-blue rounded-xl">
                                                <div className="w-100 flex items-center justify-between">
                                                    <div className="bs-org w-fit h-fit rounded-br-xl rounded-tl-xl">
                                                        <div className="mt-[-30px] ms-[-10px] pe-3 py-1">
                                                            <img className='w-[clamp(180px,180px,180px)] object-cover' src="../../public/IMG/car-slider.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="px-3">
                                                        <p className='tx-white text-[23px] font-bold font-Outfit tracking-wider'> ₹9/Km</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-end px-3 py-2">
                                                    <div className="">
                                                        <p className='tx-white text-[20px] font-bold font-Outfit tracking-widest'>Preminum SUV</p>
                                                        <div className="tx-white text-[14px] font-Outfit tracking-widest ">Innova or Innova Crysta</div>
                                                    </div>
                                                    <div className="flex items-center py-2 gap-1">
                                                        <p className='tx-white text-[16px] font-bold '>6</p>
                                                        <i class="fa-solid fa-user tx-white"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mt-4" onClick={handleFareSummryModal}>
                                            <div className="w-[90%] mx-auto bs-blue rounded-xl">
                                                <div className="w-100 flex items-center justify-between">
                                                    <div className="bs-org w-fit h-fit rounded-br-xl rounded-tl-xl">
                                                        <div className="mt-[-30px] ms-[-10px] pe-3 py-1">
                                                            <img className='w-[clamp(180px,180px,180px)] object-cover' src="../../public/IMG/car-slider.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="px-3">
                                                        <p className='tx-white text-[23px] font-bold font-Outfit tracking-wider'> ₹9/Km</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-end px-3 py-2">
                                                    <div className="">
                                                        <p className='tx-white text-[20px] font-bold font-Outfit tracking-widest'>Preminum SUV</p>
                                                        <div className="tx-white text-[14px] font-Outfit tracking-widest ">Innova or Innova Crysta</div>
                                                    </div>
                                                    <div className="flex items-center py-2 gap-1">
                                                        <p className='tx-white text-[16px] font-bold '>6</p>
                                                        <i class="fa-solid fa-user tx-white"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            }
                        </div>
                        <div className={`${airportSearchBarActive || localSearchBarActive ? "hidden" : ""}  w-100 px-3 mt-2`} >
                            <div className="w-100 bs-blue text-center py-2.5 rounded-2">
                                <p className='text-[15px] font-semibold tx-white'>Let's YBGO!</p>
                            </div>
                        </div>
                    </>
                }

                {activeMainTab === "Airport/Local" && activeTab === "Local" &&
                    <>
                        <div className="  flex flex-col justify-between">
                            <div className={`w-[90%] mx-auto min-h-[120px] max-h-[120px] relative flex items-center mt-3`}>
                                {/* <div className="min-w-[3px] max-w-[3px] border-l-4 border-blue border-dotted col min-h-[35%] max-h-[35%] absolute top-50 start-[24px] translate-middle"></div> */}
                                <div className="flex flex-col w-100 min-h-[120px] max-h-[120px] justify-between">
                                    <div className="w-100  px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue" onClick={() => setLocalSearchBarActive(true)}>
                                        <input type="radio" className='me-2.5' />
                                        <input className='py-2.5 h-fit w-[clamp(100%,100%,400px)]' placeholder='Select your City' type="text" />
                                    </div>
                                    <div className="w-100  px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue" onClick={() => setLocalSearchBarActive(true)}>
                                        <img className='min-w-[20px] max-w-[20px] object-cover' src="../../../public/IMG/package-selection.png" alt="" />
                                        <input className='py-2.5 h-fit w-[clamp(100%,100%,400px)]' placeholder='Select your Package' type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[90%] mx-auto flex gap-3 mt-4">
                                <div class="col w-50 border-2 border-blue relative rounded-lg flex items-center px-3 h-[clamp(45px,45px,45px)]">
                                    <p class="text-[12px] bs-white absolute top-[-10px] start-[10px] z-10 px-1 tx-grey">Pickup Date </p>
                                    <div className="">
                                        <i class="fa-regular fa-calendar-days tx-blue"></i>
                                    </div>
                                    <DatePicker
                                        label={""}
                                        className="max-w-[284px]"
                                        description={""}
                                    />
                                </div>
                                <div className="col w-50 border-2 border-blue relative rounded-lg gap-3 flex items-center px-3 h-[clamp(45px,45px,45px)] py-1">
                                    <p class="text-[12px] bs-white absolute top-[-10px] start-[10px] z-10 px-1 tx-grey">Pickup Time </p>
                                    <div className="">
                                        <img className=' min-w-[20px] max-w-[20px] object-cover' src="../../IMG/clock.png" alt="" />
                                    </div>
                                    <div className="col">
                                        <input className='w-[clamp(100%,100%,100%)]' type="time" />
                                    </div>
                                </div>
                            </div>
                            {localCarSelectorActive === true &&
                                <div className={` min-w-[100%] max-w-[320px] h-[clamp(150px,150px,150px)] mx-auto`}>
                                    <Slider {...carslider} className='w-100'>
                                        <div className="col mt-4" onClick={handleFareSummryModal}>
                                            <div className="w-[90%] mx-auto bs-blue rounded-xl">
                                                <div className="w-100 flex items-center justify-between">
                                                    <div className="bs-org w-fit h-fit rounded-br-xl rounded-tl-xl">
                                                        <div className="mt-[-30px] ms-[-10px] pe-3 py-1">
                                                            <img className='w-[clamp(180px,180px,180px)] object-cover' src="../../public/IMG/car-slider.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="px-3">
                                                        <p className='tx-white text-[23px] font-bold font-Outfit tracking-wider'> ₹9/Km</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-end px-3 py-2">
                                                    <div className="">
                                                        <p className='tx-white text-[20px] font-bold font-Outfit tracking-widest'>Preminum SUV</p>
                                                        <div className="tx-white text-[14px] font-Outfit tracking-widest ">Innova or Innova Crysta</div>
                                                    </div>
                                                    <div className="flex items-center py-2 gap-1">
                                                        <p className='tx-white text-[16px] font-bold '>6</p>
                                                        <i class="fa-solid fa-user tx-white"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mt-4" onClick={handleFareSummryModal}>
                                            <div className="w-[90%] mx-auto bs-blue rounded-xl">
                                                <div className="w-100 flex items-center justify-between">
                                                    <div className="bs-org w-fit h-fit rounded-br-xl rounded-tl-xl">
                                                        <div className="mt-[-30px] ms-[-10px] pe-3 py-1">
                                                            <img className='w-[clamp(180px,180px,180px)] object-cover' src="../../public/IMG/car-slider.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="px-3">
                                                        <p className='tx-white text-[23px] font-bold font-Outfit tracking-wider'> ₹9/Km</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-end px-3 py-2">
                                                    <div className="">
                                                        <p className='tx-white text-[20px] font-bold font-Outfit tracking-widest'>Preminum SUV</p>
                                                        <div className="tx-white text-[14px] font-Outfit tracking-widest ">Innova or Innova Crysta</div>
                                                    </div>
                                                    <div className="flex items-center py-2 gap-1">
                                                        <p className='tx-white text-[16px] font-bold '>6</p>
                                                        <i class="fa-solid fa-user tx-white"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            }
                        </div>
                        <div className={`${airportSearchBarActive || localSearchBarActive ? "hidden" : ""}  w-100 px-3 mt-4`} >
                            <div className="w-100 bs-blue text-center py-2.5 rounded-2">
                                <p className='text-[15px] font-semibold tx-white'>Let's YBGO!</p>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

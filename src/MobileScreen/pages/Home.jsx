import { Autocomplete, AutocompleteItem, DatePicker, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import BottomBar from '../components/menu/BottomBar';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export default function Home({ activeMainTab, setActiveMainTab, menuOverLap, setmenuOverLap }) {
    const [activeTab, setactiveTab] = useState("Airport");
    const [activeWhichLocationTab, setactiveWhichLocationTab] = useState("from-airport");
    const [searchBarActive, setSearchBarActive] = useState(false);
    const [localSearchBarActive, setLocalSearchBarActive] = useState(false);
    const [carSelectorActive, setcarSelectorActive] = useState(false);
    const [addStop, setAddStop] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [locaationPermissionModal, setLocaationPermissionModal] = useState(false);

    const handleLocaationPermissionModal = () => {
        setLocaationPermissionModal(true)
    }
    const closeLocaationPermissionModal = () => {
        setLocaationPermissionModal(false)
    }

    useEffect(() => {
        if(localSearchBarActive === true ) 
                handleLocaationPermissionModal(); 
    }, [searchBarActive, localSearchBarActive])



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
    const airportSelector = [
        { label: "HSR - Rajkot Hirasar International Airport", value: "1", },
        { label: "AMD - Sardar Vallabhbhai Patel International Airport", value: "2", },
        { label: "STV - Surat International Airport", value: "3", },
        { label: "BOM - Chhatrapati Shivaji International Airport", value: "4", },
        { label: "MAA - Chennai International Airport", value: "5", },
        { label: "PNQ - Pune International Airport", value: "6", },
        { label: "BLR - Kempegowda International Airport Bengaluru", value: "7", },
        { label: "IDR - Devi Ahilyabai Holkar Airport Indore", value: "8", },
        { label: "DEL - Indira Gandhi International Airport", value: "9", },
        { label: "DED - Jolly Grant Airport Dehradun", value: "10", },
        { label: "UDR - Maharana Pratap Airport Udaipur", value: "11", },
    ];
    const citySelector = [
        { label: "Rajkot - Greenland chowkdi", value: "1", },
        { label: "Rajkot - Kalwad Rd. cosmoplex circle", value: "2", },
        { label: "Chotila - Maa Chamunda Temple", value: "3", },
        { label: "Morbi city", value: "4", },
        { label: "Indira circle, University main Rd.", value: "5", },
    ];
    const packageSelector = [
        { label: "02 Hours, 20 Kilometres", value: "1", },
        { label: "04 Hours, 40 Kilometres", value: "2", },
        { label: "08 Hours, 80 Kilometres", value: "3", },
        { label: "12 Hours, 120 Kilometres", value: "4", },
        { label: "16 Hours, 160 Kilometres", value: "5", },
    ];

    const datalist = [
        { w: "w-[80px]", click: () => setmenuOverLap(true), redirection: "/", ico: "../../../public/IMG/sidebar/airport-black.png", icoActive: "../../../public/IMG/sidebar/airport-white.png", name: "Airport/Local" },
        { w: "w-[80px]", click: () => setmenuOverLap(true), redirection: "/", ico: "../../../public/IMG/sidebar/outstation-black.png", icoActive: "../../../public/IMG/sidebar/outstation-white.png", name: "Out station" },
        { w: "w-[80px]", click: () => setmenuOverLap(true), redirection: "/", ico: "../../../public/IMG/sidebar/hourly-black.png", icoActive: "../../../public/IMG/sidebar/hourly-white.png", name: "Hourly Rental" },
    ]

    return (
        <>
            <div className={`w-100 py-1 px-3 pb-4 mx-auto  ${menuOverLap ? "min-h-fit max-h-fit h-fit" : " "} col bs-blue rounded-t-none rounded-b-3xl relative flex flex-col items-center justify-between shadow-md rounded-r- `}>

                <div className="w-100 flex items-center justify-between">
                    <div className="">
                        <p className='text-[25px] p-0 m-0 tx-white font-bold font-Outfit'>HI,</p>
                        <p className='text-[18px] p-0 m-0 tx-white font-Outfit'>Welcome to <span className=' font-semibold'>YBGO!!</span> </p>
                    </div>
                    <div className="w-fit">
                        <div className="w-[clamp(40px,40px,40px)] h-[clamp(40px,40px,40px)] bs-org rounded-full flex items-center justify-center relative">
                            <i class="fa-light fa-bell tx-white text-[18px]"></i>
                            <div className="absolute top-0 end-0 rounded-full w-[clamp(13px,13px,13px)] h-[clamp(13px,13px,13px)] bs-white text-[9px] flex items-center justify-center font-bold font-Outfit">2</div>
                        </div>
                    </div>
                </div>
                <div className={`${searchBarActive || localSearchBarActive ? "hidden" : ""}  h-fit w-[85%] my-2 flex justify-center gap-2 ${menuOverLap ? "" : "absolute top-100 start-50 translate-middle "}`}>
                    <div className="flex gap-3">
                        {datalist.map((item) => (
                            <Link to={item.redirection}>
                                <div onClick={() => setActiveMainTab(item.name)} className={`shadow-md ${activeMainTab === item.name ? "bs-org" : "bs-white border-1 border-blue"}  rounded-lg pointer flex flex-col px-2 items-center justify-end w-[clamp(90px,90px,90px)] h-[clamp(90px,90px,90px)]`}   >
                                    <div className={`px-2 flex items-center justify-center ${item.w} h-[clamp(100px,100px,100px)]`}>
                                        <img className={`${item.w}  object-`} src={activeMainTab === item.name ? item.icoActive : item.ico} alt="" />
                                    </div>
                                    <p className={`px-1 w-100 text-center text-[10px] font-semibold font-Outfit border-t-1 py-0.5   ${activeMainTab === item.name ? "tx-white border-white" : "tx-blue border-org"} `}>{item.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={`${searchBarActive || localSearchBarActive ? "hidden" : ""}  h-fit w-[100%] flex justify-center absolute top-100 start-50 translate-middle`}>
                    <div className="flex border-1 rounded-lg bs-white overflow-hidden">
                        <div onClick={() => setactiveTab("Airport")} className={` ${activeTab === "Airport" ? "bs-org tx-white slide-right font-bold" : "  bs-white tx-black font-semibold"}  flex items-center pointer px-4 py-1.5 rounded-md gap-2 `}>
                            <p className='text-[16px] font-Outfit'>Airport</p>
                        </div>
                        <div onClick={() => setactiveTab("Local")} className={` ${activeTab === "Local" ? " bs-org tx-white slide-left font-bold" : " bs-white tx-black font-semibold"}  flex items-center pointer px-4 py-1.5 rounded-md gap-2 `}>
                            <p className='text-[16px] font-Outfit'>Local</p>
                        </div>
                    </div>
                </div>

                <div className={`${searchBarActive ? "" : "hidden"} col w-100 mt-4 flex flex-col gap-5`}>
                    <div className="col flex gap-2 border-2 border-org rounded-md bs-white relative">
                        <Autocomplete
                            label=""
                            defaultItems={airportSelector}
                            placeholder="From which Airport?"
                            className="col w-100 !font-bold py-1 !text-[14px] autocompleate-custome"
                        >
                            {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                        </Autocomplete>
                    </div>
                    <div className="col flex gap-2 border-2 border-org rounded-md bs-white relative">
                        <Autocomplete
                            label=""
                            defaultItems={citySelector}
                            placeholder="Select your Destination"
                            className="col w-100 !font-bold py-1 !text-[14px] autocompleate-custome"
                        >
                            {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                        </Autocomplete>
                    </div>
                </div>

                <div className={`${localSearchBarActive ? "" : "hidden"} col w-100 mt-4 flex flex-col gap-5`}>
                    <div className="col flex gap-2 border-2 border-org rounded-md bs-white relative">
                        <Autocomplete
                            label=""
                            defaultItems={citySelector}
                            placeholder="Select your City"
                            className="col w-100 !font-bold py-1 !text-[14px] autocompleate-custome"
                        >
                            {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                        </Autocomplete>
                    </div>
                    <div className="col flex gap-2 border-2 border-org rounded-md bs-white relative">
                        <Autocomplete
                            label=""
                            defaultItems={packageSelector}
                            placeholder="Select your Package"
                            className="col w-100 !font-bold py-1 !text-[14px] autocompleate-custome"
                        >
                            {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                        </Autocomplete>
                    </div>
                </div>
            </div>


            <div className={`${searchBarActive || localSearchBarActive ? "hidden" : ""}  mt-[25px] h-[calc(100dvh-300px)] flex flex-col justify-between`}>

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
                                    <div className="w-100  px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue" onClick={() => setSearchBarActive(true)}>
                                        <input type="radio" className='ms-[-2px]' />
                                        <input className='py-2 w-[clamp(100%,100%,400px)] h-[clamp(50px,50px,50px)]' placeholder='Pick-up Airport' type="text" />
                                    </div>
                                    <div className="w-100  px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue" onClick={() => setSearchBarActive(true)}>
                                        <i class="fa-sharp fa-solid fa-location-dot tx-yellow"></i>
                                        <input className='py-2 w-[clamp(100%,100%,400px)] h-[clamp(50px,50px,50px)]' placeholder='Your Destination' type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className={`${activeWhichLocationTab === "to-airport" ? "hidden" : ""}  w-[90%] mx-auto min-h-[122px] max-h-[122px] relative flex items-center mt-3`}>
                                <div className="min-w-[3px] max-w-[3px] border-l-4 border-blue border-dotted col min-h-[35%] max-h-[35%] absolute top-50 start-[24px] translate-middle"></div>
                                <div className="flex flex-col w-100 min-h-[122px] max-h-[122px] justify-between">
                                    <div className="w-100  px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue" onClick={() => setSearchBarActive(true)}>
                                        <input type="radio" className='ms-[-2px]' />
                                        <input className='py-2 w-[clamp(100%,100%,400px)] h-[clamp(50px,50px,50px)]' placeholder='Your Destination' type="text" />
                                    </div>
                                    <div className="w-100  px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue" onClick={() => setSearchBarActive(true)}>
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
                            {carSelectorActive &&
                                <div className={` min-w-[100%] max-w-[320px] h-[clamp(150px,150px,150px)] mx-auto`}>
                                    <Slider {...carslider} className='w-100'>
                                        <div className="col mt-4">
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
                                        <div className="col mt-4">
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
                        <div className={`${searchBarActive || localSearchBarActive ? "hidden" : ""}  w-100 px-3 mt-2`} >
                            <div className="w-100 bs-blue text-center py-2.5 rounded-2">
                                <p className='text-[15px] font-semibold tx-white'>Let's YBGO!</p>
                            </div>
                        </div>
                    </>
                }


                {activeMainTab === "Airport/Local" && activeTab === "Local" &&
                    <>
                        <div className="h-[calc(100dvh-300px)] flex flex-col justify-between">
                            <div className={`w-[90%] mx-auto min-h-[120px] max-h-[120px] relative flex items-center mt-3`}>
                                {/* <div className="min-w-[3px] max-w-[3px] border-l-4 border-blue border-dotted col min-h-[35%] max-h-[35%] absolute top-50 start-[24px] translate-middle"></div> */}
                                <div className="flex flex-col w-100 min-h-[120px] max-h-[120px] justify-between">
                                    <div className="w-100  px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue" onClick={() => setLocalSearchBarActive(true)}>
                                        <input type="radio" className='ms-[-2px]' />
                                        <input className='py-2.5 h-fit w-[clamp(100%,100%,400px)]' placeholder='Select your City' type="text" />
                                    </div>
                                    <div className="w-100  px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue" onClick={() => setLocalSearchBarActive(true)}>
                                        <img className='min-w-[20px] max-w-[20px] object-cover' src="../../public/IMG/pakages.png" alt="" />
                                        <input className='py-2.5 h-fit w-[clamp(100%,100%,400px)]' placeholder='Select your Package' type="text" />
                                    </div>
                                </div>
                            </div>

                            <div className={`min-w-[100%] max-w-[320px] h-[clamp(150px,150px,150px)] mx-auto`}>
                                <Slider {...carslider} className='w-100'>
                                    <div className="col mt-4">
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
                                    <div className="col mt-4">
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
                        </div>


                        <div className={`${searchBarActive || localSearchBarActive ? "hidden" : ""}  w-100 px-3 mt-4`} >
                            <div className="w-100 bs-blue text-center py-2.5 rounded-2">
                                <p className='text-[15px] font-semibold tx-white'>Let's YBGO!</p>
                            </div>
                        </div>
                    </>
                }
            </div>


            <div className={`${searchBarActive || localSearchBarActive ? "" : "hidden"}  w-100 px-3 mt-4`} onClick={() => { setSearchBarActive(false), setLocalSearchBarActive(false), setcarSelectorActive(true) }}>
                <div className="w-100 bs-blue text-center py-2.5 rounded-2">
                    <p className='text-[15px] font-semibold tx-white'>Let's YBGO!</p>
                </div>
            </div>




            <Modal isOpen={locaationPermissionModal} backdrop={"blur"} onOpenChange={closeLocaationPermissionModal}>
                <ModalContent>
                    {(closeLocaationPermissionModal) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal 1</ModalHeader>
                            <ModalBody>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={closeLocaationPermissionModal}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={closeLocaationPermissionModal}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>




            <BottomBar />

        </>
    )
}



















{/* <div className={`${addStop ? "" : "d-none"}  w-100 px-4 mt-3`}>
                            <div className="col  px-3 rounded-lg max-h-fit flex items-center gap-2 border-2 border-blue">
                                <i class="fa-sharp fa-solid fa-location-dot tx-blue"></i>
                                <input classNamepy-2.5 ='h-fit w-[clamp(100%,100%,400px)]' placeholder='Pick-up Location' type="text" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div onClick={() => setAddStop(false)} className={`${addStop ? "" : "hidden"}  flex col gap-1 items-center px-5`}>
                                <i class="fa-solid fa-plus tx-red text-[13px] "></i>
                                <p className='tx-red text-[13px] font-semibold'>Remove stop</p>
                            </div>
                            <div onClick={() => setAddStop(true)} className="flex col justify-end items-center gap-1 px-5">
                                <i class="fa-solid fa-plus tx-blue text-[13px] "></i>
                                <p className='tx-blue text-[13px] font-semibold'>Add stop</p>
                            </div>
                        </div> */}
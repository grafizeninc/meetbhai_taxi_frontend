import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCityAction } from "../../../redux/actions/city";
import Slider from 'react-slick';
import { addAirportBookingAction, getVehicleByAirportAndDestinationAction } from '../../../redux/actions/booking';
import { getAllAirPortAction } from '../../../redux/actions/airport';
import { getAllDestinationAction, getDestinationByAirportAction } from '../../../redux/actions/destination';
import { getAllHourlyRentAction } from '../../../redux/actions/hourlyRent';
import { getAllLocalPackagesAction } from '../../../redux/actions/localHourlyPackage';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

export default function Heroslider() {
    const dispatch = useDispatch();
    const [selectedAirport, setSelectedAirport] = useState(null);
    const [selectedAirportDate, setSelectedAirportDate] = useState(new Date());
    const [selectedAirportTime, setSelectedAirportTime] = useState(new Date());
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedDestinationFromAll, setSelectedDestinationFromAll] = useState(null);
    const [selectedAirportVehicle, setSelectedAirportVehicle] = useState(null);
    
    
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedLocalPackageDate, setSelectedLocalPackageDate] = useState(new Date());
    const [selectedLocalPackageTime, setSelectedLocalPackageTime] = useState(new Date());
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [selectedPackageFromAll, setSelectedPackageFromAll] = useState(null);


    const [activeTrip, setActiveTrip] = useState("OutStation");
    const [activeRoundTrip, setActiveRoundTrip] = useState("oneway");
    const [activeAirportLocal, setActiveAirportLocal] = useState("airport");
    const getAllCity = useSelector((state) => state?.cityState?.getAllCity || []);
    const getAllAirport = useSelector((state) => state?.airPortState?.getAllAirPort || []);
    const getAllDestination = useSelector((state) => state?.destinationState?.getAllDestination || []);
    const getDestinationByAirport = useSelector((state) => state?.destinationState?.getDestinationByAirport || []);

    const getVehicleByAirportAndDestination = useSelector((state) => state?.bookingState?.getVehicleByAirportAndDestination || []);
    const getVehicleByLocalPackages = useSelector((state) => state?.bookingState?.getVehicleByLocalPackages || []);
    const getAllhourlyPackages = useSelector((state) => state?.hourlyRentState?.getAllHourlyRent || []);
    const getAllLocalPackages = useSelector((state) => state?.localPackageState?.getAllLocalPackages || []);

    const [InitialAirportData, setInitialAirportData] = useState({
        user: "", // User Id
        airportId: "",
        destinationVehicleId: "",
        pickupDate: "",
        pickupTime: "",
        categoryId: "",
        km: ""
    });
    const [InitialLocalPackageData, setLocalPackageInitialData] = useState({
        user: "", // User Id
        cityId: "",
        packageId: "",
        pickupDate: "",
        pickupTime: "",
        categoryId: "",
        km: ""
    });
    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setInitialAirportData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // validator.message(name, value, "required");
        // setValidationErrors((prevErrors) => ({
        //   ...prevErrors,
        //   [name]: validator.getErrorMessages()[name],
        // }));
    };
    const handleAirportBookingDataSubmit = (e) => {

        e.preventDefault();
        // if (validator.allValid()) {

        let body = {
            airportId: selectedAirport,
            destinationVehicleId: selectedDestinationFromAll,
            pickupDate:  moment(selectedAirportDate).format('DD/MM/YYYY'),
            pickupTime: selectedAirportTime,
            categoryId: selectedAirportVehicle,
        }
        dispatch(addAirportBookingAction(body));

        setInitialAirportData();
        // } else {
        //     validator.showMessages();
        //     setValidationErrors(validator.getErrorMessages());
        // }
    };

    

    
    const handleLocalDataChange = (e) => {
        const { name, value } = e.target;
        setLocalPackageInitialData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // validator.message(name, value, "required");
        // setValidationErrors((prevErrors) => ({
        //   ...prevErrors,
        //   [name]: validator.getErrorMessages()[name],
        // }));
    };

    const handleLocalPackageDataSubmit = (e) => {

        e.preventDefault();
        // if (validator.allValid()) {

        let body = {
            cityId: selectedCity,
            packageId: selectedPackageFromAll,
            pickupDate:  moment(selectedLocalPackageDate).format('DD/MM/YYYY'),
            pickupTime: selectedLocalPackageTime,
            categoryId: InitialLocalPackageData.categoryId,
        }
        dispatch(addLocalBookingAction(body));

        setLocalPackageInitialData();
        // } else {
        //     validator.showMessages();
        //     setValidationErrors(validator.getErrorMessages());
        // }
    };


    const cityList = Array.isArray(getAllCity) ? getAllCity.map((city) => ({
        id: city._id,
        name: city.name,
        code: city.code,
        state_name: city.state_name,
    })) : [];
    const airportList = Array.isArray(getAllAirport) ? getAllAirport.map((airport) => ({
        id: airport._id,
        name: airport.name,
        code: airport.code,
        cityName: airport.cityName,
    })) : [];
    const destinationList = Array.isArray(getAllDestination) ? getAllDestination.map((destination) => ({
        id: destination._id,
        name: destination.name,
    })) : [];
    const destinationByAirportList = Array.isArray(getDestinationByAirport) ? getDestinationByAirport.map((destinationByAirport) => ({
        id: destinationByAirport._id,
        name: destinationByAirport.name,
    })) : [];
    const VehicleByAirportAndDestinationList = Array.isArray(getVehicleByAirportAndDestination) ? getVehicleByAirportAndDestination.map((VehicleByAirportAndDestination) => ({
        categoryId: VehicleByAirportAndDestination.categoryId,
        categoryName: VehicleByAirportAndDestination.categoryName,
        name: VehicleByAirportAndDestination.name,
        price: VehicleByAirportAndDestination.price,
        seat: VehicleByAirportAndDestination.seat,
        waterBottle: VehicleByAirportAndDestination.waterBottle,
        fuelType: VehicleByAirportAndDestination.fuelType,
        ac: VehicleByAirportAndDestination.ac,
        carrier: VehicleByAirportAndDestination.carrier,
    })) : [];
    const VehicleByLocalPackagesList = Array.isArray(getVehicleByLocalPackages) ? getVehicleByLocalPackages.map((VehicleByLocalPackages) => ({
        categoryId: VehicleByLocalPackagesList.categoryId,
        categoryName: VehicleByLocalPackagesList.categoryName,
        name: VehicleByLocalPackagesList.name,
        price: VehicleByLocalPackagesList.price,
        seat: VehicleByLocalPackagesList.seat,
        waterBottle: VehicleByLocalPackagesList.waterBottle,
        fuelType: VehicleByLocalPackagesList.fuelType,
        ac: VehicleByLocalPackagesList.ac,
        carrier: VehicleByLocalPackagesList.carrier,
    })) : [];
    const hourlyPackageList = Array.isArray(getAllhourlyPackages) ? getAllhourlyPackages.map((hourlyPackage) => ({
        id: hourlyPackage._id,
        packageName: hourlyPackage.packageName,
    })) : [];
    const LocalPackageList = Array.isArray(getAllLocalPackages) ? getAllLocalPackages.map((localPackage) => ({
        id: localPackage._id,
        packageName: localPackage.packageName,
    })) : [];

    const dummyCitySelector = [
        { label: "Rajkot", value: "1", },
        { label: "Surat", value: "2", },
        { label: "Chennai", value: "3", },
    ];
    const dummyCarSelector = [
        { label: "", value: "1", },
        { label: "", value: "2", },
        { label: "", value: "3", },
        { label: "", value: "4", },
        { label: "", value: "5", },
        { label: "", value: "6", },
        { label: "", value: "7", },
    ];
    const dummyPackageSelector = [
        { label: "₹7/Km", value: "1", },
        { label: "₹9/Km", value: "2", },
        { label: "₹11/Km", value: "3", },
    ];
    const carslider = ({
        arrows: false,
        infinite: true,
        // autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        touchThreshold: 100,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
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

    const handleAirportVehicleListing = () => {
        dispatch(getVehicleByAirportAndDestinationAction(selectedAirport, selectedDestinationFromAll));
    }

    useEffect(() => {
        dispatch(getAllCityAction());
        dispatch(getAllAirPortAction());
        dispatch(getAllDestinationAction());
        dispatch(getDestinationByAirportAction(selectedAirport));
        dispatch(getAllHourlyRentAction());
        dispatch(getAllLocalPackagesAction());
    }, [dispatch, selectedAirport]);

    return (
        <>
            <div className="h-[100vh] flex items-center relative">
                <div className="h-100 w-100 absolute top-0 left-0 opacity-90 border-b-2 border-org">
                    <img className='w-100 h-100 object-fill' src="../../../../public/IMG/Slider-back-1.png" alt="" />
                </div>
                <div className="w-[85%] 2xl:!w-[75%] mx-auto flex items-center justify-between">
                    <div className="flex flex-col gap-4 bs-white relative z-[90] w-100 h-fit rounded-xl py-[45px] px-5 shadow-2">
                        <div className="w-fit flex gap-3 absolute top-0 start-50 translate-middle select-none">
                            <div onClick={() => setActiveTrip("OutStation")} className={`${activeTrip === "OutStation" ? "bs-org tx-white" : "bs-white tx-"}  rounded-md px-3 whitespace-nowrap py-1 pointer drop-shadow-md`}>
                                <p className=' text-[14px] font-semibold font-Outfit '>OutStation</p>
                            </div>
                            <div onClick={() => setActiveTrip("Hourly")} className={`${activeTrip === "Hourly" ? "bs-org tx-white" : "bs-white tx-"}  rounded-md px-3 whitespace-nowrap py-1 pointer drop-shadow-md`}>
                                <p className=' text-[14px] font-semibold font-Outfit '>Hourly rental</p>
                            </div>
                            <div onClick={() => setActiveTrip("Airport")} className={`${activeTrip === "Airport" ? "bs-org tx-white" : "bs-white tx-"}  rounded-md px-3 whitespace-nowrap py-1 pointer drop-shadow-md`}>
                                <p className=' text-[14px] font-semibold font-Outfit '>Airport</p>
                            </div>
                        </div>
                        {activeTrip === "OutStation" &&
                            <>
                                <div className="w-100 flex gap-5 justify-center select-none">
                                    <div className="flex gap-2 items-center" onClick={() => setActiveRoundTrip("oneway")}>
                                        <input className='accent-[#2565df] !border-0 scale-125 !outline-1' type="radio" id="OneWay" checked={activeRoundTrip === "oneway" ? true : false} name="fav_language" value="OneWay" />
                                        <label className='text-[15px] opacity-75 font-bold font-Outfit' for="OneWay">One Way Trip</label>
                                    </div>
                                    <div className="flex gap-2 items-center" onClick={() => setActiveRoundTrip("round")}>
                                        <input className='accent-[#2565df] !border-0 scale-125 !outline-1' type="radio" id="Round" checked={activeRoundTrip === "round" ? true : false} name="fav_language" value="Round" />
                                        <label className='text-[15px] opacity-75 font-bold font-Outfit' for="Round">Round Trip</label>
                                    </div>
                                </div>
                                <div className="flex w-100 border-1 rounded-lg px-2">
                                    <div className="w-50 flex">
                                        <div className="w-50 px-2 py-2 col flex flex-col justify-center overflow-hidden">
                                            <p className='text-[16px] font-Outfit font-medium opacity-70 mt-2'>From</p>
                                            <input className='text-[28px] py-3 font-semibold font-Outfit placeholder:text-black' placeholder='From City' type="text" />
                                        </div>
                                        <div className="w-[clamp(1px,1px,1px)] bg-[#e5e7eb] rounded-full"></div>
                                        <div className="w-50 px-2 py-2 col flex flex-col justify-center overflow-hidden">
                                            <p className='text-[16px] font-Outfit font-medium opacity-70 mt-2'>To</p>
                                            <input className='text-[28px] py-3 font-semibold font-Outfit placeholder:text-black' placeholder='To City' type="text" />
                                        </div>
                                    </div>
                                    <div className="w-[clamp(1px,1px,1px)] bg-[#e5e7eb] rounded-full"></div>
                                    {activeRoundTrip === "oneway" &&
                                        <div className="w-50 flex">
                                            <div class="col w-50 relative rounded-lg flex flex-col justify-center px-3">
                                                <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Date </p>
                                                <DatePicker
                                                    label={""}
                                                    description={""}
                                                    className="max-w-[284px] hero-custome-date"
                                                />
                                            </div>
                                            <div className="w-[clamp(1px,1px,1px)] bg-[#e5e7eb] rounded-full"></div>
                                            <div className="col w-50 relative rounded-lg flex flex-col gap-2 justify-center px-3">
                                                <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Time </p>
                                                <div className="h-fit">
                                                    <input className='w-[clamp(100%,100%,100%)] h-[clamp(35px,35px,35px)] px-2 py-0 ' type="time"
                                                        value={InitialAirportData?.pickupDate} onChange={handleDataChange} />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {activeRoundTrip === "round" &&
                                        <>
                                            {/* <div className="w-50 flex">
                                                <div class="col w-50 relative rounded-lg flex flex-col justify-center px-3">
                                                    <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Date </p>
                                                    <DatePicker
                                                        label={""}
                                                        description={""}
                                                        className="max-w-[284px] hero-custome-date"
                                                    />
                                                </div>
                                                <div className="w-[clamp(1px,1px,1px)] bg-[#e5e7eb] rounded-full"></div>
                                                <div className="col w-50 relative rounded-lg flex flex-col gap-2 justify-center px-3">
                                                    <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Time </p>
                                                    <div className="h-fit">
                                                        <input className='w-[clamp(100%,100%,100%)] h-[clamp(35px,35px,35px)] px-2 py-0 ' type="time" />
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="w-50 flex">
                                                <div class="col relative rounded-lg flex flex-col gap-2 justify-center px-3">
                                                    <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Trip Date </p>
                                                    <DatePicker
                                                        label={""}
                                                        className="max-w-[284px] hero-custome-date"
                                                        description={""}
                                                    />
                                                </div>
                                                <div className="w-[clamp(2px,2px,2px)] bg-[#e5e7eb] rounded-full"></div>
                                                <div class="col relative rounded-lg flex flex-col gap-2 justify-center px-3">
                                                    <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Return Date </p>
                                                    <DatePicker
                                                        label={""}
                                                        className="max-w-[284px] hero-custome-date"
                                                        description={""}
                                                    />
                                                </div>
                                                <div className="w-[clamp(2px,2px,2px)] bg-[#e5e7eb] rounded-full"></div>
                                                <div className="col w-50 relative rounded-lg flex flex-col gap-2 justify-center px-3">
                                                    <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Time </p>
                                                    <div className="h-fit">
                                                        <input className='w-[clamp(100%,100%,100%)] h-[clamp(35px,35px,35px)] px-2 py-0 ' type="time" />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>

                                <div className={`w-100 h-[clamp(150px,150px,150px)] mx-auto`}>
                                    <Slider {...carslider} className='w-100'>
                                        {dummyCarSelector.map((item) => (
                                            <div key={item} className="col mt-4">
                                                <div className="w-[90%] mx-auto bs-blue rounded-xl pointer">
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
                                                            <p className='tx-white text-[18px] font-bold font-Outfit tracking-wide'>Preminum SUV</p>
                                                            <div className="tx-white text-[14px] font-Outfit tracking-wide ">Innova or Innova Crysta</div>
                                                        </div>
                                                        <div className="flex items-center pt-2 gap-1">
                                                            <p className='tx-white text-[16px] font-bold '>6</p>
                                                            <i class="fa-solid fa-user tx-white"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>

                                <div onClick={(e) => handleAirportBookingDataSubmit(e)} className="bs-blue rounded-md px-5 py-1 absolute top-100 start-50 translate-middle pointer">
                                    <p className='text-[18px] font-medium font-Outfit tx-white'>LET’S YBGO!</p>
                                </div>
                            </>
                        }
                        {activeTrip === "Hourly" &&
                            <>
                                <div className="flex gap-4">
                                    <div className="w-50 flex flex-col rounded-lg gap-[25px]">
                                        <div className="col flex gap-2 border-1 border-org rounded-md bs-white relative">
                                            <Autocomplete
                                                label=""
                                                // defaultItems={dummyCitySelector}
                                                defaultItems={cityList}
                                                placeholder="From which city?"
                                                className="col w-[clamp(100%,100%,100%)] !font-bold py-2 !text-[14px] autocompleate-custome"
                                            >
                                                {(city) => {
                                                    const cityItem = `${city.name} - ${city.code} ${city.state_name}`;
                                                    return (
                                                        <AutocompleteItem key={city.id} value={city}>
                                                            {cityItem}
                                                        </AutocompleteItem>
                                                    );
                                                }}
                                            </Autocomplete>
                                        </div>
                                        <div className="col flex gap-2 border-1 border-org rounded-md bs-white relative">
                                            <Autocomplete
                                                label=""
                                                // defaultItems={dummyCitySelector}
                                                defaultItems={hourlyPackageList}
                                                placeholder="Hourly Packages"
                                                className="col w-[clamp(100%,100%,100%)] !font-bold py-2 !text-[14px] autocompleate-custome"
                                            >
                                                {(hourlyPackage) => {
                                                    const hourlyPackageItem = `${hourlyPackage.packageName}`;
                                                    return (
                                                        <AutocompleteItem key={hourlyPackage.id} value={hourlyPackage}>
                                                            {hourlyPackageItem}
                                                        </AutocompleteItem>
                                                    );
                                                }}
                                            </Autocomplete>
                                        </div>
                                    </div>
                                    <div className="w-50 flex border-y-1 py-2.5">
                                        <div class="col w-50 relative rounded-lg flex flex-col justify-center px-3">
                                            <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Date </p>
                                            <DatePicker
                                                label={""}
                                                className="max-w-[284px] hero-custome-date"
                                                description={""}
                                            />
                                        </div>
                                        <div className="w-[clamp(1px,1px,1px)] bg-[#e5e7eb] rounded-full"></div>
                                        <div className="col w-50 relative rounded-lg flex flex-col gap-2 justify-center px-3">
                                            <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Time </p>
                                            <div className="h-fit">
                                                <input className='w-[clamp(100%,100%,100%)] h-[clamp(35px,35px,35px)] px-2 py-0 ' type="time" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`w-100 h-[clamp(150px,150px,150px)] mx-auto`}>
                                    <Slider {...carslider} className='w-100'>
                                        {dummyCarSelector.map((item) => (
                                            <div key={item} className="col mt-4">
                                                <div className="w-[90%] mx-auto bs-blue rounded-xl pointer">
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
                                                            <p className='tx-white text-[18px] font-bold font-Outfit tracking-wide'>Preminum SUV</p>
                                                            <div className="tx-white text-[14px] font-Outfit tracking-wide ">Innova or Innova Crysta</div>
                                                        </div>
                                                        <div className="flex items-center pt-2 gap-1">
                                                            <p className='tx-white text-[16px] font-bold '>6</p>
                                                            <i class="fa-solid fa-user tx-white"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                <div className="bs-blue rounded-md px-5 py-1 absolute top-100 start-50 translate-middle pointer">
                                    <p className='text-[18px] font-medium font-Outfit tx-white'>LET’S YBGO!</p>
                                </div>
                            </>
                        }
                        {activeTrip === "Airport" &&
                            <>
                                <div className="w-100 flex gap-5 justify-center select-none">
                                    <div className="flex gap-2 items-center pointer" onClick={() => setActiveAirportLocal("airport")}>
                                        <input className='accent-[#2565df] !border-0 scale-125 !outline-1' type="radio" id="airport" checked={activeAirportLocal === "airport" ? true : false} name="airportLocal" value="airport" />
                                        <label className='text-[15px] opacity-75 font-bold font-Outfit' for="airport">Airport</label>
                                    </div>
                                    <div className="flex gap-2 items-center pointer" onClick={() => setActiveAirportLocal("local")}>
                                        <input className='accent-[#2565df] !border-0 scale-125 !outline-1' type="radio" id="local" checked={activeAirportLocal === "local" ? true : false} name="airportLocal" value="local" />
                                        <label className='text-[15px] opacity-75 font-bold font-Outfit' for="local">Local</label>
                                    </div>
                                </div>
                                {activeAirportLocal === "local" &&
                                    <>
                                        <div className="flex">
                                            <div className="w-50 flex flex-col gap-4 px-3">
                                                <div className="col flex gap-2 border-1 border-org rounded-md bs-white relative">
                                                    <Autocomplete
                                                        label=""
                                                        // defaultItems={dummyCitySelector}
                                                        defaultItems={cityList}
                                                        placeholder="Pick Up City"
                                                        className="col w-[clamp(100%,100%,100%)] !font-bold py-2 !text-[14px] autocompleate-custome"
                                                    >
                                                        {(city) => {
                                                            const cityItem = `${city.name} - ${city.code} ${city.state_name}`;
                                                            return (
                                                                <AutocompleteItem key={city.id} value={city}>
                                                                    {cityItem}
                                                                </AutocompleteItem>
                                                            );
                                                        }}
                                                    </Autocomplete>
                                                </div>
                                                <div className="col flex gap-2 border-1 border-org rounded-md bs-white relative">
                                                    <Autocomplete
                                                        label=""
                                                        defaultItems={LocalPackageList}
                                                        placeholder="Select Package"
                                                        className="col w-[clamp(100%,100%,100%)] !font-bold py-2 !text-[14px] autocompleate-custome"
                                                    >
                                                        {(localPackage) => {
                                                            const localPackageItem = `${localPackage.packageName} `;
                                                            return (
                                                                <AutocompleteItem key={localPackage.id} value={localPackage}>
                                                                    {localPackageItem}
                                                                </AutocompleteItem>
                                                            );
                                                        }}
                                                    </Autocomplete>
                                                </div>
                                            </div>
                                            <div className="flex w-50 border-y-1 py-2.5">
                                                <div class="col w-50 relative rounded-lg flex flex-col justify-center px-3">
                                                    <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Date </p>
                                                    <DatePicker
                                                        label={""}
                                                        className="max-w-[284px] hero-custome-date"
                                                        description={""}
                                                    />
                                                </div>
                                                <div className="w-[clamp(1px,1px,1px)] bg-[#e5e7eb] rounded-full"></div>
                                                <div className="col w-50 relative rounded-lg flex flex-col gap-2 justify-center px-3">
                                                    <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Time </p>
                                                    <div className="h-fit">
                                                        <input className='w-[clamp(100%,100%,100%)] h-[clamp(35px,35px,35px)] px-2 py-0 ' type="time" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`w-100 h-[clamp(150px,150px,150px)] mx-auto`}>
                                            <Slider {...carslider} className='w-100'>
                                                {dummyCarSelector.map((item) => (
                                                    <div key={item} className="col mt-4">
                                                        <div className="w-[90%] mx-auto bs-blue rounded-xl pointer">
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
                                                                    <p className='tx-white text-[18px] font-bold font-Outfit tracking-wide'>Preminum SUV</p>
                                                                    <div className="tx-white text-[14px] font-Outfit tracking-wide ">Innova or Innova Crysta</div>
                                                                </div>
                                                                <div className="flex items-center pt-2 gap-1">
                                                                    <p className='tx-white text-[16px] font-bold '>6</p>
                                                                    <i class="fa-solid fa-user tx-white"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                        <div className="bs-blue rounded-md px-5 py-1 absolute top-100 start-50 translate-middle pointer">
                                            <p className='text-[18px] font-medium font-Outfit tx-white'>LET’S YBGO!</p>
                                        </div>
                                    </>
                                }
                                {activeAirportLocal === "airport" &&
                                    <>
                                        <div className="flex">
                                            <div className="w-50 flex flex-col gap-4 px-3">
                                                <div className="col flex gap-2 border-1 border-org rounded-md bs-white relative">
                                                    <Autocomplete
                                                        label=""
                                                        defaultItems={airportList}
                                                        placeholder="Enter airport"
                                                        selectedKey={selectedAirport}
                                                        onSelectionChange={setSelectedAirport}
                                                        className="col w-[clamp(100%,100%,100%)] !font-bold py-2 !text-[14px] autocompleate-custome"
                                                    >
                                                        {(airport) => {
                                                            const airportItem = `${airport.name} - ${airport.code}, ${airport.cityName}`;
                                                            return (
                                                                <AutocompleteItem key={airport.id} value={airport} onClick={handleAirportVehicleListing}>
                                                                    {airportItem}
                                                                </AutocompleteItem>
                                                            );
                                                        }}
                                                    </Autocomplete>
                                                </div>
                                                <div className="col flex gap-2 border-1 border-org rounded-md bs-white relative">
                                                    <Autocomplete
                                                        label=""
                                                        isDisabled={selectedAirport === null ? true : false}
                                                        defaultItems={destinationByAirportList}
                                                        placeholder="Enter destination"
                                                        selectedKey={selectedDestinationFromAll}
                                                        onSelectionChange={setSelectedDestinationFromAll}
                                                        // selectedKey={selectedDestination}
                                                        // onSelectionChange={setSelectedDestination}
                                                        className="col w-[clamp(100%,100%,100%)] !font-bold py-2 !text-[14px] autocompleate-custome"
                                                    >
                                                        {(destinationByAirport) => {
                                                            const destinationItem = `${destinationByAirport.name} `;
                                                            return (
                                                                <AutocompleteItem key={destinationByAirport.id} value={destinationByAirport} onClick={handleAirportVehicleListing}>
                                                                    {destinationItem}
                                                                </AutocompleteItem>
                                                            );
                                                        }}
                                                    </Autocomplete>
                                                </div>
                                            </div>
                                            <div className="flex w-50 border-y-1 py-2.5">
                                                <div class="col w-50 relative rounded-lg flex flex-col justify-center px-3">
                                                    <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Date </p>
                                                    <DatePicker
                                                        selected={selectedAirportDate}
                                                        onChange={(date) => setSelectedAirportDate(date)}
                                                        className="max-w-[284px] hero-custome-date"
                                                        dateFormat="dd/MM/yyyy" // Optional: specify the format for the picker
                                                        placeholderText="Select a date"
                                                    />
                                                </div>
                                                <div className="w-[clamp(1px,1px,1px)] bg-[#e5e7eb] rounded-full"></div>
                                                <div className="col w-50 relative rounded-lg flex flex-col gap-2 justify-center px-3">
                                                    <p class="text-[15px] font-semibold bs-white px-1 font-Outfit opacity-70">Pickup Time </p>
                                                    <div className="h-fit">
                                                        <input onChange={(e) => setSelectedAirportTime(e.target.value)} className='w-[clamp(100%,100%,100%)] h-[clamp(35px,35px,35px)] px-2 py-0 ' type="time" />
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`w-100 h-[clamp(150px,150px,150px)] mx-auto`}>
                                            {VehicleByAirportAndDestinationList.length > 5 && VehicleByAirportAndDestinationList.map((item) => (
                                                <Slider {...carslider} className='w-100' >
                                                    <div key={item} className="col mt-4">
                                                        <div className="w-[90%] mx-auto bs-blue rounded-xl pointer">
                                                            <div className="w-100 flex items-center justify-between">
                                                                <div className="bs-org w-fit h-fit rounded-br-xl rounded-tl-xl">
                                                                    <div className="mt-[-30px] ms-[-10px] pe-3 py-1">
                                                                        <img className='w-[clamp(180px,180px,180px)] object-cover' src="../../public/IMG/car-slider.png" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="px-3">
                                                                    <p className='tx-white text-[23px] font-bold font-Outfit tracking-wider'> ₹{item.price}</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between items-end px-3 py-2">
                                                                <div className="">
                                                                    <p className='tx-white text-[18px] font-bold font-Outfit tracking-wide'>{item.categoryName}</p>
                                                                    <div className="tx-white text-[14px] font-Outfit tracking-wide ">{item.fuelType}</div>
                                                                </div>
                                                                <div className="flex items-center pt-2 gap-1">
                                                                    <p className='tx-white text-[16px] font-bold '>{item.seat}</p>
                                                                    <i class="fa-solid fa-user tx-white"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Slider>
                                            ))}
                                            <div className="flex w-100 overflow-x-scroll scroll-d-none">
                                                <div className="w-100 flex gap-4">
                                                    {VehicleByAirportAndDestinationList.length < 5 && VehicleByAirportAndDestinationList.map((item) => (
                                                        <>
                                                            <div key={item} className="w-fit mt-4">
                                                                <div className="w-[clamp(250px,250px,250px)] mx-auto bs-blue rounded-xl pointer">
                                                                    <div className="w-100 flex items-center justify-between">
                                                                        <div className="bs-org w-fit h-fit rounded-br-xl rounded-tl-xl">
                                                                            <div className="mt-[-30px] ms-[-10px] pe-3 py-1">
                                                                                <img className='w-[clamp(180px,180px,180px)] object-cover' src="../../public/IMG/car-slider.png" alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="px-3">
                                                                            <p className='tx-white text-[23px] font-bold font-Outfit tracking-wider'> ₹{item.price}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex justify-between items-end px-3 py-2">
                                                                        <div className="">
                                                                            <p className='tx-white text-[18px] font-bold font-Outfit tracking-wide'>{item.categoryName}</p>
                                                                            <div className="tx-white text-[14px] font-Outfit tracking-wide ">{item.fuelType}</div>
                                                                        </div>
                                                                        <div className="flex items-center pt-2 gap-1">
                                                                            <p className='tx-white text-[16px] font-bold '>{item.seat}</p>
                                                                            <i class="fa-solid fa-user tx-white"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={handleAirportBookingDataSubmit} className="bs-blue rounded-md px-5 py-1 absolute top-100 start-50 translate-middle pointer">
                                            <p className='text-[18px] font-medium font-Outfit tx-white'>LET’S YBGO!</p>
                                        </div>
                                    </>
                                }
                            </>
                        }
                    </div>
                    {/* <div className="relative z-[90] w-fit">
                        <div className="w-fit">
                            <img className='w-[clamp(800px,800px,800px)] object-contain' src="../../../../public/IMG/hero-car.png" alt="" />
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
} 

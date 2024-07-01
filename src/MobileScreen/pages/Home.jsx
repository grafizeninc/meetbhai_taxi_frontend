import { Button, DatePicker, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import BookingRoutes from '../components/header/BookingRoutes';
import BottomBar from '../components/menu/BottomBar';
import AirportBooking from './booking/AirportBooking';

export default function Home({ activeMainTab, setActiveMainTab, menuOverLap, setmenuOverLap }) {
    const [activeTab, setactiveTab] = useState("Airport");
    const [activeWhichLocationTab, setactiveWhichLocationTab] = useState("from-airport");
    const [airportSearchBarActive, setAirportSearchBarActive] = useState(false);
    const [localSearchBarActive, setLocalSearchBarActive] = useState(false);
    const [airportCarSelectorActive, setAirportCarSelectorActive] = useState(false);
    const [localCarSelectorActive, setlocalCarSelectorActive] = useState(false);
    const [addStop, setAddStop] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [locaationPermissionModal, setLocaationPermissionModal] = useState(false);
    const [fareSummryModal, setFareSummryModal] = useState(false);

    const handleFareSummryModal = () => {
        setFareSummryModal(true)
    }
    const closeFareSummryModal = () => {
        setFareSummryModal(false)
    }

    const handleLocaationPermissionModal = () => {
        setLocaationPermissionModal(true)
    }
    const closeLocaationPermissionModal = () => {
        setLocaationPermissionModal(false)
    }

    useEffect(() => {
        if (localSearchBarActive === true)
            handleLocaationPermissionModal();
    }, [airportSearchBarActive, localSearchBarActive])

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
    const destinationSelector = [
        { label: "Greenland chowkdi", value: "1", },
        { label: "Kalwad Rd. cosmoplex circle", value: "2", },
        { label: "Maa Chamunda Temple", value: "3", },
        { label: "Indira circle, University main Rd.", value: "4", },
    ];
    const packageSelector = [
        { label: "02 Hours, 20 Kilometres", value: "1", },
        { label: "04 Hours, 40 Kilometres", value: "2", },
        { label: "08 Hours, 80 Kilometres", value: "3", },
        { label: "12 Hours, 120 Kilometres", value: "4", },
        { label: "16 Hours, 160 Kilometres", value: "5", },
    ];



    return (
        <>
            <BookingRoutes activeMainTab={activeMainTab} setActiveMainTab={setActiveMainTab}
                menuOverLap={menuOverLap} activeTab={activeTab} setactiveTab={setactiveTab}
                airportSearchBarActive={airportSearchBarActive} localSearchBarActive={localSearchBarActive}
                airportSelector={airportSelector} destinationSelector={destinationSelector}
                packageSelector={packageSelector} citySelector={citySelector} />


            <AirportBooking handleFareSummryModal={handleFareSummryModal} activeMainTab={activeMainTab} airportSearchBarActive={airportSearchBarActive}
                setAirportSearchBarActive={setAirportSearchBarActive} localSearchBarActive={localSearchBarActive}
                localCarSelectorActive={localCarSelectorActive} activeWhichLocationTab={activeWhichLocationTab}
                setactiveWhichLocationTab={setactiveWhichLocationTab} activeTab={activeTab} airportCarSelectorActive={airportCarSelectorActive}
                setLocalSearchBarActive={setLocalSearchBarActive} />


            <div className={`${localSearchBarActive ? "" : "hidden"} w-100 px-3 mt-5`} onClick={() => { setLocalSearchBarActive(false), setlocalCarSelectorActive(true) }}>
                <div className="w-100 bs-blue text-center py-2.5 rounded-2">
                    <p className='text-[15px] font-semibold tx-white'>Let's YBGO!</p>
                </div>
            </div>
            <div className={`${airportSearchBarActive ? "" : "hidden"} w-100 px-3 mt-5`} onClick={() => { setAirportSearchBarActive(false), setAirportCarSelectorActive(true) }}>
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


            <Modal isOpen={fareSummryModal} backdrop={"blur"} placement='center' isDismissable={false} onOpenChange={closeFareSummryModal}>
                <ModalContent className='!m-0 !p-0 !w-[95%] !rounded-lg '>
                    {(closeFareSummryModal) => (
                        <>
                            <ModalBody className='!m-0 !p-0'>
                                <div className="">
                                    <div className="bs-org py-1.5 text-center">
                                        <p className='text-[16px] tx-white font-Outfit font-bold'>Fare Summry</p>
                                    </div>
                                    <div className="p-3">
                                        <div className="flex items-center justify-between">
                                            <p className='text-[15px] font-Outfit font-semibold'>Fare Price</p>
                                            <p className='text-[15px] font-Outfit font-bold'>₹ 1570.00</p>
                                        </div>
                                        <div className="flex items-center justify-between pb-1">
                                            <p className='text-[15px] font-Outfit font-semibold'>Selected Vehicle</p>
                                            <p className='text-[15px] font-Outfit font-bold'>SUV</p>
                                        </div>
                                        <div className="flex items-center justify-center border-y-1 py-2 border-org">
                                            <p className='text-[15px] font-Outfit font-semibold'>Airport To Destination</p>
                                        </div>
                                        <div
                                            className={`col max-w-[100%] mx-auto min-h-[65px] max-h-[65px] relative flex items-center mt-3`}
                                        >
                                            <div className="min-w-[3px] max-w-[3px] border-l-3 border-grey border-dashed col min-h-[40%] max-h-[40%] absolute top-50 start-[15px] translate-middle"></div>
                                            <div className="flex flex-col w-100 min-h-[65px] max-h-[65px] justify-between">
                                                <div className="w-100 rounded-lg max-h-fit flex items-center gap-2">
                                                    <div className="w-[clamp(30px,30px,30px)] flex items-center justify-center relative z-20">
                                                        <img
                                                            className="w-[clamp(15px,15px,15px)]"
                                                            src="../../../public/IMG/dot.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <p className="text-[15px] font-Outfit opacity-85">
                                                        Antonietta Heights, Paxton - 57353
                                                    </p>
                                                </div>
                                                <div className="w-100 rounded-lg max-h-fit flex items-center gap-2">
                                                    <div className="w-[clamp(30px,30px,30px)] flex items-center justify-center relative z-20 pt-2">
                                                        <img
                                                            className="w-[clamp(23px,23px,23px)]"
                                                            src="../../../public/IMG/location.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <p className="col pe-3 text-[15px] font-Outfit opacity-85 border-t-2 pt-2">
                                                        Gavin Lake, 08789 Bennett Lake
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <i class="fa-regular fa-badge-check tx-green"></i>
                                            <p className='text-[14px] font-Outfit font-semibold'>Additional charges ( if any )</p>
                                        </div>
                                        <div className="ps-3">
                                            <p className='text-[12px] font-Outfit font-semibold opacity-70'>Usable Oneway limit 531 kms</p>
                                            <p className='text-[12px] font-Outfit font-semibold opacity-70'>After 531 extra charges ₹7 per km</p>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <i class="fa-regular fa-badge-check tx-green"></i>
                                            <p className='text-[14px] font-Outfit font-semibold'>Inclusion: Base Fare, vehicle and fuel.</p>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <i class="fa-regular fa-badge-check tx-green"></i>
                                            <p className='text-[14px] font-Outfit font-semibold'>Exclusion: Parking Charge, Airport Entry Charge</p>
                                        </div>
                                        <div className="mt-3">
                                            <p className='text-[14px] font-Outfit font-semibold'>Note :-</p>
                                            <div className="ps-3">
                                                <p className='text-[12px] font-Outfit font-semibold opacity-70'>- Charges includes in your fare - Tax charges.</p>
                                                <p className='text-[12px] font-Outfit font-semibold opacity-70'>- Km and timing will be charged from customer
                                                    location.</p>
                                                <p className='text-[12px] font-Outfit font-semibold opacity-70'>- Car shall not be used for local use in (city)after
                                                    completion of oneway duty.</p>
                                                <p className='text-[12px] font-Outfit font-semibold opacity-70'>- in case booking cancelled then inform to us before
                                                    24hrs in then pickup time.</p>
                                                <p className='text-[12px] font-Outfit font-semibold opacity-70'>- This is an estimated cost and may very depending
                                                    upon km/ hrs driven. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <BottomBar />

        </>
    )
}

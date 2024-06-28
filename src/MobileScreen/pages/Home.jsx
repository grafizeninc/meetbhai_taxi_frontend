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


            <AirportBooking activeMainTab={activeMainTab} airportSearchBarActive={airportSearchBarActive}
                setAirportSearchBarActive={setAirportSearchBarActive} localSearchBarActive={localSearchBarActive}
                localCarSelectorActive={localCarSelectorActive} activeWhichLocationTab={activeWhichLocationTab}
                setactiveWhichLocationTab={setactiveWhichLocationTab} activeTab={activeTab} airportCarSelectorActive={airportCarSelectorActive }
                setLocalSearchBarActive={setLocalSearchBarActive} />


            <div className={`${localSearchBarActive ? "" : "hidden"} w-100 px-3 mt-5`} onClick={() => { setLocalSearchBarActive(false), setlocalCarSelectorActive(true)  }}>
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

            <BottomBar />

        </>
    )
}

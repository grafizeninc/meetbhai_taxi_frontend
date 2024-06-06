import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { deleteStateAction, getAllStateAction } from '../../../../redux/actions/state'
import { deleteCategoryAction, getAllCityAction } from '../../../../redux/actions/city'


export default function LocationMaster() {

    const [activeLocationList, setactiveLocationList] = useState("state-list")

    const dataContentState = [
        { id: 1, stateCode: "GJ", stateName: "Gujarat", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 2, stateCode: "KL", stateName: "Kerala", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 3, stateCode: "MH", stateName: "Maharastra", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 4, stateCode: "TN", stateName: "Tamilnadu", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 5, stateCode: "UP", stateName: "Uttar Pradesh", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 6, stateCode: "KN", stateName: "Karnataka", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 7, stateCode: "MP", stateName: "Madhya Pradesh", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 8, stateCode: "DL", stateName: "Delhi", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 9, stateCode: "UT", stateName: "Utrakhand", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
    ]
    const dataContentCity = [
        { id: 1, stateCode: "GJ", stateName: "Gujarat", citycode: "RJT", cityname: "Rajkot", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 2, stateCode: "KL", stateName: "Kerala", citycode: "TRP", cityname: "Tiruvanantpuram", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 3, stateCode: "MH", stateName: "Maharastra", citycode: "PN", cityname: "Pune", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 4, stateCode: "TN", stateName: "Tamilnadu", citycode: "CHE", cityname: "Chennai", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 5, stateCode: "UP", stateName: "Uttar Pradesh", citycode: "LCK", cityname: "Lucknow", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 6, stateCode: "KN", stateName: "Karnataka", citycode: "NMG", cityname: "Mengaluru", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 7, stateCode: "MP", stateName: "Madhya Pradesh", citycode: "BHP", cityname: "Bhopal", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 8, stateCode: "DL", stateName: "Delhi", citycode: "DL", cityname: "Delhi", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 9, stateCode: "UT", stateName: "Utrakhand", citycode: "DHR", cityname: "Dehradun", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", citycode: "JIP", cityname: "Jaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", citycode: "JIP", cityname: "Jaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", citycode: "JIP", cityname: "Jaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", citycode: "JIP", cityname: "Jaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", citycode: "JIP", cityname: "Jaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", citycode: "JIP", cityname: "Jaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", citycode: "JIP", cityname: "Jaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", citycode: "JIP", cityname: "Jaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", citycode: "JIP", cityname: "Jaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", citycode: "JIP", cityname: "Jaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 10, stateCode: "RJ", stateName: "Rajsathan", citycode: "JIP", cityname: "Jaipur", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
    ]
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

    const dispatch = useDispatch();
    const { getAllState } = useSelector((state) => state?.stateState);
    const { getAllCity } = useSelector((state) => state?.cityState);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAllCity, setSelectAllCity] = useState(false);
    const [selectedCityRows, setSelectedCityRows] = useState([]);
    const [filterData, setFilterData] = useState({
        code_or_name: "",
    });

    const [filteredData, setFilteredData] = useState([]);

    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        setSelectAll(checked);
        if (checked) {
            setSelectedRows(getAllState)
        } else {
            setSelectedRows([]);
        }
    };

    const handleItemSelect = (e, item) => {
        const checked = e.target.checked;
        if (checked) {
            setSelectedRows((prevSelectedRows) => [...prevSelectedRows, item]);
        } else {
            setSelectedRows((prevSelectedRows) =>
                prevSelectedRows.filter((row) => row?._id !== item?._id)
            );
        }
    };

    const handleDeleteStateData = () => {
        debugger
        selectedRows?.forEach((item) => {
            dispatch(deleteStateAction(item?._id));
        });
        setSelectedRows([]);
        setSelectAll(false);
        setAddDestinationModal(false)
    }

    const handleSelectAllCity = (e) => {
        const checked = e.target.checked;
        setSelectAllCity(checked);
        if (checked) {
            setSelectedCityRows(getAllCity)

        } else {
            setSelectedCityRows([]);
        }
    };

    const handleCitySelect = (e, item) => {
        const checked = e.target.checked;
        if (checked) {
            setSelectedCityRows((prevSelectedRows) => [...prevSelectedRows, item]);
        } else {
            setSelectedCityRows((prevSelectedRows) =>
                prevSelectedRows.filter((row) => row?._id !== item?._id)
            );
        }
    };

    const handleDeleteStateDataCity = () => {
        selectedCityRows?.forEach((item) => {
            dispatch(deleteCategoryAction(item?._id));
        });
        setSelectedCityRows([]);
        setSelectAllCity(false);
        setAddDestinationModal(false)
    }

    useEffect(() => {
        dispatch(getAllStateAction())
        dispatch(getAllCityAction())
    }, [dispatch])

    return (
        <>
            <div className="w-[80%] mx-auto flex flex-col gap-3 h-100">

                <div className="flex gap-3 items-center">

                    <div onClick={() => { setactiveLocationList("state-list") }} className={`${activeLocationList === "state-list" ? "tx-white bs-blue  border-2 border-blue" : " border-2 border-org tx-org"}  w-fit rounded-md pointer px-5 py-1 flex gap-2 items-center`}>
                        <p className='text-[16px] font-Outfit font-semibold'>State</p>
                    </div>
                    <div onClick={() => { setactiveLocationList("city-list") }} className={`${activeLocationList === "city-list" ? "tx-white bs-blue  border-2 border-blue" : " border-2 border-org tx-org"}  w-fit rounded-md pointer px-5 py-1 flex gap-2 items-center`}>
                        <p className='text-[16px] font-Outfit font-semibold'>City</p>
                    </div>

                    <div className="col flex gap-2 border-2 border-blue rounded-md py- px-3 relative">
                        <img className='w-[clamp(20px,20px,20px)] ' src="../../../public/IMG/loupe.svg" alt="" />
                        <Autocomplete
                            label=""
                            defaultItems={airportSelector}
                            placeholder="Search - Airport or short code"
                            className="col !font-bold !text-[14px] autocompleate-custome"
                        >
                            {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                        </Autocomplete>
                    </div>

                    <div className="w-fit tx- border-2 border-blue rounded-md px-3 min-h-[100%] flex gap-2 items-center">
                        <i className="fa-regular fa-arrow-up-from-bracket text-[18px]"></i>
                    </div>
                    <div className="w-fit tx-mix-org border-2 border-blue rounded-md px-3 min-h-[100%] flex gap-2 items-center">
                        <i className="fa-regular fa-down-to-bracket text-[18px]"></i>
                    </div>
                </div>



                <div className="w-100 h-100 mx-auto overflow-y-scroll scroll-d-none mb-3">


                    {activeLocationList === "state-list" &&
                        <div className="w-[100%] h-100 mx-auto rounded-[14px] border-1 custome-bar border-black overflow-x-hidden">
                            <div className=' box-border w-100'>
                                <div className='flex w-100 sticky top-0 start-0 bs-blue border-black'>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[4%]'>
                                        <input type="checkbox"
                                            id="check-all"
                                            checked={selectAll}
                                            onChange={handleSelectAll}
                                        />

                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[6%]'>
                                        <p className='w-fit text-[15px] font-bold font-Outfit tx-white'>Sr.</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 w-[20%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>State Code</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 w-[40%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>State Name</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[40%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>Data Logs</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[10%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>Actions</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between bs-org'>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[4%]'>
                                            {/* <input type="checkbox" /> */}
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[6%]'>
                                            <p className='w-fit text-[15px] font-bold font-Poppins tx-white bs-org'>11</p>
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[20%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[40%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[40%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex gap-3 items-center justify-center text-center text-[16px] py-1.5 border-t-1 border-black px-3 w-[10%] pointer'>
                                            <p className="text-[15px] font-semibold tx-white bs-org w-[90%] font-Outfit rounded-md">Submit</p>
                                        </div>
                                    </div>
                                    {getAllState?.length > 0 && getAllState.map((item,index) => {
                                        console.log("itemitem",item)
                                        return (
                                            <div className='flex justify-between'>
                                                <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[4%]'>
                                                    <input type="checkbox"
                                                        id={item?._id}
                                                        checked={selectedRows.includes(item)}
                                                        onChange={(e) =>
                                                            handleItemSelect(e, item)
                                                        } />
                                                </div>
                                                <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[6%]'>
                                                    <p className='w-fit text-[15px] font-bold font-Poppins tx-'>{index}</p>
                                                </div>
                                                <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[20%]'>
                                                    <p className='text-[15px] font-medium font-Poppins tx-'>{item.code}</p>
                                                </div>
                                                <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[40%]'>
                                                    <p className='text-[15px] font-medium font-Poppins tx-'>{item.name}</p>
                                                </div>
                                                <div className='flex gap-3 justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[40%]'>
                                                    <div className="flex items-center">
                                                        <p className='text-[13px] font-Poppins font-bold'>Ad.</p>
                                                        <p className='text-[13px] font-medium font-Poppins tx-'>{item.dataLogsAd}</p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <p className='text-[13px] font-Poppins font-bold'>Up.</p>
                                                        <p className='text-[13px] font-medium font-Poppins tx-'>{item.dataLogsUp}</p>
                                                    </div>
                                                </div>
                                                <div className='flex gap-3 items-center justify-center text-center text-[16px] py-1.5 border-t-1 border-black px-3 w-[10%]'>
                                                    <i className="fa-solid fa-pen-to-square pointer"></i>
                                                    <i className="fa-solid fa-trash tx-red pointer" onClick={() =>handleDeleteStateData()}></i>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    }


                    {activeLocationList === "city-list" &&
                        <div className="w-[100%] h-100 mx-auto rounded-[14px] border-1 custome-bar border-black overflow-x-hidden">
                            <div className=' box-border w-100'>
                                <div className='flex w-100 sticky top-0 start-0 bs-blue border-black'>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[4%]'>
                                        <input type="checkbox"
                                        id="check-all"
                                            checked={selectAllCity}
                                            onChange={handleSelectAllCity} />
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[6%]'>
                                        <p className='w-fit text-[15px] font-bold font-Outfit tx-white'>Sr.</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 min-w-[10%] max-w-[10%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>State Code</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 w-[20%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>State Name</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 min-w-[10%] max-w-[10%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>City Code</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 w-[20%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>City Name</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[30%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>Data Logs</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[10%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>Actions</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between bs-org'>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[4%]'>
                                            {/* <input type="checkbox" /> */}
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[6%]'>
                                            <p className='w-fit text-[15px] font-bold font-Poppins tx-white bs-org'>11</p>
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[10%] max-w-[10%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[20%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[10%] max-w-[10%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[20%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[30%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex gap-3 items-center justify-center text-center text-[16px] py-1.5 border-t-1 border-black px-3 w-[10%]'>
                                            <p className="text-[15px] font-semibold tx-white bs-org w-[90%] font-Outfit rounded-md">Submit</p>
                                        </div>
                                    </div>
                                    {getAllCity?.length > 0 &&  getAllCity.map((item,index) => (
                                        <div className='flex justify-between'>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[4%]'>
                                                <input type="checkbox"
                                                  id={item?._id}
                                                        checked={selectedCityRows.includes(item)}
                                                        onChange={(e) =>
                                                            handleCitySelect(e, item)
                                                        } />
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[6%]'>
                                                <p className='w-fit text-[15px] font-bold font-Poppins tx-'>{index}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[10%] max-w-[10%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.stateCode || "-"}</p>
                                            </div>
                                            <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[20%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.state_name}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[10%] max-w-[10%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.code}</p>
                                            </div>
                                            <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[20%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.name}</p>
                                            </div>
                                            <div className='flex gap-3 justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[30%]'>
                                                <div className="flex items-center">
                                                    <p className='text-[13px] font-Poppins font-bold'>Ad.</p>
                                                    <p className='text-[13px] font-medium font-Poppins tx-'>{item.dataLogsAd}</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className='text-[13px] font-Poppins font-bold'>Up.</p>
                                                    <p className='text-[13px] font-medium font-Poppins tx-'>{item.dataLogsUp}</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-3 items-center justify-center text-center text-[16px] py-1.5 border-t-1 border-black px-3 w-[10%]'>
                                                <i className="fa-solid fa-pen-to-square pointer"></i>
                                                <i className="fa-solid fa-trash tx-red pointer" onClick={() =>handleDeleteStateDataCity()}></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

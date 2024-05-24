import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React, { useState } from 'react';


export default function VehicleMaster() {

    const [activeVehicleTab, setActiveVehicleTab] = useState("vehicle-category");

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

    const dataContentVehicleCategory = [
        { id: 1, categoryname: "SUV", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 2, categoryname: "Sedan", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 3, categoryname: "Hatchback", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 4, categoryname: "Premium SUV", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
    ]

    const dataContentVehicle = [
        { id: 1, vehhiclename: "Lodge", categoryname: "SUV", seat: "6+1", fueltype: "CNG", ac: "AC", waterBottle: "Yes", carrier: "Yes", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 2, vehhiclename: "Swift Dezire", categoryname: "Sedan", seat: "6+1", fueltype: "Petrol", ac: "AC", waterBottle: "Yes", carrier: "Yes", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 3, vehhiclename: "120", categoryname: "Hatchback", seat: "6+1", fueltype: "Deasel", ac: "AC", waterBottle: "Yes", carrier: "Yes", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 4, vehhiclename: "Innova", categoryname: "Premium SUV", seat: "6+1", fueltype: "CNG", ac: "AC", waterBottle: "Yes", carrier: "Yes", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 1, vehhiclename: "Lodge", categoryname: "SUV", seat: "6+1", fueltype: "CNG", ac: "AC", waterBottle: "Yes", carrier: "Yes", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 2, vehhiclename: "Swift Dezire", categoryname: "Sedan", seat: "6+1", fueltype: "Petrol", ac: "AC", waterBottle: "Yes", carrier: "Yes", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 3, vehhiclename: "120", categoryname: "Hatchback", seat: "6+1", fueltype: "Deasel", ac: "AC", waterBottle: "Yes", carrier: "Yes", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
        { id: 4, vehhiclename: "Innova", categoryname: "Premium SUV", seat: "6+1", fueltype: "CNG", ac: "AC", waterBottle: "Yes", carrier: "Yes", uploadalt: "Upload Image", dataLogsAd: "11/10/2023 - 09:10 AM", dataLogsUp: "10/10/2023 - 09:20 AM", },
    ]


    return (
        <>
            <div className="w-[80%] mx-auto flex flex-col gap-3 h-100">
                <div className="flex gap-3 items-center">

                    <div onClick={() => { setActiveVehicleTab("vehicle-category") }} className={`${activeVehicleTab === "vehicle-category" ? "tx-white bs-blue  border-2 border-blue" : " border-2 border-org tx-org"}  w-fit rounded-md pointer px-4 py-1 flex gap-2 items-center`}>
                        <p className='text-[16px] font-Outfit font-semibold'>Vehicle Category</p>
                    </div>
                    <div onClick={() => { setActiveVehicleTab("vehicle") }} className={`${activeVehicleTab === "vehicle" ? "tx-white bs-blue  border-2 border-blue" : " border-2 border-org tx-org"}  w-fit rounded-md pointer px-4 py-1 flex gap-2 items-center`}>
                        <p className='text-[16px] font-Outfit font-semibold'>Vehicle Details</p>
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
                {activeVehicleTab === "vehicle-category" &&
                    <div className="w-100 h-100 mx-auto overflow-y-scroll scroll-d-none mb-3">
                        <div className="w-[100%] h-100 mx-auto rounded-[14px] border-1 custome-bar border-black overflow-x-hidden">
                            <div className=' box-border w-100'>
                                <div className='flex w-100 sticky top-0 start-0 bs-blue border-black'>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[4%]'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[6%]'>
                                        <p className='w-fit text-[15px] font-bold font-Outfit tx-white'>Sr.No</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 w-[40%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>Category name</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[20%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>Upload Image</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 w-[30%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>Date Logs</p>
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
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[40%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[20%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[30%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex gap-3 items-center justify-center text-center text-[16px] py-1.5 border-t-1 border-black px-3 w-[10%] pointer'>
                                            <p className="text-[15px] font-semibold tx-white bs-org w-[90%] font-Outfit rounded-md">Submit</p>
                                        </div>
                                    </div>
                                    {dataContentVehicleCategory.map((item) => (
                                        <div className='flex justify-between'>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[4%]'>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[6%]'>
                                                <p className='w-fit text-[15px] font-bold font-Poppins tx-'>{item.id}</p>
                                            </div>
                                            <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[40%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.categoryname}</p>
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black w-[20%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.uploadalt}</p>
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
                                            <div className='flex gap-4 items-center justify-center text-center py-1.5 border-t-1 border-black px-3 w-[10%]'>
                                                <i className="fa-solid fa-pen-to-square pointer"></i>
                                                <i className="fa-solid fa-trash tx-red pointer"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {activeVehicleTab === "vehicle" &&
                    <div className="w-100 h-100 mx-auto overflow-y-scroll scroll-d-none mb-3">
                        <div className="w-[100%] h-100 mx-auto rounded-[14px] border-1 custome-bar border-black overflow-x-hidden">
                            <div className=' box-border w-100'>
                                <div className='flex w-100 sticky top-0 start-0 bs-blue border-black'>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[3%] max-w-[3%]'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[4%] max-w-[4%]'>
                                        <p className='w-fit text-[15px] font-bold font-Outfit tx-white'>Sr.No</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[17%] max-w-[17%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>Select Category</p>
                                    </div>
                                    <div className='flex justify-start text-center py-2 border-r-1 border-black px-3 min-w-[18%] max-w-[18%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>Vehicle Name</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[6%] max-w-[6%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>Seat</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[8%] max-w-[8%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>Fuel Type</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[8%] max-w-[8%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>AC/Non AC</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[8%] max-w-[8%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>Water Bottel</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[8%] max-w-[8%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>Carrier</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[10%] max-w-[10%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>Upload Image</p>
                                    </div>
                                    <div className='flex justify-center text-center py-2 border-r-1 border-black px-3 min-w-[10%] max-w-[10%]'>
                                        <p className='text-[15px] font-bold font-Outfit tx-white'>Actions</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between bs-org'>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[3%] max-w-[3%]'>
                                            {/* <input type="checkbox" /> */}
                                        </div>
                                        <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[4%] max-w-[4%]'>
                                            <p className='w-fit text-[15px] font-bold font-Poppins tx-white bs-org'>11</p>
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black  min-w-[17%] max-w-[17%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black  min-w-[18%] max-w-[18%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[6%] max-w-[6%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[8%] max-w-[8%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[8%] max-w-[8%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[8%] max-w-[8%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[8%] max-w-[8%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div> 
                                        <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[10%] max-w-[10%]'>
                                            <input className='text-[15px] min-w-[100%] max-w-[100%] border-b-[0px] border-blue font-medium font-Poppins tx-white bs-org' type="text" />
                                        </div>
                                        <div className='flex gap-3 items-center justify-center text-center text-[16px] py-1.5 border-t-1 border-black px-3 min-w-[10%] max-w-[10%] pointer'>
                                            <p className="text-[15px] font-semibold tx-white bs-org w-[90%] font-Outfit rounded-md">Submit</p>
                                        </div>
                                    </div>
                                    {dataContentVehicle.map((item) => (
                                        <div className='flex justify-between'>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[3%] max-w-[3%]'>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[4%] max-w-[4%]'>
                                                <p className='w-fit text-[15px] font-bold font-Poppins tx-'>{item.id}</p>
                                            </div>
                                            <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[17%] max-w-[17%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.categoryname}</p>
                                            </div>
                                            <div className='flex justify-strat text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[18%] max-w-[18%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.vehhiclename}</p>
                                            </div> 
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[6%] max-w-[6%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.seat}</p>
                                            </div> 
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[8%] max-w-[8%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.fueltype}</p>
                                            </div> 
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[8%] max-w-[8%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.ac}</p>
                                            </div> 
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[8%] max-w-[8%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.waterBottle}</p>
                                            </div> 
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[8%] max-w-[8%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.carrier}</p>
                                            </div> 
                                            <div className='flex justify-center text-center px-3 border-r-1 py-1.5 border-t-1 border-black min-w-[10%] max-w-[10%]'>
                                                <p className='text-[15px] font-medium font-Poppins tx-'>{item.uploadalt}</p>
                                            </div> 
                                            <div className='flex gap-4 items-center justify-center text-center py-1.5 border-t-1 border-black px-3 min-w-[10%] max-w-[10%]'>
                                                <i className="fa-solid fa-pen-to-square pointer"></i>
                                                <i className="fa-solid fa-trash tx-red pointer"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

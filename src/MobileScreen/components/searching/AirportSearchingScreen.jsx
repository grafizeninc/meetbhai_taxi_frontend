import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import React from 'react';

export default function AirportSearchingScreen({ airportSelector, destinationSelector, setAirportSearchBarActive, setAirportCarSelectorActive }) {

    return (
        <>
            {/* <div className="h-[calc(100vh-70px)] flex flex-col justify-between"> */}
                <div className={`col w-100 h-fit mt-4 px-3 flex flex-col gap-5`}>
                    <div className="w-100 flex !h-fit gap-2 border-1 border-org rounded-md bs-white relative">
                        <Autocomplete
                            label=""
                            defaultItems={airportSelector}
                            placeholder="From which Airport?"
                            className="col w-100 !h-fit !font-bold py-1 !text-[14px] autocompleate-custome"
                        >
                            {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                        </Autocomplete>
                    </div>
                    <div className="w-100 flex !h-fit gap-2 border-1 border-org rounded-md bs-white relative">
                        <Autocomplete
                            label=""
                            defaultItems={destinationSelector}
                            placeholder="Select your Destination"
                            className="col w-100 !h-fit !font-bold py-1 !text-[14px] autocompleate-custome"
                        >
                            {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                        </Autocomplete>
                    </div>
                </div>
                {/* <div className={`w-100 px-3 mt-4`} onClick={() => { setAirportSearchBarActive(false), setAirportCarSelectorActive(true) }}>
                    <div className="w-100 bs-blue text-center py-2.5 rounded-2">
                        <p className='text-[15px] font-semibold tx-white'>Let's YBGO!</p>
                    </div>
                </div>
            </div> */}
        </>
    )
}

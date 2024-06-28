import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import React from 'react';

export default function LocalSearchingScreen({ packageSelector, citySelector, setlocalCarSelectorActive, setLocalSearchBarActive, }) {

    return (
        <>
            {/* <div className="h-[calc(100vh-70px)] flex flex-col justify-between"> */}
                <div className={`bg-[] col w-100 mt-4 px-3 flex flex-col gap-5`}>
                    <div className="col flex gap-2 border-1 border-org rounded-md bs-white relative">
                        <Autocomplete
                            label=""
                            defaultItems={citySelector}
                            placeholder="Select your City"
                            className="col w-100 !font-bold py-1 !text-[14px] autocompleate-custome"
                        >
                            {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
                        </Autocomplete>
                    </div>
                    <div className="col flex gap-2 border-1 border-org rounded-md bs-white relative">
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
                {/* <div className={`w-100 px-3 mt-4`} onClick={() => { setLocalSearchBarActive(false), setlocalCarSelectorActive(true) }}>
                    <div className="w-100 bs-blue text-center py-2.5 rounded-2">
                        <p className='text-[15px] font-semibold tx-white'>Let's YBGO!</p>
                    </div>
                </div>
            </div> */}
        </>
    )
}

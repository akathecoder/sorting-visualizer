import React from 'react';
import ElementHeading from './ElementHeading';

const ArraySize: React.FC = () => {
    return (
        <div>
            <ElementHeading>Array Size</ElementHeading>
            <div className="flex gap-2">
                <input
                    type="number"
                    name="arraySize"
                    id="array-size"
                    min="1"
                    max="100"
                    className="rounded-sm px-4 py-3 my-1 focus:outline-none bg-gray-100 w-full"
                    placeholder="Enter Array Size [1-100]"
                />
                <input
                    type="button"
                    value="Random"
                    name="arraySizeRandomBtn"
                    className="text-center text-white bg-gray-800 p-3 my-1 duration-300 rounded-sm hover:bg-black"
                />
            </div>
        </div>
    );
};

export default ArraySize;

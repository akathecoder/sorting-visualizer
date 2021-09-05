import React from 'react';
import ElementHeading from './ElementHeading';

interface ArraySizeProps {
    arraySize: number;
    setArraySize: React.Dispatch<React.SetStateAction<number>>;
}

const ArraySize: React.FC<ArraySizeProps> = ({ arraySize, setArraySize }: ArraySizeProps) => {
    const handleInputBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value && setArraySize(Number(e.target.value));
    };

    const handleRandomClick = () => {
        setArraySize(Math.floor(Math.random() * 100 + 1));
    };

    return (
        <div>
            <ElementHeading>Array Size</ElementHeading>
            <div className="flex gap-2">
                <input
                    type="number"
                    name="arraySize"
                    id="array-size"
                    min="2"
                    max="100"
                    className="rounded-sm px-4 py-3 my-1 focus:outline-none bg-gray-100 w-full"
                    placeholder="Enter Array Size [1-100]"
                    value={arraySize === 0 ? '' : arraySize}
                    onChange={handleInputBoxChange}
                />
                <input
                    type="button"
                    value="Random"
                    name="arraySizeRandomBtn"
                    className="text-center text-white bg-gray-800 p-3 my-1 duration-300 rounded-sm hover:bg-black cursor-pointer"
                    onClick={handleRandomClick}
                />
            </div>
        </div>
    );
};

export default ArraySize;

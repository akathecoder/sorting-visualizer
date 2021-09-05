import React from 'react';

const SortButton: React.FC = () => {
    return (
        <div>
            <input
                type="button"
                value="Sort"
                className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full"
            />
        </div>
    );
};

export default SortButton;

import React from 'react';

interface SortButtonProps {
    disabled: boolean;
    onSortButtonClicked: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({
    disabled,
    onSortButtonClicked: handleSortButtonClicked,
}: SortButtonProps) => {
    return (
        <div>
            <input
                type="button"
                value="Sort"
                className={`block text-center p-3 duration-300 rounded-sm w-full text-white bg-gray-800 ${
                    disabled ? 'cursor-not-allowed ' : ' hover:bg-black cursor-pointer '
                }`}
                disabled={disabled}
                onClick={handleSortButtonClicked}
            />
        </div>
    );
};

export default SortButton;

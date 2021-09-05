import React from 'react';
import ElementHeading from './ElementHeading';

interface SortingAlgorithmProps {
    setSortingAlgorithm: React.Dispatch<React.SetStateAction<string>>;
}

const SortingAlgorithm: React.FC<SortingAlgorithmProps> = ({ setSortingAlgorithm }: SortingAlgorithmProps) => {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSortingAlgorithm(e.target.value);
    };

    return (
        <div>
            <ElementHeading>Sorting Algorithm</ElementHeading>

            <RadioButton name="sortingAlgorithmRadioGroup" id="bubbleSort" onRadioChange={handleRadioChange}>
                Bubble Sort
            </RadioButton>

            <RadioButton name="sortingAlgorithmRadioGroup" id="insertionSort" onRadioChange={handleRadioChange}>
                Insertion Sort
            </RadioButton>

            <RadioButton name="sortingAlgorithmRadioGroup" id="mergeSort" onRadioChange={handleRadioChange}>
                Merge Sort
            </RadioButton>
        </div>
    );
};

interface RadioButtonProps {
    name: string;
    id: string;
    onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children: React.ReactNode;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
    id,
    name,
    onRadioChange: handleRadioChange,
    children,
}: RadioButtonProps) => {
    return (
        <>
            <input type="radio" name={name} id={id} value={id} className="my-2" onChange={handleRadioChange} />
            <label htmlFor={id} className="ml-2">
                {children}
            </label>
            <br />
        </>
    );
};

export default SortingAlgorithm;

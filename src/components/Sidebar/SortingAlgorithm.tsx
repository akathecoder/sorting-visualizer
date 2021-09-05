import React from 'react';
import ElementHeading from './ElementHeading';

const SortingAlgorithm: React.FC = () => {
    return (
        <div>
            <ElementHeading>Sorting Algorithm</ElementHeading>

            <RadioButton name="sortingAlgorithmRadioGroup" id="bubbleSort">
                Bubble Sort
            </RadioButton>

            <RadioButton name="sortingAlgorithmRadioGroup" id="insertionSort">
                Insertion Sort
            </RadioButton>

            <RadioButton name="sortingAlgorithmRadioGroup" id="mergeSort">
                Merge Sort
            </RadioButton>
        </div>
    );
};

interface RadioButtonProps {
    name: string;
    id: string;
    children: React.ReactNode;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ id, name, children }: RadioButtonProps) => {
    return (
        <>
            <input type="radio" name={name} id={id} className="my-2" />
            <label htmlFor={id} className="ml-2">
                {children}
            </label>
            <br />
        </>
    );
};

export default SortingAlgorithm;

import React from 'react';

const SortingAlgorithm: React.FC = () => {
    return (
        <div>
            <h2>Sorting Algorithm</h2>
            <input type="radio" name="sortingAlgorithmRadioGroup" id="bubbleSort" />
            <label htmlFor="bubbleSort">Bubble Sort </label>
            <br />

            <input type="radio" name="sortingAlgorithmRadioGroup" id="insertionSort" />
            <label htmlFor="insertionSort">Insertion Sort </label>
            <br />

            <input type="radio" name="sortingAlgorithmRadioGroup" id="mergeSort" />
            <label htmlFor="mergeSort">Merge Sort </label>
            <br />
        </div>
    );
};

export default SortingAlgorithm;

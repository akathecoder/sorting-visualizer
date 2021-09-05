import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <nav className="h-full w-sidebar fixed z-10 left-0 top-header bg-accent-8 overflow-hidden p-5">
            <div>
                <h2>Array Size</h2>
                <input type="number" name="arraySize" id="array-size" min="1" max="100" defaultValue="5" />
                <input type="button" value="Random" name="arraySizeRandomBtn" />
            </div>

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
            </div>

            <div>
                <input type="button" value="Sort" />
            </div>
        </nav>
    );
};

export default Sidebar;

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
    const [arraySize, setArraySize] = useState<number>(0);
    const [sortingAlgorithm, setSortingAlgorithm] = useState<string>('');

    const handleSortButtonClicked = () => {
        alert('Sort Button Clicked');
    };

    return (
        <>
            <header>
                <Navbar />
            </header>

            <div className="flex">
                <Sidebar
                    arraySize={arraySize}
                    setArraySize={setArraySize}
                    sortingAlgorithm={sortingAlgorithm}
                    setSortingAlgorithm={setSortingAlgorithm}
                    onSortButtonClicked={handleSortButtonClicked}
                />
                <main className="ml-sidebar mt-header bg-accent-2 p-4">
                    {`Array Size = ${arraySize} \nSorting Algorithm = ${sortingAlgorithm}`}
                </main>
            </div>
        </>
    );
};

export default App;

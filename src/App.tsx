import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import generateArray from './components/Graph/GenerateArray';
import useWindowDimensions, { WindowDimensionsTypes } from './components/Graph/WindowDimensions';

const App: React.FC = () => {
    const [arraySize, setArraySize] = useState<number>(0);
    const [sortingAlgorithm, setSortingAlgorithm] = useState<string>('');
    const windowDimensions = useWindowDimensions();

    const ref = useRef<HTMLElement>(null);

    const [mainDimensions, setMainDimensions] = useState<WindowDimensionsTypes>(
        ref.current
            ? { width: ref.current.clientWidth - 16 * 2, height: ref.current.clientHeight - 16 * 2 }
            : { width: 0, height: 0 },
    );

    useEffect(() => {
        ref.current &&
            setMainDimensions({ width: ref.current.clientWidth - 16 * 2, height: ref.current.clientHeight - 16 * 2 });
    }, [windowDimensions]);

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
                <main className="ml-sidebar mt-header bg-accent-2 p-4 w-full" ref={ref}>
                    {`Array Size = ${arraySize} \nSorting Algorithm = ${sortingAlgorithm}`}
                    <br />
                    {generateArray(arraySize).map((value) => value + ', ')}
                    <br />
                    {screen.availWidth}
                    <br />
                    {mainDimensions.height + ', ' + mainDimensions.width}
                </main>
            </div>
        </>
    );
};

export default App;

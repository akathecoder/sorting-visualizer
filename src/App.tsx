import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { generateArray, getGraphBarPixelHeight, getGraphBarPixelWidth } from './components/Graph/ArrayGraphFunctions';
import useWindowDimensions, { WindowDimensionsTypes } from './components/Graph/WindowDimensions';

const App: React.FC = () => {
    const [arraySize, setArraySize] = useState<number>(0);
    const [sortingAlgorithm, setSortingAlgorithm] = useState<string>('');
    const [array, setArray] = useState<Array<number>>([]);
    const windowDimensions = useWindowDimensions();

    const mainRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLElement>(null);

    const [mainDimensions, setMainDimensions] = useState<WindowDimensionsTypes>(
        mainRef.current && headerRef.current
            ? {
                  width: mainRef.current.clientWidth - 16 * 4,
                  height: windowDimensions.height - headerRef.current.clientHeight - 16 * 6,
              }
            : { width: 0, height: 0 },
    );

    useEffect(() => {
        mainRef.current &&
            headerRef.current &&
            setMainDimensions({
                width: mainRef.current.clientWidth - 16 * 4,
                height: windowDimensions.height - headerRef.current.clientHeight - 16 * 6,
            });
    }, [windowDimensions]);

    useEffect(() => {
        setArray(generateArray(arraySize));
    }, [arraySize]);

    const handleSortButtonClicked = () => {
        // TODO: Implement Array Sorting
        alert('Clicked Sort');
    };

    return (
        <>
            <header ref={headerRef}>
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
                <main
                    className="ml-sidebar mt-header bg-accent-2 p-4 w-full flex justify-center"
                    ref={mainRef}
                    style={{
                        gap: getGraphBarPixelWidth(mainDimensions.width, array),
                    }}
                >
                    {array.map((value, index) => {
                        return (
                            <div
                                key={index}
                                className={'bg-accent-10 mt-auto '}
                                style={{
                                    minHeight: getGraphBarPixelHeight(mainDimensions.height, array) * value,
                                    maxHeight: getGraphBarPixelHeight(mainDimensions.height, array) * value,
                                    minWidth: getGraphBarPixelWidth(mainDimensions.width, array),
                                    maxWidth: getGraphBarPixelWidth(mainDimensions.width, array),
                                }}
                            />
                        );
                    })}
                </main>
            </div>
        </>
    );
};

export default App;

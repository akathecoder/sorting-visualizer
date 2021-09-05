import React from 'react';
import ArraySize from './ArraySize';
import SortButton from './SortButton';
import SortingAlgorithm from './SortingAlgorithm';

interface SidebarProps {
    arraySize: number;
    setArraySize: React.Dispatch<React.SetStateAction<number>>;
    sortingAlgorithm: string;
    setSortingAlgorithm: React.Dispatch<React.SetStateAction<string>>;
    onSortButtonClicked: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    arraySize,
    setArraySize,
    sortingAlgorithm,
    setSortingAlgorithm,
    onSortButtonClicked: handleSortButtonClicked,
}: SidebarProps) => {
    const isSortButtonDisabled = (): boolean => {
        return arraySize > 0 && sortingAlgorithm ? false : true;
    };

    return (
        <nav className="h-full w-sidebar fixed z-10 left-0 top-header bg-accent-8 overflow-hidden p-5 flex flex-col gap-7">
            <ArraySize arraySize={arraySize} setArraySize={setArraySize} />
            <SortingAlgorithm setSortingAlgorithm={setSortingAlgorithm} />
            <SortButton disabled={isSortButtonDisabled()} onSortButtonClicked={handleSortButtonClicked} />
        </nav>
    );
};

export default Sidebar;

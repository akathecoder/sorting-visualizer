import React from 'react';
import ArraySize from './ArraySize';
import SortButton from './SortButton';
import SortingAlgorithm from './SortingAlgorithm';

const Sidebar: React.FC = () => {
    return (
        <nav className="h-full w-sidebar fixed z-10 left-0 top-header bg-accent-8 overflow-hidden p-5">
            <ArraySize />
            <SortingAlgorithm />
            <SortButton />
        </nav>
    );
};

export default Sidebar;

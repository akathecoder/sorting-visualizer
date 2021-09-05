import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="bg-accent-3 p-5 fixed h-header w-full z-20 left-0 top-0 shadow-xl">
            <h1 className="text-xl font-medium">Sorting Visualizer</h1>
        </div>
    );
};

export default Navbar;

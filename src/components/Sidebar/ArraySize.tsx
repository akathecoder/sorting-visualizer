import React from 'react';

const ArraySize: React.FC = () => {
    return (
        <div>
            <h2>Array Size</h2>
            <input type="number" name="arraySize" id="array-size" min="1" max="100" defaultValue="5" />
            <input type="button" value="Random" name="arraySizeRandomBtn" />
        </div>
    );
};

export default ArraySize;

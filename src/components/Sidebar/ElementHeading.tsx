import React from 'react';

interface ElementHeadingProps {
    children: React.ReactNode;
}

const ElementHeading: React.FC<ElementHeadingProps> = ({ children }: ElementHeadingProps) => {
    return <h2 className="text-lg font-normal mb-1">{children}</h2>;
};

export default ElementHeading;

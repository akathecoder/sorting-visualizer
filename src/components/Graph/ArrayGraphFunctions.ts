export const generateArray = (size: number, min = 2, max = 100): Array<number> => {
    const arr: Array<number> = [];

    for (let index = 0; index < size; index++) {
        arr.push(Math.floor(Math.random() * max + min));
    }

    return arr;
};

export const getGraphBarPixelHeight = (availHeight: number, array: Array<number>): number => {
    let maxArrayValue = array[0];
    array.forEach((value) => {
        if (value > maxArrayValue) {
            maxArrayValue = value;
        }
    });

    return availHeight / maxArrayValue;
};

export const getGraphBarPixelWidth = (availWidth: number, array: Array<number>): number => {
    return Math.floor(availWidth / (array.length * 2 - 1));
};

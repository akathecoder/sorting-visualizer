const generateArray = (size: number, min = 1, max = 100): Array<number> => {
    const arr: Array<number> = [];

    for (let index = 0; index < size; index++) {
        arr.push(Math.floor(Math.random() * max + min));
    }

    return arr;
};

export default generateArray;

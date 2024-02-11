function sorting(array) {
    array.sort((a, b) => {
        return a - b;
    })

    let newArray = [];

    while (array.length != 0) {
        newArray.push(array[array.length - 1]);
        array.pop();
        newArray.push(array[0]);
        array.shift();
    }

    console.log(newArray.join(' '));
}

sorting([34, 2, 32, 45, 690, 6, 7, 19, 32, 47]);
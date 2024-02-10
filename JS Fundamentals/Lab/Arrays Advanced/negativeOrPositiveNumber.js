function negativeOrPositiveNumber(array) {
    let newArray = [];

    array.forEach(x => {
        if (x < 0) {
            newArray.unshift(x)
        } else {
            newArray.push(x);
        }
    });

    newArray.map(x => console.log(x));
}

negativeOrPositiveNumber(['7', '-2', '8', '9']);
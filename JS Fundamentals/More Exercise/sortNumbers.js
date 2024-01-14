function sort(firstNumber, secondNumber, thirdNumber) {
    let array = [firstNumber, secondNumber, thirdNumber];

    array.sort((a, b) => {
        return b - a;
    })

    array.map(n => console.log(n));
}

sort(-2, 1, 3);
function oddNumbersSum(end) {
    let sum = 0;

    for (let i = 1; i <= end * 2; i++) {
        if (i % 2 === 1) {
            console.log(i);
            sum += i;
        }
    }

    console.log(`Sum: ${sum}`);
}

oddNumbersSum(5);
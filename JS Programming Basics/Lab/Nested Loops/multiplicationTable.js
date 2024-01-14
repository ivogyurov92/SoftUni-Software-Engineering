function multiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        let firstMultiplier = i;

        for (let j = 1; j <= 10; j++) {
            let secondMultiplier = j;
            let result = firstMultiplier * secondMultiplier;

            console.log(`${firstMultiplier} * ${secondMultiplier} = ${result}`);
        }
    }
}

multiplicationTable();
function multiplicationTable(input) {
    let number = Number(input[0]);

    for (let index = 1; index <= 10; index++) {
        let result = number * index;
        console.log(`${index} * ${number} = ${result}`);
    }
}

multiplicationTable(["5"]);
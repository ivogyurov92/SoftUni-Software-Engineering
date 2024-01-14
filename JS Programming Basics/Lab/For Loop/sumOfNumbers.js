function sumOfNumbers(input) {
    let word = input[0];
    let result = 0;

    for (let index = 0; index < word.length; index++) {
        let character = word[index];
        result += Number(character);
    }

    console.log(`The sum of the digits is:${result}`);
}

sumOfNumbers(["1234"]);
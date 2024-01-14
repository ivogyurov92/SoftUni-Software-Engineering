function triangleOfNumbers(number) {
    for (let i = 1; i <= number; i++) {
        console.log(`${i.toString()} `.repeat(i));
    }
} 

triangleOfNumbers(3);
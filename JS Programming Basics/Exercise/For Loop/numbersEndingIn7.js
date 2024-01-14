function numbersEndingIn7() {
    for (let number = 7; number <= 997; number += 10) {
        if (number % 10 === 7) {
            console.log(number);
        }       
    }
}

numbersEndingIn7();
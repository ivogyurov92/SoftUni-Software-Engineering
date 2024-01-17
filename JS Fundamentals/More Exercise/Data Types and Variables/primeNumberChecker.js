function primeNumberChecker(number) {
    let counter = 0;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            counter++;
            
            break;
        }        
    }

    console.log(counter ? false : true);
}

primeNumberChecker(81);
function evenPowerOfTwo(input) {
    let end = Number(input[0]);

    for (let index = 0; index <= end; index += 2) {
        console.log(Math.pow(2, index));      
    }
}

evenPowerOfTwo(["6"]);
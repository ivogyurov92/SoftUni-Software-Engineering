function maxNumber(input) {
    let index = 0;
    let command = input[index];

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (command != 'Stop') {
        command = Number(input[index]);

        if (command > maxNumber) {
            maxNumber = command;
        }

        index++;
        command = input[index];
    }

    console.log(maxNumber);
}

maxNumber(["100", "99", "80", "70", "Stop"]);
function minNumber(input) {
    let index = 0;
    let command = input[index];

    let minNumber = Number.MAX_SAFE_INTEGER;

    while (command != 'Stop') {
        command = Number(input[index]);

        if (command < minNumber) {
            minNumber = command;
        }

        index++;
        command = input[index];
    }

    console.log(minNumber);
}

minNumber(["100", "99", "80", "70", "Stop"]);
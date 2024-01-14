function traveling(input) {
    let index = 0;

    while (true) {
        let destination = input[index];

        if (destination === 'End') {
            break;
        }

        index++;
        let sum = 0;
        let budgetNeeded = Number(input[index]);

        while (budgetNeeded > sum) {
            index++;
            command = Number(input[index]);
            sum += command;
        }

        index++;
        console.log(`Going to ${destination}!`);
    }
}

traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);
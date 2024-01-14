function accountBalance(input) {
    let index = 0;
    let command = input[index];

    let sum = 0;

    while (command != 'NoMoreMoney') {
        command = Number(input[index]);

        if (command < 0) {
            console.log('Invalid operation!');
            break;
        }

        sum += command
        console.log(`Increase: ${command.toFixed(2)}`);

        index++;
        command = input[index];
    }

    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"]);
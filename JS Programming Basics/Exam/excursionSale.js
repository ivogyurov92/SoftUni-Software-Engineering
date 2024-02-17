function excursionSale(input) {
    let seaHolidays = Number(input[0]);
    let mountainHolidays = Number(input[1]);
    let profit = 0;
    let index = 2;
    let command = input[index];

    while (command != 'Stop') {
        let package = command;

        switch (package) {
            case 'sea':
                if (seaHolidays) {
                    seaHolidays--;
                    profit += 680;
                }

                break;
            case 'mountain':
                if (mountainHolidays) {
                    mountainHolidays--;
                    profit += 499;
                }

                break;
        }

        if (!seaHolidays && !mountainHolidays) {
            break;
        }

        index++;
        command = input[index];
    }

    if (!seaHolidays && !mountainHolidays) {
        console.log('Good job! Everything is sold.');
    }

    console.log(`Profit: ${profit} leva.`);
}

excursionSale(["6", "3", "sea", "mountain", "mountain", "mountain", "sea", "Stop"]);
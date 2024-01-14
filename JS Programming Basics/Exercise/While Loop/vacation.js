function vacation(input) {
    let moneyForVacation = Number(input[0]);
    let currentMoney = Number(input[1]);
    let spendCount = 0;
    let days = 0;
    let index = 2;
    let action = input[index];

    while (currentMoney < moneyForVacation) {
        days++;
        let money = Number(input[index + 1]);

        if (action === 'spend') {
            spendCount++;

            if (money >= currentMoney) {
                currentMoney = 0;
            } else {
                currentMoney -= money;
            }

            if (spendCount === 5) {
                console.log(`You can't save the money.`);
                console.log(`${days}`);
            }
        } else {
            spendCount = 0;
            currentMoney += money;
        }

        if(currentMoney >= moneyForVacation) {
            console.log(`You saved the money for ${days} days.`);

            return;
        }

        index += 2;
        action = input[index];
    }
}

vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
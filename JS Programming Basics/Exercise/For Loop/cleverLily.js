function moneyCalculator(input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);
    let money = 0;
    let prize = 10;
    let toysCount = 0;

    for (let index = 1; index <= age; index++) {

        if (index % 2 === 0) {
            money += prize - 1;

            prize += 10;
        } else {
            toysCount++;
        }
    }

    let moneyFromToys = toysCount * pricePerToy;

    let totalMoney = money + moneyFromToys;

    if (totalMoney >= washerPrice) {
        let moneyLeft = totalMoney - washerPrice;

        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washerPrice - totalMoney;

        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}

moneyCalculator(["21", "1570.98", "3"]);
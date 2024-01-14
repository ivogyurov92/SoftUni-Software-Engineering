function flowersPrice(input) {
    let flower = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch (flower) {
        case 'Roses':
            price = flowersCount * 5;

            if (flowersCount > 80) {
                price *= 0.9;
            }

            break;
        case 'Dahlias':
            price = flowersCount * 3.8;

            if (flowersCount > 90) {
                price *= 0.85;
            }

            break;
        case 'Tulips':
            price = flowersCount * 2.8;

            if (flowersCount > 80) {
                price *= 0.85;
            }

            break;
        case 'Narcissus':
            price = flowersCount * 3;

            if (flowersCount < 120) {
                price *= 1.15;
            }

            break;
        case 'Gladiolus':
            price = flowersCount * 2.5;

            if (flowersCount < 80) {
                price *= 1.2;
            }

            break;
    }

    if (budget >= price) {
        let moneyLeft = budget - price;

        console.log(`Hey, you have a great garden with ${flowersCount} ${flower} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = price - budget;

        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}

flowersPrice(["Roses", "55", "250"]);
function shopping(input) {
    let budget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoCardsPrice = videoCardsCount * 250;
    let processorsPrice = processorsCount * (videoCardsPrice * 0.35);
    let ramPrice = ramCount * (videoCardsPrice * 0.1);

    let totalPrice = videoCardsPrice + processorsPrice + ramPrice;

    if(videoCardsCount > processorsCount) {
        totalPrice *= 0.85;
    }

    if(totalPrice <= budget) {
        let moneyLeft = budget - totalPrice;

        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalPrice - budget;

        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}

shopping(["900", "2", "1", "3"]);
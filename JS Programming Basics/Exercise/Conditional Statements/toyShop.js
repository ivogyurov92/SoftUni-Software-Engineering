function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let totalPrice = puzzlesCount * 2.6 + dollsCount * 3 + 
    bearsCount * 4.1 + minionsCount * 8.2 + trucksCount * 2;

    let toysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if(toysCount >= 50) {
        totalPrice *= 0.75;
    }

    totalPrice *= 0.9;

    if(totalPrice >= tripPrice) {
        let moneyLeft = totalPrice - tripPrice;

        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = tripPrice - totalPrice;

        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
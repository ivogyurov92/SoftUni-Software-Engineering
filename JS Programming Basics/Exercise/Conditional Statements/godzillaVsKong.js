function movieBudget(input) {
    let budget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let clothingPricePerActor = Number(input[2]);

    let decorPrice = budget * 0.1;
    let totalClothingPrice = actorsCount * clothingPricePerActor;

    if(actorsCount > 150) {
        totalClothingPrice *= 0.9;
    }

    let totalMoviePrice = decorPrice + totalClothingPrice;

    if(budget >= totalMoviePrice) {
        let moneyLeft = budget - totalMoviePrice;

        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalMoviePrice - budget;

        console.log(`Not enough money!`);
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }
}

movieBudget(["15437.62", "186", "57.99"]);
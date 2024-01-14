function foodPrice(input) {
    let dogPackages = Number(input[0]);
    let catPackages = Number(input[1]);

    let priceForDogs = dogPackages * 2.5;
    let priceForCats = catPackages * 4;

    let totalPrice = priceForDogs + priceForCats;

    console.log(`${totalPrice} lv.`);
}

animalFoodCost(["5", "4"]);
function deerOfSanta(input) {
    let days = Number(input[0]);
    let food = Number(input[1]);
    let foodForFirstDeer = Number(input[2]);
    let foodForSecondDeer = Number(input[3]);
    let foodForThirdDeer = Number(input[4]);

    let firstDeerFood = days * foodForFirstDeer;
    let secondDeerFood = days * foodForSecondDeer;
    let thirdDeerFood = days * foodForThirdDeer;
    let totalFood = firstDeerFood + secondDeerFood + thirdDeerFood;

    if (totalFood <= food) {
        let foodLeft = food - totalFood;

        console.log(`${Math.floor(foodLeft)} kilos of food left.`);
    } else {
        let foodNeeded = totalFood - food;

        console.log(`${Math.ceil(foodNeeded)} more kilos of food are needed.`);
    }
}

deerOfSanta(['2', '10', '1', '1', '2']);
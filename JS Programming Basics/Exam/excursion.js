function excursion(input) {
    let people = input[0];
    let nights = input[1];
    let cardsCount = input[2];
    let ticketsCount = input[3];

    let nightsPrice = nights * 20;
    let cardsPrice = cardsCount * 1.6;
    let ticketsPrice = ticketsCount * 6;
    let totalSinglePrice = nightsPrice + cardsPrice + ticketsPrice;
    let totalPrice = totalSinglePrice * people;
    totalPrice *= 1.25;

    console.log(totalPrice.toFixed(2));
}

excursion([20, 14, 30, 6]);
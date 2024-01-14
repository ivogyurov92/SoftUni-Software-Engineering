function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegetarianMenus = Number(input[2]);

    let chickenMenusPrice = chickenMenus * 10.35;
    let fishMenusPrice = fishMenus * 12.4;
    let vegetarianMenusPrice = vegetarianMenus * 8.15;

    let totalMenusPrice = chickenMenusPrice + fishMenusPrice + vegetarianMenusPrice;

    let dessertPrice = totalMenusPrice * 0.2;

    let totalPrice = totalMenusPrice + dessertPrice + 2.5;

    console.log(totalPrice);
}

foodDelivery(["2", "4", "3"]);
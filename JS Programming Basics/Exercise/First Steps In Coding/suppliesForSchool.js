function suppliesForSchool(input) {
    let pensCount = Number(input[0]);
    let markersCount = Number(input[1]);
    let cleanerCount = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let pensPrice = pensCount * 5.8;
    let markersPrice = markersCount * 7.2;
    let cleanerPrice = cleanerCount * 1.2;
    let totalPrice = pensPrice + markersPrice + cleanerPrice;

    totalPrice *= (100 - percentDiscount) / 100;

    console.log(totalPrice);
}

suppliesForSchool(["2", "3", "4", "25"]);
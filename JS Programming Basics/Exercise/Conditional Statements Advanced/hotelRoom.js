function hotelRoomPrice(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let apartmentPrice = 0;
    let studioPrice = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = nights * 50;
            apartmentPrice = nights * 65;

            if (nights > 14) {
                studioPrice *= 0.7;
                apartmentPrice *= 0.9;
            } else if (nights > 7) {
                studioPrice *= 0.95;
            }

            break;
        case 'June':
        case 'September':
            studioPrice = nights * 75.2;
            apartmentPrice = nights * 68.7;

            if (nights > 14) {
                studioPrice *= 0.8;
                apartmentPrice *= 0.9;
            }

            break;
        case 'July':
        case 'August':
            studioPrice = nights * 76;
            apartmentPrice = nights * 77;

            if (nights > 14) {
                apartmentPrice *= 0.9;
            }

            break;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoomPrice(["May", "15"]);
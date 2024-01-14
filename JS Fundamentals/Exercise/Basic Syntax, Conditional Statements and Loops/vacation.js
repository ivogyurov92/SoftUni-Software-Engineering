function vacationPrice(count, type, day) {
    let price = 0;

    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                price = count * 8.45;
            } else if (day === 'Saturday') {
                price = count * 9.8;
            } else if (day === 'Sunday') {
                price = count * 10.46;
            }

            if (count >= 30) {
                price *= 0.85;
            }

            break;
        case 'Business':
            if (count >= 100) {
                count -= 10;
            }

            if (day === 'Friday') {
                price = count * 10.9;
            } else if (day === 'Saturday') {
                price = count * 15.6;
            } else if (day === 'Sunday') {
                price = count * 16;
            }

            break;
        case 'Regular':
            if (day === 'Friday') {
                price = count * 15;
            } else if (day === 'Saturday') {
                price = count * 20;
            } else if (day === 'Sunday') {
                price = count * 22.5;
            }

            if (count >= 10 && count <= 20) {
                price *= 0.95;
            }

            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacationPrice(30, "Students", "Sunday");
function fruitPrice(input) {
    let product = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    switch (dayOfWeek) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if (product === 'banana') {
                price = quantity * 2.5;
            } else if (product === 'apple') {
                price = quantity * 1.2;
            } else if (product === 'orange') {
                price = quantity * 0.85;
            } else if (product === 'grapefruit') {
                price = quantity * 1.45;
            } else if (product === 'kiwi') {
                price = quantity * 2.7;
            } else if (product === 'pineapple') {
                price = quantity * 5.5;
            } else if (product === 'grapes') {
                price = quantity * 3.85;
            } else {
                console.log('error');
                return;
            }

            break;
        case 'Saturday':
        case 'Sunday':
            if (product === 'banana') {
                price = quantity * 2.7;
            } else if (product === 'apple') {
                price = quantity * 1.25;
            } else if (product === 'orange') {
                price = quantity * 0.9;
            } else if (product === 'grapefruit') {
                price = quantity * 1.6;
            } else if (product === 'kiwi') {
                price = quantity * 3;
            } else if (product === 'pineapple') {
                price = quantity * 5.6;
            } else if (product === 'grapes') {
                price = quantity * 4.2;
            } else {
                console.log('error');
                return;
            }

            break;
        default:
            console.log('error');
            return;
    }

    console.log(price.toFixed(2));
}

fruitPrice(["apple", "Tuesday", "2"]);
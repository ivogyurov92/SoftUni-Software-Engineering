function computerFirm(input) {
    let count = Number(input[0]);
    let totalSales = 0;
    let totalRating = 0;

    for (let i = 1; i <= count; i++) {
        let rating = Number(input[i]) % 10;
        let sales = Math.floor(Number(input[i]) / 10);
        totalRating += rating;

        switch (rating) {
            case 3:
                totalSales += sales * 0.5;
                break;
            case 4:
                totalSales += sales * 0.7;
                break;
            case 5:
                totalSales += sales * 0.85;
                break;
            case 6:
                totalSales += sales;
                break;
        }
    }

    let avarageRating = totalRating / count;

    console.log(totalSales.toFixed(2));
    console.log(avarageRating.toFixed(2));
}

computerFirm(["3", "103", "103", "103"]);
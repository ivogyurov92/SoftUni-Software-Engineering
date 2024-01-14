function histogram(input) {
    let numbersCount = Number(input[0]);
    let categoryOne = 0;
    let categoryTwo = 0;
    let categoryThree = 0;
    let categoryFour = 0;
    let categoryFive = 0;

    for (let index = 1; index <= numbersCount; index++) {
        let number = Number(input[index]);

        if (number < 200) {
            categoryOne++;
        } else if (number >= 200 && number <= 399) {
            categoryTwo++;
        } else if (number >= 400 && number <= 599) {
            categoryThree++;
        } else if (number >= 600 && number <= 799) {
            categoryFour++;
        } else {
            categoryFive++;
        }
    }

    let percentFirstCategory = categoryOne / numbersCount * 100;
    let percentSecondCategory = categoryTwo / numbersCount * 100;
    let percentThirdCategory = categoryThree / numbersCount * 100;
    let percentFourthCategory = categoryFour / numbersCount * 100;
    let percentFifthCategory = categoryFive / numbersCount * 100;

    console.log(percentFirstCategory.toFixed(2) + '%');
    console.log(percentSecondCategory.toFixed(2) + '%');
    console.log(percentThirdCategory.toFixed(2) + '%');
    console.log(percentFourthCategory.toFixed(2) + '%');
    console.log(percentFifthCategory.toFixed(2) + '%');
}

histogram(["3", "1", "2", "999"]);
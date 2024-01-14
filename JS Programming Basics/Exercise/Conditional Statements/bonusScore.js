function bonusScore(input) {
    let number = Number(input[0]);
    let score = 0;
    let bonusPoints = 0;

    if(number <= 100) {
        bonusPoints = 5;
    } else if (number > 1000) {
        bonusPoints = number * 0.1;
    } else {
        bonusPoints = number * 0.2;
    }

    if(number % 2 === 0) {
        bonusPoints += 1;
    }

    if(number % 10 === 5) {
        bonusPoints += 2;
    }

    score = number + bonusPoints;

    console.log(bonusPoints);
    console.log(score);
}

bonusScore(["175"]);
function calculateDeposits(input) {
    let amout = Number(input[0]);
    let term = Number(input[1]);
    let percent = Number(input[2]);

    let sum = amout + term * ((amout * (percent / 100) ) / 12);

    console.log(sum);
}

calculateDeposits(["200", "3", "5.7"]);
function oscarPoints(input) {
    let actor = input[0];
    let points = Number(input[1]);
    let judgeCount = Number(input[2]);

    for (let index = 3; index <= judgeCount + judgeCount + 1; index += 2) {
        let judgeName = input[index];
        let pointsByJudge = Number(input[index + 1]);
        let pointsCountedByJudge = (judgeName.length * pointsByJudge) / 2;
        points += pointsCountedByJudge;

        if (points >= 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
            return;
        }
    }

    let pointsNeeded = 1250.5 - points;

    console.log(`Sorry, ${actor} you need ${pointsNeeded.toFixed(1)} more!`);
}

oscarPoints(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);
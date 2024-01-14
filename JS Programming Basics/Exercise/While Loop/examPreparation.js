function examPreparation(input) {
    let badGradesCount = Number(input[0]);
    let index = 1;
    let task = input[index];
    let gradesCount = 0;
    let lastTask = task;
    let badGrades = 0;
    let gradesSum = 0;

    while (task !== 'Enough') {
        index++;
        let grade = Number(input[index]);

        if (grade <= 4) {
            badGrades++;

            if (badGrades === badGradesCount) {
                console.log(`You need a break, ${badGrades} poor grades.`);
                break;
            }
        }
        gradesSum += grade;
        gradesCount++;
        lastTask = task;
        index++;
        task = input[index];
    }

    if (task === 'Enough') {
        let avarageGrade = gradesSum / gradesCount;

        console.log(`Average score: ${avarageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradesCount}`);
        console.log(`Last problem: ${lastTask}`);
    }
}

examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
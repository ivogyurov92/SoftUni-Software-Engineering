function averageGrade(input) {
    let judgeCount = Number(input[0]);
    let command = input[1];
    let index = 2;
    let totalSumOfGrades = 0;
    let totalJudgeCount = 0;

    while (command !== 'Finish') {
        let presentation = command;
        let currentSumOfGrades = 0;

        for (let i = 0; i < judgeCount; i++) {
            let currentGrade = Number(input[index]);
            index++;
            currentSumOfGrades += currentGrade;
        }

        let currentAverageGrade = currentSumOfGrades / judgeCount;
        totalSumOfGrades += currentSumOfGrades;
        totalJudgeCount += judgeCount;

        console.log(`${presentation} - ${currentAverageGrade.toFixed(2)}.`);

        command = input[index];
        index++;
    }

    let averageGrade = totalSumOfGrades / totalJudgeCount;

    console.log(`Student's final assessment is ${averageGrade.toFixed(2)}.`);
}

averageGrade(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
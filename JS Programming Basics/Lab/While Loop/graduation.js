function graduation(input) {
    let studentName = input[0];
    let averageGrade = 0;
    let gradesSum = 0;
    let poorGrades = 0;
    let index = 1;

    while (index <= 12) {
        let grade = Number(input[index]);
        gradesSum += grade;

        if (grade < 4) {
            poorGrades++;

            if (poorGrades == 2) {
                console.log(`${studentName} has been excluded at ${index - 1} grade`);
                break;
            }
        }

        index++;
    }

    averageGrade = gradesSum / (index - 1);

    if (index - 1 === 12) {
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
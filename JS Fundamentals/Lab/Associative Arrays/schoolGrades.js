function schoolGrades(array) {
    let student = {};

    for (let element of array) {
        let name = element.split(' ').shift();
        let grades = element.split(' ').slice(1);

        if (!student.hasOwnProperty(name)) {
            student[name] = [];
        }
        
        for (let grade of grades) {
            student[name].push(Number(grade));
        }
    }

    let entries = Object.entries(student).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, grades] of entries) {
        let gradesSum = 0;

        for (let grade of grades) {
            gradesSum += grade;
        }

        let averageGrade = gradesSum / grades.length;

        console.log(`${name}: ${averageGrade.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
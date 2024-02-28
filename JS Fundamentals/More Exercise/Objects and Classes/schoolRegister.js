function schoolRegister(array) {
    let register = {};

    for (let line of array) {
        let tokens = line.split(' ');
        let studentName = tokens[2].slice(0, tokens[2].length - 1);
        let stundentGrade = Number(tokens[4].slice(0, tokens[4].length - 1));
        let graduatedWithAverage = Number(tokens[tokens.length - 1]);

        if (graduatedWithAverage >= 3) {
            if (!register.hasOwnProperty(stundentGrade)) {
                register[stundentGrade] = {
                    name: [studentName],
                    average: [graduatedWithAverage],
                };
            } else {
                register[stundentGrade].name.push(studentName);
                register[stundentGrade].average.push(graduatedWithAverage);
            }
        }
    }

    for (let grade in register) {
        let student = register[grade]
        
        console.log(`${Number(grade) + 1} Grade`);
        console.log(`List of students: ${student.name.join(', ')}`);

        let averageNote = student.average.reduce((a, b) => a + b) / student.average.length

        console.log(`Average annual score from last year: ${averageNote.toFixed(2)}`);
        console.log(" ");
    }
}

schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15']);
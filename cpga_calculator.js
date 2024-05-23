const numSemesters = parseInt(prompt("Enter the number of semesters:"));
let totalCreditUnits = 0;
let totalGradePoints = 0;

for (let i = 1; i <= numSemesters; i++) {
    const numCourses = parseInt(prompt(`Enter the number of courses for semester ${i}:`));

    for (let j = 1; j <= numCourses; j++) {
        const creditUnits = parseFloat(prompt(`Enter the credit units for course ${j} of semester ${i}:`));
        const gradePoints = parseFloat(prompt(`Enter the grade points for course ${j} of semester ${i}:`));
        totalCreditUnits += creditUnits;
        totalGradePoints += gradePoints * creditUnits;
    }
}

const cgpa = totalGradePoints / totalCreditUnits;
alert(`Your CGPA is: ${cgpa.toFixed(2)}`);

/* let number = 80;
if (number >= 90 && number=< 100) {
  console.log("get gpa 5");

}
 else if (number >= 80 && number =< 89)
{
  console.log("get gpa 4");
}
else if (number >=70 && number =< 79)
{
  console.log("get gpa3.50");
}
else {
  console.log(fail);
} */

function gradeStudent(mark) {
    if (mark >= 90) {
        return 'A';
    } else if (mark >= 80) {
        return 'B';
    } else if (mark >= 70) {
        return 'C';
    } else if (mark >= 60) {
        return 'D';
    } else if (mark >= 50) {
        return 'E';
    } else {
        return 'F';
    }
}

// Example usage
let studentMark = prompt("Enter student mark (0 - 100):");
studentMark = parseInt(studentMark);

if (isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
    console.log("Please enter a valid mark between 0 and 100.");
} else {
    let grade = gradeStudent(studentMark);
    console.log("The grade for the student is: " + grade);
}

let studentNames = ["Ali", "Sara", "Zain", "Hina", "Ahmed", "Fatima"];
let studentMarks = [88, 95, 67, 32, 76, 45];
let totalMarks = 100;
let percentage = [];
let grades = [] ;
for (i = 0; i < studentNames.length; i++) {
    if(studentMarks[i] >= 90) {
        grades.push("A+") ;
        percentage.push((studentMarks[i] / totalMarks) * 100  + "%");
    } else if(studentMarks[i] >= 80) {
        grades.push("A");
        percentage.push((studentMarks[i] / totalMarks) * 100  + "%");
    } else if(studentMarks[i] >= 70) {
        grades.push("B");
        percentage.push((studentMarks[i] / totalMarks) * 100  + "%");
    } else if(studentMarks[i] >= 60) {
        grades.push("C");
        percentage.push((studentMarks[i] / totalMarks) * 100  + "%");
    } else if(studentMarks[i] >= 50) {
        grades.push("D");
        percentage.push((studentMarks[i] / totalMarks) * 100  + "%");
    } else {
        grades.push("Fail");
        percentage.push((studentMarks[i] / totalMarks) * 100  + "%");
    } 
} 
console.log("Name : " + studentNames + " \n " + "Grades : " + grades + ("\n") + " percentage " + percentage)
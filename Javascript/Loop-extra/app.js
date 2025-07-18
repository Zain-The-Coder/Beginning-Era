// let studentNames = ["Ali", "Sara", "Zain", "Hina", "Ahmed", "Fatima"];
// let studentMarks = [88, 95, 67, 32, 76, 45];
// let totalMarks = 100;
// let lastResult = [] ;
// for (i = 0; i < studentNames.length; i++) {
//     let percentage = ((studentMarks[i] / totalMarks) * 100);
//     let grade = "" ;
//     if(percentage >= 90) {
//         grade = "A+" ;
//     } else if(percentage >= 80) {
//         grade = "A" ;
//     } else if(percentage >= 70) {
//         grade = "B" ;
//     } else if(percentage >= 60) {
//         grade = "C" ;
//     } else if(percentage >= 50) {
//         grade = "D" ;
//     } else {
//         grade = "Fail" ;
//     }
//     lastResult.push(studentNames[i] + " - Marks : " + studentMarks[i] + " - Percentage : " + percentage + "%" 
//         + " - Grade : " + grade);
// }
// console.log("STUDNETS RESULT");
// console.log(lastResult.join("\n"));


// let studentNames = ["Ali", "Sara", "Zain", "Hina", "Ahmed", "Fatima"];
// let studentMarks = [88, 95, 67, 92, 76, 90];
// let totalMarks = 100;
// scholarShipResult = [] ;
// for (i = 0; i < studentNames.length; i++) {
//     let percentage = ((studentMarks[i] / totalMarks) * 100);
//     let result = "" ;
//     if(percentage >= 85) {
//         result = "You Are Eligible For Scholarship !";
//     } else {
//         result = "You Are Not Eligible For Scholarship !";
//     }
//     scholarShipResult.unshift(studentNames[i] + " - " +"Percentage : " + percentage + "%" + " - " + result);
// }
// console.log(scholarShipResult.join("\n"));


// let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// let fullNames = [];
// let mm = 0;
// for (var i = 0; i < firstNames.length; i++) {
// fullNames.push(firstNames[i] + lastNames[i]);
// }
// console.log(fullNames);


// let studentNames = ["Ali", "Sara", "Zain", "Hina", "Ahmed", "Fatima"];
// let studentMarks = [88, 95, 67, 92, 76, 90];
let studentData = [ 
    { Name : "Ali" , Marks : 88 ,},
    { Name : "Sara" , Marks : 95 ,},
    { Name : "Zain" , Marks : 67 ,},
    { Name : "Hina" , Marks : 92 ,},
    { Name : "Ahmed" , Marks : 76 ,},
    { Name : "Fatima" , Marks : 90 ,}
]
let totalMarks = 100 ;
for (let i = 0; i <studentData.length; i++) {
    let percentage = ((studentData[i].Marks / totalMarks) * 100);
    studentData[i].percentage = percentage.toFixed(2);
    if(percentage >= 90) {
        studentData[i].grade = "A+" ;
    } else if(percentage >= 80) {
        studentData[i].grade = "A";
    } else if(percentage >= 70) {
        studentData[i].grade = "B" ;
    } else if(percentage >= 60) {
        studentData[i].grade = "C" ;
    } else if(percentage >= 50) {
        studentData[i].grade = "D" ;
    } else {
        studentData[i].grade = "Fail";
    }
console.log(studentData[i].Name + " - Marks : " + studentData[i].Marks + " - Percentage : " + studentData[i].percentage + " - Grade : " + studentData[i].grade);
}

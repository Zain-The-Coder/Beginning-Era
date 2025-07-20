// // let studentNames = ["Ali", "Sara", "Zain", "Hina", "Ahmed", "Fatima"];
// // let studentMarks = [88, 95, 67, 32, 76, 45];
// // let totalMarks = 100;
// // let lastResult = [] ;
// // for (i = 0; i < studentNames.length; i++) {
// //     let percentage = ((studentMarks[i] / totalMarks) * 100);
// //     let grade = "" ;
// //     if(percentage >= 90) {
// //         grade = "A+" ;
// //     } else if(percentage >= 80) {
// //         grade = "A" ;
// //     } else if(percentage >= 70) {
// //         grade = "B" ;
// //     } else if(percentage >= 60) {
// //         grade = "C" ;
// //     } else if(percentage >= 50) {
// //         grade = "D" ;
// //     } else {
// //         grade = "Fail" ;
// //     }
// //     lastResult.push(studentNames[i] + " - Marks : " + studentMarks[i] + " - Percentage : " + percentage + "%" 
// //         + " - Grade : " + grade);
// // }
// // console.log("STUDNETS RESULT");
// // console.log(lastResult.join("\n"));


// // let studentNames = ["Ali", "Sara", "Zain", "Hina", "Ahmed", "Fatima"];
// // let studentMarks = [88, 95, 67, 92, 76, 90];
// // let totalMarks = 100;
// // scholarShipResult = [] ;
// // for (i = 0; i < studentNames.length; i++) {
// //     let percentage = ((studentMarks[i] / totalMarks) * 100);
// //     let result = "" ;
// //     if(percentage >= 85) {
// //         result = "You Are Eligible For Scholarship !";
// //     } else {
// //         result = "You Are Not Eligible For Scholarship !";
// //     }
// //     scholarShipResult.unshift(studentNames[i] + " - " +"Percentage : " + percentage + "%" + " - " + result);
// // }
// // console.log(scholarShipResult.join("\n"));


// // let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// // let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// // let fullNames = [];
// // let mm = 0;
// // for (var i = 0; i < firstNames.length; i++) {
// // fullNames.push(firstNames[i] + lastNames[i]);
// // }
// // console.log(fullNames);


// // let studentNames = ["Ali", "Sara", "Zain", "Hina", "Ahmed", "Fatima"];
// // let studentMarks = [88, 95, 67, 92, 76, 90];
// let studentData = [ 
//     { Name : "Ali" , Marks : 88 ,},
//     { Name : "Sara" , Marks : 95 ,},
//     { Name : "Zain" , Marks : 67 ,},
//     { Name : "Hina" , Marks : 92 ,},
//     { Name : "Ahmed" , Marks : 76 ,},
//     { Name : "Fatima" , Marks : 90 ,}
// ]
// let totalMarks = 100 ;
// for (let i = 0; i <studentData.length; i++) {
//     let percentage = ((studentData[i].Marks / totalMarks) * 100);
//     studentData[i].percentage = percentage.toFixed(2);
//     if(percentage >= 90) {
//         studentData[i].grade = "A+" ;
//     } else if(percentage >= 80) {
//         studentData[i].grade = "A";
//     } else if(percentage >= 70) {
//         studentData[i].grade = "B" ;
//     } else if(percentage >= 60) {
//         studentData[i].grade = "C" ;
//     } else if(percentage >= 50) {
//         studentData[i].grade = "D" ;
//     } else {
//         studentData[i].grade = "Fail";
//     }
// console.log(studentData[i].Name + " - Marks : " + studentData[i].Marks + " - Percentage : " + studentData[i].percentage + " - Grade : " + studentData[i].grade);
// }

// let employees = [
//     { name: "Usman", score: 78 },
//     { name: "Areeba", score: 91 },
//     { name: "Kashif", score: 65 },
//     { name: "Nimra", score: 45 },
//     { name: "Bilal", score: 84 },
//     { name: "Huda", score: 99 }
// ];

// let totalScore = 100;

// for (let i = 0; i < employees.length; i++) {
//     let percentage = ((employees[i].score / totalScore) * 100);
//     employees[i].percentage = percentage.toFixed(2);
//     if(percentage >= 90) {
//         employees[i].grade = "⭐ Excellent " ;
//     } else if(percentage >= 80) {
//         employees[i].grade = " 🥇 Very Good " ;
//     } else if(percentage >= 70) {
//         employees[i].grade = " 🥈 Good " ;
//     } else if(percentage >= 60) {
//         employees[i].grade = " 🟡 Average " ;
//     } else if(percentage >= 50) {
//         employees[i].grade = "⚠️ Needs Improvement " ;
//     } else {
//         employees[i].grade = " ❌ Poor "
//     }
//     console.log(employees[i].name + " - Score : " + employees[i].score + " - Percentage : " 
//         + percentage + "%" + " - Grade : " + employees[i].grade);
// }
// let topPerformer = employees[0];
// for (let i = 0; i < employees.length; i++) {
//     if(employees[i].score > topPerformer.score); 
//     topPerformer = employees[i];
// }
// console.log("👑 " + "THE TOP PERFORMER BETWEEN EMPLOYEES IS : " + topPerformer.name.toUpperCase());


// https://youtu.be/B2AySOOwWJY?si=QmxjnzS_bpmQZqB5 ;

// let products = [
// {name : "Soap" , price : 120 , stock : 43 , sold : 30},
// {name : "Detergent" , price : 210 , stock : 4 , sold : 32},
// {name : "Shampoo" , price : 20 , stock : 20 , sold : 30},
// {name : "Biscuit" , price : 40 , stock : 67 , sold : 7},
// {name : "Oil" , price : 520 , stock : 87 , sold : 25},
// {name : "Rice" , price : 340 , stock: 0 , sold : 20},
// {name : "floar" , price : 90 , stock : 120 , sold : 90},
// ]
// for (let i = 0; i < products.length; i++) {
//     let totalEarning = (products[i].price * products[i].sold);
//     products[i].totalEarning = totalEarning ;
//     if(products[i].stock < 10) {
//         products[i].stockStatus = " Out Of Stock ! " ;
//     } else {
//         products[i].stockStatus = " In Stock !" ;
//     }
//     console.log("Product Name : " + products[i].name + " - Price : " + products[i].price + 
// " - Remaining Stock : " + products[i].stock + " - Sold Out " + products[i].sold + " - Total Earning " + 
// totalEarning + " - Stock Status : " + products[i].stockStatus);
// }
//     let topSellingProduct = products[0];
// for (i = 0; i < products.length; i++) {
//     if(products[i].sold > topSellingProduct.sold) {
//         topSellingProduct = products[i];
//     }
// }
// console.log("THE TOP SELLING PRODUCT IS: " + topSellingProduct.name.toUpperCase() + 
// " - Sold: " + topSellingProduct.sold);

// let cities = ["Karachi" , "Islamabad" , "Lahore" , "Quetta" , "Peshawar"];
// cities.splice(2, 3 , "Multan" , "Thatta" , "Hyderabad" );
// console.log(cities);

// let cities = ["Karachi" , "Islamabad" , "Lahore" , "Quetta" , "Peshawar"];
// let favCities = cities.slice(1 , 2);
// console.log(cities);
// console.log(favCities);

// CHAPTER 17 TO 20 ( TASKS );

// let matrix = [
//      ["z" , "a" , "i" , "n"],
//      ["n" , "i" , "a" , "z"], 
// ]
// console.log(matrix[1][2]);

// let thread = [
//     [
//     [0 , 1],
//     [2 , 3],
//     ],
//     [
//         [4 , 5],
//         [6 , 7],
//     ]
//     [
//         [8 , 9],
//         [10 , 11]
//     ]
// ] 
// console.log(thread[0][1][1]);

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// let x = +prompt("Enter Your Starting Number :");
// let y = +prompt("Enter The Ending Number :");
// let z = +prompt("Enter Your Table Number :");
// for (let i = x; i <= y; i++) {
//     console.log(z + " x " + i + " = " + (i*z));
// }

// function printer () {
//     let x = +document.getElementById("tableNumber").value;
//     let y = +document.getElementById("startingPoint").value;
//     let z = +document.getElementById("endingPoint").value;

//     let output = " " ;

//     for(let i = y; i <= z; i++) {
//         output += (x + " x " + i + " = " + (x * i) + "<br>"); 
//     }
//     let p1 = document.getElementById("tablePrinter");
//     p1.innerHTML = output ;
// }

// let fruits = ["apple" , "banana" , "mango" , "bringal"];
// fruits.pop([3]);
// fruits.splice(2 , 0 , "pineapple" , "orange");
// console.log(fruits);
// for(let i = 0; i < fruits.length; i++) {
//     console.log("Element At Index " + [i] + " Is " + fruits[i] );
// }

// let counting = ["Counting : "] ;
// let reverseCounting = ["Reverse Counting : "] ;
// let evenNumbers = ["Even Numbers : "] ;
// let oddNumbers = ["Odd Numbers : "] ;
// let series = ["Series : "] ;
// for (let i = 1; i <= 15; i++) {
//     counting.push(i);
//     if(i % 2 === 0) {
//         evenNumbers.push(i);
//         series.push(i+ "k");
//     } else {
//         oddNumbers.push(i);
//     }
// }
// for(let i = 15; i >= 1; i--) {
//     reverseCounting.push(i);
// }
// console.log(counting);
// console.log(reverseCounting);
// console.log(evenNumbers);
// console.log(oddNumbers);
// console.log(series);

let numbers = [24 , 53 , 78 , 91 , 12];
let biggestNumber =  numbers[0] ;
for (let i = 0; i < numbers.length; i++) {
    if(biggestNumber ==!  numbers[0]) {
        biggestNumber = "The Biggest Number Is : " + numbers[0] ;
    } else {
        biggestNumber = "The Biggest Number Is : " + numbers[i] ;
    }
}
console.log(numbers);
console.log(biggestNumber);


let items = ["cake" , "apple pie" , "cookies" , "chips" , "patties"];
alert("Welcome To ABC Bakkery !");
let userItem = prompt("What Do You Want To Order ?");
let item = false ;

for (let i = 0; i < items.length; i++) {
    if(userItem === items[i]) {
        console.log("your Item Is here");
        item = true ;
        break ;
    } else {
        console.log("Sorry");
    }
}
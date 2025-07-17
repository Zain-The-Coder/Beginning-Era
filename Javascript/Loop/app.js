// let tno = prompt("Enter Your Table Number :");
// for (let i = 1 ; i <= 10 ; i++) {
//     console.log(tno + " x " + i + " = " + tno*i);
// }

// let userInput = prompt("");
// for (let i = 0 ; i <= userInput ; i++) {
//     console.log(i);
// }


// let loopStart = prompt("Enter Your Starting Point Of Loop :");
// let loopEnd = prompt("Enter Your Ending Point Of Loop :");
// for (let i = loopStart ; i <= loopEnd ; i++) {
//     console.log("Chai Ly Aao !" , i);
// }


// let loopStart = +prompt("Enter Your Starting Point Of Loop :");
// let loopEnd = +prompt("Enter Your Ending Point Of Loop :");
// let skip = +prompt("How many numbers to skip ?");
// for (let i = loopStart ; i <= loopEnd ; i = i + skip){
//     console.log(i);
// }

// let fruits = [" Apple ", " Banana " , " Orange " , " Mango "];
// for(let i = 0 ; i < fruits.length ; i++) {
//     console.log("Your List Of Fruits Is :");
//     console.log(fruits)
// }

// let seasons = ["s1" , "s2" , "s3" , "s4" , "s5" , "s6" , "s7" , "s8" , "s9"];
// for (let i = 0 ; i < seasons.length ; i++) {
//     console.log(seasons[i]);
// }

// for (let i = 10 ; i >= 1 ; i--){
//     console.log(i);
// }


// let numbers = [1,2,3,4,5,6,7,4,77,56,77,77];
// let evenNumber = 0;
// let oddNumber = 0;

// for (let i = 0 ; i < numbers.length ; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenNumber++ ;
//     } else {
//         oddNumber++ ;
//     }
// }
// console.log("Total Even Numbers Are : " + evenNumber);


// let fruits = ["apple" , " banana " , " pineapple " , " gavava " , "strawberry"];
// let extraFruit = fruits.unshift("mango");
// for (i = 0 ; i <= fruits.length -1 ; i++) {
//     console.log(fruits[i]);
// }

// let numbers = [2 , 6 , 4 , 67 , 32 , 78 , 7 , 99 , 53 , 55];
// let evenNumbers = 0;
// let oddNumbers = 0;
// for (i = 0 ; i <numbers.length ; i++) {
//    if(numbers[i] % 2 === 0) {
//     evenNumbers = evenNumbers + numbers[i] ;
//    }
//    else {
//     oddNumbers = oddNumbers + numbers[i];
//    }
// }
// console.log(evenNumbers);
// console.log(oddNumbers)

// let numbers = [2 , 6 , 4 , 67 , 32 , 78 , 7 , 99 , 53 , 97 , 55];
// let evenNumber = 0;
// let oddNumber = 0;
// for (i = 0 ; i < numbers.length ; i++) {
//     if(numbers[i] % 2 === 0) {
//         evenNumber++
//     } else {
//         oddNumber++
//     }
// }
// console.log(evenNumber); console.log(oddNumber)

// let numbers = [2 , 6 , 4 , 67 , 32 , 78 , 7 , 99 , 53 , 97 , 55];
// let evenNumber = 0 ;
// let oddNumber = 0 ;

// for (i = 0 ; i < numbers.length ; i++) {
//     if(numbers[i] % 2 === 0) {
//         evenNumber = evenNumber + numbers[i];
//     } else {
//         oddNumber = oddNumber + numbers[i]
//     }
// }
// console.log(evenNumber);
// console.log(oddNumber);


// let numbers = [2 , 6 , 4 , 67 , 32 , 78 , 7 , 99 , 53 , 97 , 55];
// let evenNumber = [] ;
// let oddNumber = [] ;
// for (i = 0 ; i < numbers.length ; i++) {
//     if(numbers[i] % 2 === 0) {
//         evenNumber.push(numbers[i]);
//     } else {
//         oddNumber.push(numbers[i]);
//     }
// }
// console.log("Even Numbers In The Array Are: " + evenNumber.join(" - "));
// console.log("Odd Numbers In The Array Are: " + oddNumber.join(" - "));

// let numbers = [2, 7, 4, 9, 6, 11, 8];
// let oddNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         oddNumbers.push(numbers[i]);
//     }
// }
// oddNumbers.reverse();
// let oddNumber = 0 ;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         numbers[i] = oddNumbers[oddNumber];
//         oddNumber++ 
//     }
// }

// console.log(numbers);
// let numbers = [2, 7, 4, 9, 6, 11, 8];
// let oddNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         oddNumbers.push(numbers[i]);
//     }
// }
// oddNumbers.reverse();
// let oddNumber = 0 ;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0){
//         numbers[i] = oddNumbers[oddNumber];
//         oddNumber++ ;
//     }
// }

// console.log(numbers);

// let numbers = [5, 0, 13, 0, 21, 0, 3];
// let evenNumber = [];
// let oddNumber = [] ;
// for (i = 0 ; i < numbers.length ; i++) {
//     if(numbers[i] % 2 !== 0) {
//         oddNumber.push(numbers[i]);
//     } else {
//         numbers[i] = 0 ;
//     }
// }
// oddNumber.reverse() ;
// let odd = 0 ;
// for (let i = 0 ; i < numbers.length ; i++) {
//     if(numbers[i] % 2 !== 0) {
//         numbers[i] = oddNumber[odd];
//         odd++ ;
//     } 
// } 
// console.log(numbers);

// let cleanCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
// let userCity = prompt("Enter Your City :");
// let isClean = false;
// for (i = 0 ; i < cleanCities.length ; i++) {
//     if(userCity === cleanCities[i]) {
//         isClean = true ;
//             break ;
//     }
// }
// if(isClean === true) {
//     console.log("You Live In A Clean City !");
// } else {
//     console.log("You Don't Live In A Clean City !");
// }

// let healthyFruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// let userFruit = prompt("Enter Your Fruit : ");
// for (i = 0 ; i < healthyFruits.length ; i++) {
//     if(userFruit === healthyFruits[i]) {
//         console.log("Your Fruit Is Healthy !")
//     } else {
//         console.log("Your Fruit Is Not Healthy !");
//     }
// // }
// let healthyFruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// let userFruit = prompt("Enter Your Fruit : ");
// let isHealthy = false ;
// for (i = 0 ; i < healthyFruits.length ; i++) {
//     if(userFruit === healthyFruits[i]) {
//         isHealthy = true ;
//         break ;
//     }
// }
// if(isHealthy === true) {
//     console.log("Your Fruit Is Healthy !");
// } else {
//     console.log("Your Fruit Is Not Healthy !");
// }

// let userLetter = prompt("Enter Your Word Then I Found Vowels In Your Word !");
// let vowelscount = 0 ;
// let vowels = "aeiou" ;
// for (i = 0; i < userLetter.length; i++) {
//     let curruntLetter = userLetter[i].toLowerCase() ;
//     if(vowels.includes(curruntLetter)) {
//         vowelscount++ ;
//     }
// }
// console.log("The Vowels Found In Your Word Is : " + vowelscount);

// let numbers = [3, 5, 15, 7, 10, 18, 22, 30, 8];
// let multiBy3 = [] ;
// let multiBy5 = [] ;
// let other = [] ;
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 3 === 0) {
//         multiBy3.push(numbers[i]);
//     } else if(numbers[i] % 5 === 0){
//         multiBy5.push(numbers[i]);
//     } else {
//         other.push(numbers[i]);
//     }
// }
// console.log("The Multiplayer Of 3 In The Array Include " + multiBy3);
// console.log("The Multiplayer Of 5 In The Array Include " + multiBy5);
// console.log("Other Numbers Are : " + other);

// let numbers = [3, 5, 15, 7, 10, 18, 22, 30, 8];
// let multiBy3 = [] ;
// let multiBy5 = [] ;
// let other = [] ;
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 3 === 0) {
//         multiBy3.splice(i , 0 , numbers[i]);
//     } if(numbers[i] % 5 === 0){
//         multiBy5.splice(i , 0 , numbers[i]);
//     } else {
//         other.push(numbers[i]);
//     }
// }
// console.log("The Multiplayer Of 3 In The Array Include " + multiBy3.join(" - "));
// console.log("The Multiplayer Of 5 In The Array Include " + multiBy5.join(" - "));
// console.log("Other Numbers Are : " + other.join(" - "));

// let cleanCities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
// let userCity = prompt("Enter Your City :") ;
// let isCity = false ;
// for(i = 0 ; i < cleanCities.length; i++) {
//     if(userCity === cleanCities[i]) {
//         isCity = true;
//         break ;
//     }
// }
// if(isCity === true) {
//     console.log("You Live In A Clean City !");
//     console.log("Your Data Is Present In " + cleanCities[i].indexOf(cleanCities) + " Index ");
// } else {
//     console.log("You Do Not Live In A Clean City !");
// }

// let studentNames = ["Ali", "Sara", "Zain", "Hina", "Ahmed", "Fatima"];
// let studentMarks = [88, 95, 67, 92, 76, 90];
// let topScores = [] ;
// for (let i = 0; i < studentNames.length; i++) {
//     console.log(studentNames[i] + " k Marks Hein " + studentMarks[i]);
//     if(studentMarks[i] >= 90) {
//         topScores.push(studentNames[i]);
//     }
// }
// console.log("And The Top Scorers Are : " + topScores.join(" - "));

// let studentNames = ["Ali", "Sara", "Zain", "Hina", "Ahmed", "Fatima"];
// let studentMarks = [88, 95, 67, 32, 76, 45];
// let passedStudents = [] ;
// let failedStudents = [] ;

// for (i= 0; i < studentNames.length; i++) {
//     if(studentMarks[i] >= 51) {
//          passedStudents.push(studentNames[i] + " : Pass");
//     } else {
//         failedStudents.push(studentNames[i] + " : fail") ;
//     }
// }
// console.log("PASSED STUDENTS :");
// console.log(passedStudents.join("\n"));
// console.log("FAILED STUDENTS :");
// console.log(failedStudents.join("\n"));

let studentNames = ["Ali", "Sara", "Zain", "Hina", "Ahmed", "Fatima"];
let studentMarks = [88, 95, 67, 32, 76, 45];
let lastResult = [] ;
let grades = [] ;
let per = [] ;
let totalMarks = 100;
for (i = 0; i , studentNames.length; i++) {
    let percentage = (studentMarks[i] / totalMarks) * 100 ;
    if(studentMarks[i] >= 90) {
        grades.push("A+");
        lastResult.push("Name" + " : " + studentNames[i]);

    } else if (studentMarks[i] >= 80) {
        grades.push("A")
    } else if(studentMarks[i] >= 70) {
        grades.push("B");
    } else if(studentMarks[i] >= 60) {
        grades.push("C");
    } else if(studentMarks[i]  >= 50) {
        grades.push("D");
    }
}
console.log(lastResult);
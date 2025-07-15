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
// let oddIndex = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         numbers[i] = oddNumbers[oddIndex];
//         oddIndex++;
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




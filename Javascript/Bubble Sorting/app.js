// let arr = [4 , 64 , 2 , 1 , 8 , 76 , 7];

// for(let i = 0 ; i < arr.length -1 ; i++) {
//     for(let j = 0 ; j < arr.length -1 - i ; j++) {
//         if(arr[j] > arr[j + 1]) {
//             let el = arr[j];
//             arr[j] = arr[j + 1] ;
//             arr[j + 1] = el;
//             console.log(arr , i , j)
//         }
//     }
// }
// console.log(arr)


// let userInput = +prompt("Enter Your Number");

// for(let i = 1 ; i < userInput ; i++) {
//     let x = i[0] * i[1];
// }

//Task No 5

// let userNumber = prompt("Enter Your Number");
// let update = String(userNumber);
// let text = "" ;
// for(let i = update.length -1 ; i >= 0 ; i--) {
//     text += update[i];
// }
// console.log(text);

//Task No 6

// let userText = prompt("Enter Your Text");
// let reverse = "" ;
// for(let i = userText.length -1 ; i >= 0 ; i--) {
//     reverse += userText[i];
// }
// if(userText == reverse) {
//     console.log("Text Is Palindrome");
// } else {
//     console.log("Text Is Non Palindrome");
// }

// let userNumber = Number(prompt("Enter your Number"));
// let result = 1;
// for(let i = 1 ; i <= userNumber ; i++) {
//     result = result * i ;
//     console.log(result)
// }
// console.log(result)

//Task No 7 

// let userInput = prompt("Enter Your Text");
// let number = 0 ;
// let text = ["a" , "e" , "i" , "o" , "u"];
// for(let i = 0 ; i < userInput.length ; i++) {
//     console.log(userInput[i])
//     for(let j = 0 ; j < text.length ; j++) {
//         if(userInput[i].toLowerCase() === text[j]) {
//             number++ ;
//         }
//     }
// }
// console.log("The Number Of Vowels Present In The Text Is : " + number)


// //Task No 8
// let userInput = prompt("Enter Your text");
// let space = 0 ;
// let letters = 1 ;
// let characters = 0 ;


// for(let i = 0 ; i < userInput.length ; i++) {
//     if(userInput[i] === " ") {
//         letters++ ;
//         space++ ;
//     } 
// }
// console.log("The Number Of Spaces Is : " +  space + "\n" + "The Number Of Letters Is : " + letters + "\n" + "The Number Of Characters Is : " + userInput.length)

// let arr = [43 , 2 , 345 , 3 , 28, 1];
// let update = arr.sort((a , b) => a - b);
// let lastIndex = update.at(-1) ;
// console.log("The Biggest Number In Array Is : " + lastIndex  + "\n" + "The Smaller Number In Array Is " + update[0]);

let arr = [43 , 2 , 345 , 3 , 28, 1];
let min = arr[0] ;
let max = arr[0];
for(let i = 0 ; i < arr.length ; i++) {
    if(arr[i] > max) {
        max = arr[i];
    }
    if(arr[i] < min) {
        min = arr[i];
    }
}
console.log(max);
console.log(min)
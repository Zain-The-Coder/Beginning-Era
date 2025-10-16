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

let userInput = prompt("Enter Your Text");
let number = 0 ;
let text = "aeiou" ;
for(let i = 0 ; i < userInput.length ; i++) {
    if(userInput[i].indexOf(text)) {
        ++number ;
    }
}
console.log(number)

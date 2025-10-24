// let user = Number(prompt("enter your number"));
// let limit = Number(prompt("enter youtr range of table"));

// for(let i = 1 ; i <= limit ; i++) {
//     console.log(user + " x " + i + " = " + user*i);
// }

// let userNumber = Number(prompt("enter your number"));
// if(userNumber %  === 0) {
//     console.log("it is prime number");
// } else {
//     console.log("it is not a prime number");
// }

// let userNumber = prompt("Enter your number to check either is prime or not");
// isprime = false ;

// for(let i = 0 ; i < userNumber ; i++) {
//     if(userNumber % i === 0) {
//         isprime = true ;
//     } else { 
//         isprime = false ;
//     }
// }


//Task No 4

// let user = prompt("enter your number");
// let arr = [] ;
// for(let i = 1 ; i < user ; i++) {
//     arr.push(i);
//     console.log(arr[i] * arr[i]);
//     print("hello world")
    
// }


//console.log("HELLO WORLD")

// let arr = [54 , 2 , 4 ,23 , 87 , 101 , 409];


// //
// for(let i = 0 ; i < arr.length -1 ; i++) {
//     let swapped = false ;
//     for(let j = 0 ; j < arr.length -1 -i ; j++) {
//         if(arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1] ;
//             arr[j + 1] = temp
//             swapped = true ;
//         }
//         console.log(arr , i , j)
//     }
//     if(!swapped) {
//         break ;
//     }
// }

// let arr = [54 , 2 , 4 ,23 , 87 , 101 , 409];

// for(let i = arr.length -1 ; i <= 0 ; i--) {
//     for(let j = arr.length -1 -i ; j <= 0 ; j--) {
//         if(arr[j] < arr[j - 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j - 1] ;
//             arr[j - 1] = temp      
//           }
//           console.log(arr)
//     }
// }

// let arr = [54 , 2 , 4 ,23 , 87 , 101 , 409];

// for(let i = 0 ; i < arr.length -1; i++) {
//     let siwtched = false ;
//     for(let j = 0 ; j < arr.length - 1 - i ; j++) {
//         if(arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr [j + 1] ;
//             arr[j + 1] = temp ;
//         }
//     }
//     if(siwtched === false) {
//         break ;
//     }
// }

// let firstNumber = arr[0];
// let lastNumber = arr.at(-1);
// console.log("Biggest Number is " + lastNumber + " The Smaller Number Is : " + firstNumber);


let arr = [54 , 2 , 4 ,23 , 87 , 101 , 409];

for(let i = 0 ; i < arr.length ; i++) {
    let bigNum = arr[i];
    if(bigNum < arr[i + 1]) {
        bigNum = arr[i + 1];
    } 
    console.log(bigNum)
}

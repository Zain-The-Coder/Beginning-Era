// console.log(Math.random());

// console.log(Math.random() * 20);

// console.log((Math.random() * 5 ) + 1 );

// console.log(Math.round(Math.random()));

// console.log(Math.round(65.3));
// console.log(Math.round(65.6));
// console.log(Math.round(59.5));

// console.log(Math.floor(23.3));
// console.log(Math.floor(56.7));
// console.log(Math.floor(98.9));

// console.log(Math.ceil(56.1));
// console.log(Math.ceil(45.6));

// let cal = Math.floor(Math.random() * 10) + 1;
// console.log(cal);


// let calc = Math.ceil(Math.random() * 10) + 1;
// console.log(calc);

// let dice = Math.floor(Math.random() * 6) ;
// console.log(dice);

// let dic = Math.ceil(Math.random() * 10);
// console.log(dic);

// let toss = Math.random() ;
// if(toss > 0.5) {
//     console.log("Heads !");
// } else {
//     console.log("Tails !");
// }


// let a = 56;
// let b = 43;
// let c = 12;
// console.log(Math.min(a , b , c));
// console.log(Math.min(34 , 45 , 76));

// console.log(Math.max(32 , 45 , 21));
// console.log(Math.max(a , b , c));

// if(a > b && a > c) {
//     console.log(a);
// } else if(b > a && b > c) {
//     console.log(b);
// } else {
//     console.log(c);
// }

// console.log(Math.abs(6));
// console.log(Math.abs(-43));

// let number = 54 ;
// let num = 43.5;
// console.log(String(number) + 4);

// console.log(String(num));

// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.random(num));

// let n = Math.ceil(Math.random() * 10); 
// console.log(n);
// console.log(Math.floor(Math.random()) + 1)

// console.log(Math.abs(-32.4));

// let number = 34;
// console.log(Number(number) + 3);   // Make addition
// console.log(String(number) + 3);   // concatinate
// console.log((Number(number) + 3).toString()); // additon but turn number into string

// let otp = Math.floor((Math.random() * 9000) + 1000);
// console.log(otp);

// let reward = 5480;
// for(let i = 1; i <= 3; i++) {
//     let userCode = parseInt(prompt("Attempt No " + i +" : Enter Your 4 Digit Code !"));
//     if(userCode === reward) {
//         alert("You Achived The Reward !");
//         break ;
//     } else {
//         alert("Try Again !");
//     }
//     if(i === 3) {
//         alert("You Have No More Attempt Left !");
//     }
// }

// let luckyCode = Math.floor(Math.random() * 10);
// let userCode = parseInt(prompt("Enter your 1-digit lottery number:"));

// if (userCode === luckyCode) {
//     console.log(" Congratulations! You won the lottery");
// } else {
//     console.log("Lucky number was: " + luckyCode);
//     console.log(" Sorry! Better luck next time");
// }

// let luckyNumber = (Math.round(Math.random() * 20));
// let userNumber = parseInt(prompt("Enter Your Number :"));
// if(luckyNumber === userNumber) {
//     console.log("The Lucky Number Is " + luckyNumber);
//     console.log("Your Number Is " + userNumber);
//     console.log("You Gussed Right Number !");
// } else {
//     console.log("The Lucky Number Is " + luckyNumber);
//     console.log("Your Number Is " + userNumber);
//     console.log("Your Number Is Wrong !");
// }

// let luckyNumber = (Math.floor((Math.random() * 20) + 1));
// for(let i = 1; i <= 3; i++) {
//     let userNumber = parseInt(prompt(("Enter Your Number Between 1 to 20:")));
//     if(userNumber === luckyNumber) {
//         alert("You Guessed It Right In " + i + " Attempt !");
//         break ;
//     } else {
//         alert("Your Number Is Incorrect. Please Try Again !");
//     }
//     if(i === 3) {
//         alert("You Have Out Off Attempt , The Lucky Number Is " + luckyNumber);
//     }
// }

// let code = [];
// for (let i = 0; i < 3; i++) {
//     code.push(Math.floor(Math.random() * 10));
// }

// for (let attempt = 1; attempt <= 5; attempt++) {
//     let guess = prompt("Attempt of " + attempt +  "out of 5: Enter a 3-digit code (like 123):");
    
//     // Input validation
//     if (!guess || guess.length !== 3 || isNaN(guess)) {
//         alert("❗Invalid input. Enter exactly 3 digits.");
//         attempt--;
//         continue;
//     }

//     // Convert to arrays
//     let codeCopy = [...code];
//     let guessArr = guess.split("").map(Number);
//     let exactMatches = 0;
//     let partialMatches = 0;

//     for (let i = 0; i < 3; i++) {
//         if (guessArr[i] === code[i]) {
//             exactMatches++;
//             codeCopy[i] = null; // mark matched
//             guessArr[i] = -1;   // avoid reuse
//         }
//     }

//     for (let i = 0; i < 3; i++) {
//         if (codeCopy.includes(guessArr[i])) {
//             partialMatches++;
//             let index = codeCopy.indexOf(guessArr[i]);
//             codeCopy[index] = null; // avoid double count
//         }
//     }

//     // Step 4: Output Result
//     if (exactMatches === 3) {
//         alert(`🎉 You cracked the code in ${attempt} attempt(s)! Code was: ${code.join("")}`);
//         break;
//     } else {
//         alert(`✅ ${exactMatches} digit(s) correct and in the right place\n🔁 ${partialMatches} digit(s) correct but in the wrong place`);
//     }

//     if (attempt === 5) {
//         alert(`❌ Game over! The correct code was: ${code.join("")}`);
//     }
// }


let code = [] ;
for(let i = 1; i <= 3 ; i++) {
code.push(Math.floor(Math.random() * 10));
}

for(let a = 1; a <= 5; a++) {
    let userInput = prompt("Attempt No " + a + " Out Of 5 " + "\n" + " Enter Your 3 Digits Code !");
    if(userInput.length !== 3 || isNaN(userInput)) {
        alert("Please Enter Valid Code !");
        a-- ;
        continue ;
    }
    let copyCode = [...code];
    let userArray = userInput.split("").map(Number);
    let exect = 0;
    let partial = 0 ;
    for(let i = 0; i < 3; i++) {
        if(userArray[i] === userInput[i]) {
            exect++ ;
            userInput = null ;
            userArray = -1 ;
        } 
    }
    for(let i = 0; i < 3; i++) {
        if(copyCode.includes(userArray[i])) {
            partial++ ;
            let index = copyCode.indexOf(userArray[i]);
            copyCode[index] = null ;
        }
    }
    if(exect === 3) {
        alert("PERFECT ! YOU DESTROY THE CODE ! ");
    } else {
        alert(partial + " are correct but in wrong place !");
    }
    if(userInput === 5) {
        alert("Better Luck , Next Time !" + "\n" + "The Code Is " + code);
    }
}
// let marks = prompt("Enter Your Marks :");
// if (marks >= 70) {
//     document.write("You Passed !");
// }  else {
//     document.write(" You Failed !");
// }

// let userNumber = prompt(" Enter Your Marks :");

// if (userNumber >= 70) {
//     console.log()
// }

// let userNumber = prompt("Enter your Number :");
// function showResult () {
//     let H1 = document.getElementById("result");
//     if (userNumber >= 70) {
//         H1.innerHTML = " You  Passed !"
//     }  else {
//         H1.innerHTML = " You Failed !"
//     }
// }

// function showResult (userNumber) {
//     let H1 = document.getElementById("result");
//     if (userNumber >= 70) {
//         H1.innerHTML = " You Passed !" ;
//     }  else {
//         H1.innerHTML = " You Failed !" ;
//     }
// }
// showResult(60)

// let userNumber = prompt("Enter Any Number :");
// if (userNumber % 2 === 0) {
//     console.log("You Entered Even Number !");
// } else {
//     console.log(" You Entered Odd Number !");
// }


// Even Or Odd Checker 
//   <button onClick="showResult()">Check Result</button>
//   <h3 id="result">Your result will appear here</h3>

// function checker (userNum) {
//     if (userNum % 2 === 0) {
//         return " You Entered An Even Number !" ;
//     } else {
//         return " You Entered An Odd Number !" ;
//     }
// }
// let userNum = prompt("Enter Your Number :");
// let number = Number(userNum);
// let change = document.getElementById("result");
// function showResult () {
//     let checkerFunction = checker(userNum);
//     if(isNaN(number)){
//         change.innerHTML = "Please Enter A Valid Number !"
//     }
//     else {
//         change.innerHTML = checkerFunction;
//     }
// }

//  Table Printer

// function tableMaker (userNum) {
//     let i = 0;
//     let t = (userNum + " x " +  ++i  + " = " + userNum*i);
//     return t ;
// }

// let userNum = prompt("Enter Any Table Number :");
// let tno = Number(userNum);
// let printTable  = document.getElementById("showerTable");

// function tablePrinter () {
//     let calTable =  tableMaker(userNum);
//     if(isNaN(tno)){
//         printTable.innerHTML = " Please Enter A Valid Number !"
//     } else{
//     printTable.innerHTML = calTable ;  
//     }
// }


//   <h1>Your Result</h1>
//   <p id="showerResult">Your Result Is Show Here</p>
//   <button onClick="resulter()">Press For Result</button>

// function checker (userMarks) {
//     if (userMarks >= 70) {
//         return " You Have Passed !" ;
//     }  else {
//         return " You Have Failed !" ;
//     }
// }
// let userMarks = prompt("Enter Your Marks :");
// let numbers = Number(userMarks) ;
// let x = document.getElementById("showerResult");
// function resulter () {
//     let function1 =  checker(userMarks);
//     if (isNaN(numbers)) {
//         x.innerHTML = "Please Enter A Valid Number !" ;
//     } else {
//         x.innerHTML = function1;
//     }
// }

// function converter() {
//     let c = prompt("Enter Your Temperature In Celcius :");
//     let number = Number(c);
//     let f = (c * 9 / 5) + 32;
//     if(isNaN(number)) {
//         document.getElementById("shower").innerHTML = "Please Enter A Valid Number !" ;
//     } else {
//         document.getElementById("shower").innerHTML = "Your Temperature In Farenheit Is " + f ;
//     }
// }
// function converter2 () {
//     let f = prompt("Enter Your Temperature In Farenheit :");
//     let number = Number(f);
//     let c = (f - 32) * 5 / 9;
//     if(isNaN(number)) {
//         document.getElementById("shower").innerHTML = "Please Enter A Valid Number !" ;
//     }  else {
//         document.getElementById("shower").innerHTML = "Your Temperature In Celcius Is " + c ;
//     }
// }

// function checker () {
// let marks = prompt("Enter Your Marks :");
// let x = document.getElementById("shower");
// if(marks >= 80) {
//     x.innerHTML = "Congratulation ! You Have Passed With A+ Grade." + " Well Done , Keep It Up" ;
// }  
// else if (marks >= 70) {
//     x.innerHTML = "Congratulation ! You Have Passed With A Grade." + " Keep It Up" ;
// }
// else if (marks >= 70) {
//     x.innerHTML = "Congratulation ! You Have Passed With A Grade." + " Good Efforts";
// }
// else if (marks >= 60) {
//     x.innerHTML = "You Have Passed With B Grade." + " Good";
// }
// else if (marks >= 50) {
//     x.innerHTML = "You Have Passed With C Grade." + " Need More Practise ";
// }
// else{
//     x.innerHTML = "You Have Failed";
// }
// }

// let userReligion = prompt("Enter Your Religion :") ;
// let Religion = "Islam" ;

// if(userReligion !== Religion) {
//     console.log ("Go Back . You Are Not Allowed To Enter !") ;

// } else {
//     console.log("Welcome Muslim !");
// }


// let userItem = prompt("Enter The Snack Name, You Want To Eat :");
// let userItem2 = prompt("Enter The  Soft Drink Name, You Want To Drink :");
// let item = "kurkure" ;
// let item2 = "pepsi" ;

// if (userItem === item && userItem2 === item2) {
//     console.log("Bohot best hogaya . Dono ly aao !");
// } else if (userItem === item || userItem2 === item2) {
//     console.log("Ly aao , koi 1 he ly aao !");
// } else {
//     console.log("Rehny do bhai , naseeb may he nahi hai");
// }


// let userNumber = prompt("Enter First Number : ") ;
// let userNumber1 = prompt("Enter Second Number :") ;
// if(userNumber === userNumber1) {
//     console.log("Both Values Are Equal !") ;
// } else if (userNumber > userNumber1) {
//     console.log("The Bigger Number Between Both Is " + userNumber) ;
// } else {
//     console.log("The Bigger Number Between Both Is " + userNumber1) ;
// }

// let userNumber = prompt("Enter Your Number :");
// if (userNumber > 0) {
//     console.log("You Enter Positive Number !");
// } else if (userNumber < 0) {
//         console.log("You Enter Negative Number !");
// } else {
//         console.log("You Enter Zero Number !");
// }

// let vowels = ["a" , "e" , "i" , "o" , "u"] ;
// let userInput = prompt("Enter any character. If you enter vowel, you will return True !" 
//     + " Otherwise False");
// if(userInput === vowels) {
//     console.log(true);
// } else {
//     console.log(false);
// }

let userPassword = prompt("Enter Your Password :") ;
function checker () {
    let Password = prompt("Enter Your Password !");
    let x = document.getElementById("shower");
    if(userPassword === Password) {
        x.innerHTML = "Welcome User" ;
    } else {
        x.innerHTML = "Wrong Password" ;
    }
}


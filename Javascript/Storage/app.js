// let age = 20 ;
// let x = age >= 18 ? "Adult" : "Kid" ;
// console.log(x);

// let ag = prompt("Enter Your Age :");
// let isTrue = false ;
// let result = ag >= 18 ? isTrue = true : isTrue ;
// console.log(result);


// let x = document.getElementById("first");
// let y = document.getElementById("second");
// let z = document.getElementById("third");

// let curruntTime = new Date () ;
// let hour = curruntTime.getHours();
// let minute = curruntTime.getMinutes();
// let second = curruntTime.getSeconds();



// x.innerHTML = hour + ":" ;
// y.innerHTML = minute + ":" ;
// z.innerHTML = second ;

// if(hour > 12) {
//     x.innerHTML = hour - 12 +  ":" ;
// }
// if(second <= 9) {
//     z.innerHTML = "0" + second ;
// }
// if(minute <= 9) {
//     y.innerHTML = "0" + minute + ":" ;
// }

// setTimeout(function (){
//     console.log("Hello World");
// }, 10000);

// let timeout = 0;
// let myInterval = setInterval (function () {
//     console.log("Hello World");
//     timeout++ ;
//     if(timeout === 3) {
//         clearInterval(myInterval);
//         console.log("Stopped !");
//     }
// } , 1000);


// let i = 60;
// let print = document.getElementById("first");
// let myInterval = setInterval ( function () {
//     print.innerHTML = i-- ;
//     if(i <= 9) {
//         print.innerHTML = "0" + i ;
//     }
//     if(i === 0  ) {
//         clearInterval(myInterval);
//     }
// } ,100)


// let minute = document.getElementById("first");
// let second = document.getElementById("second");
// let x = 1 ;
// let y = 60 ;


// // let myInterval = setInterval (function () {
// //     second.innerHTML = " "+ y-- ;
// //     if(y === -1) {
// //         y = 60 ;
// //         x-- ;
// //     }
// //     if(y <= 9) {
// //         second.innerHTML = " 0" + y ;
// //     }
// //     if(x === 0) {
// //         clearInterval(myInterval)
// //     }
// //     minute.innerHTML ="0" + x + " :";
// // } , 100 );


// let x = document.getElementById("first");
// let y = document.getElementById("second");
// let z = document.getElementById("third");

// let hour = prompt("Enter Hour");
// let minute = prompt("Enter Minute");
// let second = prompt("Enter Second");

// function hello () {
// if(hour < 10) {
//     x.innerHTML = "0" + hour + ":" ;
// } else {
//     x.innerHTML = hour + ":" ;
// }
// if (minute < 10) {
//     y.innerHTML = "0" + minute + ":" ;
// } else {
//     y.innerHTML = minute + ":" ;
// } 
// if(second < 10) {
//     z.innerHTML = "0" + second;
// } else {
//     z.innerHTML = second;
// }
// }

// let myInterval =  setInterval(function () {
//     hello() ;
//     second-- ;
//     if(second < 0) {
//         second = 59 ;
//         minute -- ;
//     } 
//     if(minute < 0) {
//         minute = 59 ;
//         hour -- ;
//     }
//     if(hour === -1) {
//         clearInterval(myInterval);
//         x.innerHTML = "" ;
//         y.innerHTML = "Time Is Up" ;
//         z.innerHTML = "" ;
//     }

// }, 10)


// setInterval( function () {
//     let x = document.getElementById("first");
//     let y = document.getElementById("second");
//     let z = document.getElementById("third");
//     let curruntTime = new Date () ;
    
//     let hour = curruntTime.getHours();
//     let minute = curruntTime.getMinutes();
//     let second = curruntTime.getSeconds();
    
//     if(hour > 12) {
//         x.innerHTML = (hour - 12 ) + " : ";
//     } else {
//         x.innerHTML = hour + " : " ;
//     }
    
//     if(minute < 10) {
//         y.innerHTML = "0" + minute + " : " ;
//     } else {
//         y.innerHTML = minute + " : "
//     }
//     if(second < 10) {
//         z.innerHTML = "0" + second;
//     } else {
//         z.innerHTML = second;
//     }
// }, 1000);


// let userNames  = JSON.parse(localStorage.getItem("nameOfUser")) || [];
// let userPasswords = JSON.parse(localStorage.getItem("passwordOfUser")) || [];
// function submit () {
//     let x = document.getElementById("name").value; 
//     let y = document.getElementById("password").value;
// userNames.push(x);
// userPasswords.push(y);
// document.getElementById("name").value = "" ;
// document.getElementById("password").value = "" ;
// localStorage.setItem("nameOfUser" , JSON.stringify(userNames));
// localStorage.setItem("passwordOfUser" , JSON.stringify(userPasswords));

// console.log(userNames);
// console.log(userPasswords);
//}




// let studentName = document.getElementById("student-name");
// let studentNameEl = document.getElementById("name");


// function printName () {
//     localStorage.setItem("studentName", studentName.value);
//     studentNameEl.innerHTML = localStorage.getItem("studentName");
// }
// studentNameEl.innerHTML = localStorage.getItem("");

// let curruntTime = new Date () ;
// let x = curruntTime.getMonth() ;
// console.log(x);


// console.log(0.1 + 0.2 === 0.3);
// console.log(typeof null);
// console.log([ 2, 4] + [4 , 2]);


// let array = ["a" , "b" , "c" , "d" , "e" , "f"];
// localStorage.setItem("names " , JSON.stringify(array));

// let object = {
//     myName : "Zain" , 
//     rollNo : 52 ,
// }
// console.log(object);
// localStorage.setItem("myObject" , JSON.stringify(object));

// localStorage.setItem("username" , "talal");

// console.log(localStorage.getItem("username"));

// let stdntName = document.getElementById("name");
// let rollNo = document.getElementById("password");
// let allStudents = [];


// function submit () {
//     let student = {
//         "studentName": stdntName.value,
//         "rollNo": rollNo.value
//     }

//     let savedStdnt = localStorage.getItem("studentInfo");

//     if (savedStdnt) {
//         allStudents.push(JSON.parse(savedStdnt));
//     }

//     allStudents.push(student);

//     localStorage.setItem("studentInfo", JSON.stringify(allStudents));
// }

// let array = ["hello" , "hell" , "hellllo"];
// for(let i = 0 ; i < array.length; i++) {
// localStorage.setItem("helloTypes" + i , array[i]);
// console.log(localStorage.getItem("helloTypes"));
// }

let _userName = document.getElementById("name");
let _userPassword = document.getElementById("password");
let information = [] ;


function submit () {
    userInfo = {
        userName : _userName.value ,
        userPassword : _userPassword.value ,
    }
    let user = localStorage.getItem("userInfo");

    if(user) {
        information.push(JSON.parse(user))
    }
    information.push(userInfo)
localStorage.setItem("userInfo" , JSON.stringify(information));
document.getElementById("name").value = "" ;
document.getElementById("password").value = "" ; 

}
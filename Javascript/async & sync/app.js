// let arr = [23 , 53, 21, 123, 23 ];

// console.log(arr);
// let newArray = arr.sort((a , b) => a - b);
// console.log(newArray)


// function timer () {
//     let myInterval = setInterval(() => {
//         console.log("First Interval is Working....");
//     }, 3000);
//     let myInterval2 = setInterval(() => {
//         console.log("Second Interval Is Working....");
//     }, 3000);
//     let myInterval3 = setInterval(() => {
//         console.log("Third Interval Is Working....");
        
//     }, 3000);
//     console.log(myInterval , myInterval2 , myInterval3)
// }
// timer() ;


// function callBackFunction(email , password , callBack , secondCallBack){
//     if(email === "zain015976@gmail.com" && password === "zain9.5.09") {
//         setInterval( () => {
//         callBack(secondCallBack()); 
//         } , 3000) ;
//     }
// }

// callBackFunction("zain015976@gmail.com" , "zain9.5.09" , 
//     function callBack (secondCallBack) {
//         console.log(secondCallBack)
//     } ,
//     function confusion () { 
//         let x = "I Am Missing You Nowadays , Seriously !" ;
//         return x ;
//     }
// )


// function randomGenerator () {
//     let number = Math.ceil(Math.random() * 10) ;

//     if(number % 2 === 0) {
//         console.log("this is even number");
//     } else {
//         console.log("this is odd number");
//     }
//     randomGenerator();
// }

// let firstSync = new Promise((resolve , reject) => {
//     function myFunc() {
//         let random = Math.ceil(Math.random() * 100) ;
//         if(random % 2 === 0) {
//             resolve("The Number Is Even");
//         } else {
//             reject("The Number Is Odd");
//         }
//     }
//     firstSync() ;
// })

// firstSync 
//         .then( function (resolve) {
//             console.log(resolve)
//         })

// let lotteryFunction = new Promise( (win , loss) => {
//     let random = Math.ceil(Math.random() * 50) 
//         if (random % 2 === 0) {
//             win("The User Is Win");            
//         } else {
//             loss("The User Is Loss");
//         }
//     }
// )

// lotteryFunction
//     .then (setInterval(() => {
//         (win) => {
//             console.log(win)
//         }
//     }, 2000))
//     .catch(setInterval(() => {
//         (loss) => {
//             console.log(loss)
//         }
//     }, 3000));


// let resulter = new Promise((pass , fail) => {
//     let random = Math.ceil(Math.random() * 100) 
//     if(random >= 50) {
//         setInterval(() => {
//             pass("Congratulation , the user is passed"  + " The number is " + random);
//         }, 2000)
//     } else {
//         setInterval(() => {
//             fail("Ops ! The User Is Failed"  + " The number is " + random);
//         }, 2000);
//     }
// })
    
// resulter
//     .then((pass) => {
//         console.log(pass)
//     }) 
//     .catch((fail) =>  {
//         console.log(fail);
//     })
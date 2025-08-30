// function moveForward () {
//     console.log("played")
// }

// setInterval(moveForward, 800000);

// let sepcialPara = document.getElementsByClassName("special");
// let hello = document.getElementsByClassName("notSpecial");

// function changer () {
//     let isChanged = false ;
//     if(!isChanged) {
//     for(let i = 0 ; i < sepcialPara.length; i++) {
//         let para = sepcialPara[i] ;
//         para.style.backgroundColor = "black" ;
//         para.style.color = "white" ;
//         para.style.fontSize = "20px" ;
//         para.style.fontFamily = "monospace" ;
//         para.style.padding = "23px" ;
//         para.style.borderRadius = "20px"
//         isChanged = true ;
//         }
//     }  else  {
//     for(let i = 0 ; i < sepcialPara.length; i++) {
//         let paras = sepcialPara[i] ;
//         paras.style.backgroundColor = "red" ;
//         paras.style.color = "white" ;
//         paras.style.fontSize = "san-serif" ;
//         paras.style.borderRadius = "20px" ;
//         paras.style.padding = "23px" 
//         paras.style.fontSize = "20px" ;
//         isChanged = false ;
//     }
//     }
// }

// // function hel ()  {
// //     for(let i = 0 ; i < hello.length; i++) {
// //         let paras = hello[i] ;
// //         paras.style.backgroundColor = "red" ;
// //         paras.style.color = "white" ;
// //         paras.style.fontSize = "san-serif" ;
// //         paras.style.borderRadius = "20px" ;
// //         paras.style.padding = "23px" 
// //         paras.style.fontSize = "20px" ;
// //     }
// // }
// setTimeout(changer , 1000);

// let specialPara = document.getElementsByClassName("special");
// let isChanged = true ;
// setInterval(function hello () {
//     if(isChanged) {
//     for(let i = 0 ; i < specialPara.length; i++) {
//         let para = specialPara[i] ;
//         para.style.backgroundColor = "black" ;
//         para.style.color = "white" ;
//         para.style.fontSize = "20px" ;
//         para.style.padding = "20px" ;
//         para.style.fontFamily = "monospace" ;
//         para.style.borderRadius = "20px"
//         isChanged = false  ;
//     }
// }
// else {
//     for(let j = 0 ; j < specialPara.length ; j++) {
//         let para = specialPara[j] ;
//         para.style.color = "white" ;
//         para.style.backgroundColor = "red" ;
//         para.style.fontFamily = "monospace" ;
//         para.style.fontSize = "20px" ;
//         para.style.padding = "20px" ;
//         para.style.borderRadius = "20px"
//         isChanged = true ;
//     }
// }
// }, 1000);

// let notSpecial = document.getElementsByClassName("not");
// let isClose = true ;
// setInterval(function hi() {  
//     if(isClose) {
//     for(let i = 0 ; i < notSpecial.length; i++) {
//         let extra = notSpecial[i] ;
//         extra.style.backgroundColor = "yellow" ;
//         extra.style.color = "black" ;
//         extra.style.fontFamily = "monospace" ;
//         extra.style.padding = "20px" ;
//         extra.style.borderRadius = "20px" ;
//         extra.style.fontSize = "20px" ;
//         isClose = false ;
//     } 
// }   else {
//         for(let j = 0 ; j < notSpecial.length ; j++) {
//         let extra = notSpecial[j] ;
//         extra.style.backgroundColor = "grey" ;
//         extra.style.color = "blue" ;
//         extra.style.fontFamily = "monospace" ;
//         extra.style.padding = "20px" ;
//         extra.style.borderRadius = "20px" ;
//         extra.style.fontSize = "20px" ;
//         isClose = true ;
//     }
// }
    
// }, 1000);

// let curruntDate = new Date() ;
// //let hour = String(curruntDate.getHours()).padStart(1 , "0") ;
// let hour = curruntDate.getHours();
// let minute = curruntDate.getMinutes() ;
// let second = curruntDate.getSeconds() ;


// let printer = document.getElementById("first");
// function dater () {
//     let curruntDate = new Date ();
//     let hour = curruntDate.getHours() ;
//     let minute = curruntDate.getMinutes() ;
//     let second = curruntDate.getSeconds() ;
//     printer.innerHTML = hour + " : " + minute + " : " + second ;
// }
// setInterval(dater , 1000);

// let printer = document.getElementById("first");

// setInterval(function () {
//     let curruntDate = new Date () ;
//     let x = curruntDate.getHours() ;
//     let y = curruntDate.getMinutes() ;
//     let z = curruntDate.getSeconds() ;
//     let hours = "" ;
//     let minutes = "" ;
//     let seconds = "" ;

//     if(x <= 9) {
//         hours += String(x).padStart(2 , "0") + " : ";
//     } else {
//         hours += x + " : " ;
//     }

//     if(y <= 9) {
//         minutes += String(y).padStart(2 , "0") + " : " ;
//     } else {
//         minutes += y + " : " ;
//     }

//     if(z <= 9) {
//         seconds += String(z).padStart(2 , "0") ;
//     } else {
//         seconds += z ;
//     }
//     printer.innerHTML = hours + minutes + seconds ;
// } , 1000) ;

// let heading = document.getElementById("head");
// let button = document.getElementById("btn");

// button.addEventListener("click" , function () {
//     this.textContent.cl
// })

// let x = document.childNodes[1].childNodes
// console.log(x)

// console.log(document.childNodes) ;  // <doctype html > , <html>
//console.log(document.nodeName)  ;  // #document
//console.log(document.childNodes[1].nodeName) ; // HTMl
//console.log(document.childNodes[1].nodeType)

let x = document.childNodes[1].childNodes[2].childNodes
console.log(x);




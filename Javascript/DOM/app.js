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


// function add () {
// let x = document.getElementById("userInput").value ;
// let userData = document.createTextNode(x);
// console.log(userData)
// }

// console.log(document.childNodes) ;  // <doctype html > , <html>
//console.log(document.nodeName)  ;  // #document
//console.log(document.childNodes[1].nodeName) ; // HTMl
//console.log(document.childNodes[1].nodeType

// let x = document.childNodes[1].childNodes[2].childNodes
// console.log(x);



// let x = document.getElementById("container");
// let addNewEl = document.createElement("p");
// let newEl = x.appendChild(addNewEl);
// console.log(newEl);
// newEl.textContent = "hello para2"
// console.log(document.childNodes[1].childNodes[2].childNodes[3])


// let x = document.childNodes[1].childNodes[2].childNodes[7];
// console.log(x);

// let userInput = document.getElementById("userInput");
// let message = document.getElementById("message");
// let ulEl = document.getElementById("unorderedList")

// console.log(x);

// function add () {
//     if(userInput.value === "") {
//     message.innerHTML = "Please Enter Input" ;
// }  else {
//     let liEl = document.createElement("li");
//     let userTextNode = document.createTextNode(userInput.value);
//     console.log(userTextNode);


//     let deleteButton = document.createElement("button");
//     let deleteButtonTextNode = document.createTextNode("Delete");
//     deleteButton.setAttribute("onClick" , "removeItem(this)")

//     deleteButton.appendChild(deleteButtonTextNode);


//         liEl.appendChild(userTextNode);
//         liEl.appendChild(deleteButton)
//         ulEl.appendChild(li);
// }
//}

// let xyz = document.getElementById("myImg");
// console.log(xyz.getAttribute("alt"));
// console.log(xyz.setAttribute("alt" , "hello-car"));
// console.log(document.childNodes[1].childNodes[2].childNodes[3].childNodes[3]);
// let z = (xyz.hasAttribute("title"));
// if(z === false) {
//     console.log("Not Found !");
// } else {
//     console.log("Found");
// }



let container = document.getElementById("div");
console.log(document.childNodes[1].childNodes[2].childNodes[3]);

let newButton = document.createElement("button");
newButton.textContent = "Press Me" ;

let createButton = container.appendChild(newButton);
createButton.setAttribute("onClick" , "clickMe()");

function clickMe() {
    let createElement = document.createElement("p");
    createElement.textContent = "New Paragraph Added !" ;
    container.appendChild(createElement);
}

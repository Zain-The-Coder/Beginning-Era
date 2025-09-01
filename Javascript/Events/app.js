// function hello () {
//     console.log("Hello World");
// }

// let x = document.getElementById("first-image");
// let y = document.getElementById("second-image");

// function changer() {
//     x.src = "./Images/zakat.PNG" ;
// }
// function reverter () {
//     y.src = "./Images/daily-food.PNG" ;
//}

// let x = document.getElementById("picture1");

// function change ()  {
//     x.src = "./Images/zakat.PNG" ;
// }
// function back () {
//     x.src = "./Images/daily-food.PNG"  ;
// }

// let change = document.getElementById("div");

// function ch () {
//     change.style.backgroundColor = "#f00" ;
//     change.style.height = "120px" ;
//     change.style.width = "120px" ;    
// }

// function ch(El) {
//     if(El.style.backgroundColor === "black" || El.style.backgroundColor === "") {
//         El.style.backgroundColor = "red" ;
//     }
//     else {
//         El.style.backgroundColor = "black" ;
//     }
// }

// let x = document.getElementById("first-image")
// function start () {
//     x.src = "./Images/zakat.PNG" ;
// }
// function end () {
//     x.src = "./Images/daily-food.PNG" ;
// }


// let x = document.getElementById("form1");
// let y = document.getElementById("form2");

// function start () {
//     x.style.backgroundColor = "black" ;
//     x.style.fontFamily = "monospace" ;
//     x.style.color = "beige" ;
//     x.style.borderRadius = "20px" ;
//     x.style.fontSize = "20px"
// }

// function stop () {
//     x.style.backgroundColor = "white" ;
//     x.style.fontFamily = "san-serif" ;
//     x.style.color = "black" ;
//     x.style.borderRadius = "0px" ;
//     x.style.fontSize = "16px" ;

//     let userInput = x.value ;

//     if(userInput.toLowerCase() === "karachi") {
//         y.value = "Sindh" ;
//     } else if(userInput.toLowerCase() === "lahore") {
//         y.value = "Punjab" ;
//     } else if(userInput.toLowerCase() === "peshawar") {
//         y.value =  "KPK" ;
//     } else if(userInput.toLowerCase() === "quetta") {
//         y.value = "Balochistan" ;
//     } 
    
//     let capitalLetter = x.value[0] ;
//     let firstPart = capitalLetter.toUpperCase() ;
//     let smallLetter = userInput.slice(1);
//     let secondPart = smallLetter.toLowerCase() ;
//     x.value = firstPart + secondPart ;
// }

// let x = document.getElementById("first");
// function start() {
//     x.src = "./Images/zakat.PNG" ;
//     x.style.cursor = "Pointer" ;
// }
// function stop () {
//     x.src = "./Images/daily-food.PNG" ;
// }

// let y = document.getElementById("second");
// function go() {
//     y.src = "./Images/daily-food.PNG" ;
//     y.style.cursor = "Pointer"  ;
// }
// function back () {
//     y.src = "./Images/zakat.PNG" ;
// }
// let array = ["lIOn" , "PanDA" , "moNkey" , "GroIlLA" , "blaCK PENther"];
// for(let i = 0; i < array.length; i++) {
//     let smaller = array[i].toLowerCase().split(" ") ;
//     for(let j = 0; j < smaller.length; j++) {
//         smaller[j] = smaller[j].charAt(0).toUpperCase() + smaller[j].slice(1);
//     }
//     let finalText = smaller.join(" ");
//     console.log((i + 1) + " - " + finalText);
// }


// let year = new Date() ;
// let month = (year.getMonth());
// let months = ["January" , "Feburary" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
// let curruntMonth = months[month];
// console.log(curruntMonth);

// let y = new Date() ;
// let year = y.getMonth();
// console.log(year);
// let update =  String(year).padStart(2 , "0");
// console.log(update);

// let numbers = [34 , 56 , 85 , 11 , 23 , 45 , 1 , 45];
// console.log(numbers);
// let accending = numbers.sort((a , b) => a - b);
// console.log(accending);
// let decending = numbers.sort((a , b) => b - a);
// console.log(decending);


// let x = document.getElementById("hi");
// const first = () => {
//     let pehla = document.getElementById("form1").value ;
//     let dosra = document.getElementById("form2").value ;
//     let teesra = document.getElementById("form3").value ;
    
//     let o = String(pehla).toLowerCase();
//     let one = o.charAt(0).toUpperCase() + o.slice(1) ;

//     let t = String(dosra).toLowerCase() ;
//     let two = t.charAt(0).toUpperCase() + t.slice(1);

//     let th = String(teesra).toLowerCase() ;
//     let three = th.charAt(0).toUpperCase() + th.slice(1);

//     return {
//         _first : one, 
//         _second : two + " Topping", 
//         _third : three + " Topping",
//     } 
// }

// const sum = () => {
//     let upper = first() ;
//     let output = "Your " + upper._first + " Pizza With " + upper._second + " And " +  upper._third + " Is Ready !" ;
//     console.log(output)
// }

// let x = document.getElementById("hi");

// const sum = () => {
//     x.style.border = "20px solid black" ;
//     x.style.borderRadius = "20px" ;
//     x.style.display = "inline-block" ;
//     x.style.animation = "spin 3s ease" ; 
//     x.style.animation = "theme 2s linear "
// }

// let x = document.getElementById("first");
// let images = ["./Images/daily-food.PNG" , "./Images/facebook.png" , "./Images/it.PNG" , "./Images/youtube.png" , "./Images/zakat.PNG"];
// let index = 0 ;
// const imageChanger = () => {
//     index++ ;
//     if(index >= images.length) {
//         index = 0 ;
//     }
//     x.src = images[index];
// }


// let x = document.getElementById("paragraph");
// let y = document.getElementById("changing");
//     y.addEventListener("click" , function () {
//         x.innerHTML = "You Pressed The Button !" ;
//     }) ;

// let headH1 = document.getElementById("heading");

// headH1.addEventListener("mouseover" , function () {
//     headH1.style.color = "red" ;
//     headH1.style.cursor = "pointer"
// })
// headH1.addEventListener("mouseout" , function () {
//     headH1.style.color = "black" ;
// })


// let inputSec = document.getElementById("input-sec");

// inputSec.addEventListener("keydown" , function (event) {
//     let x = (event.key);
//         console.log("Key : " + x) ;    
// })

// let inputSec = document.getElementById("input-sec");

// inputSec.addEventListener("input" , function (event) {
//     let wantToPrint = ("Abhi Likha " , event.target.value);
//     console.log(wantToPrint);
// })

// let inputSec = document.getElementById("input-sec");

// inputSec.addEventListener("input" , (e) => {
//     let printIt = ("You Write : " + e.target.value);
//     console.log(printIt);
// })

// let inputSec = document.getElementById("input-sec");

// inputSec.addEventListener("focus" , function () {
//     inputSec.style.backgroundColor = "black" ,
//     inputSec.style.color = "white" ;
// }) ;

// inputSec.addEventListener("input" , (e) => {
//     let x = ("You Write : " + e.target.value) ;
//     console.log(x);
// })
// inputSec.addEventListener("blur" , function () {
//     inputSec.style.backgroundColor = "white" ;
//     inputSec.style.color = "black" ;
// })

// let inputSec = document.getElementById("input-sec");

// inputSec.addEventListener("keydown" , (e) => {
//     console.log("you press key");
// })

// let inputSec = document.getElementById("input-sec");
// inputSec.addEventListener("keyup" , (e) => {
//     console.log("you press key")
// })

// let inputSec = document.getElementById("input-sec");
// inputSec.addEventListener("keypress" , (e) => {
//     console.log("you press key ");
// })


// let card = document.getElementById("flipCard");

// card.addEventListener("click", function () {
//  //   card.classList.toggle("flipped");
// });



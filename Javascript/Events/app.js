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


let x = document.getElementById("form1");
let y = document.getElementById("form2");

function start () {
    x.style.backgroundColor = "black" ;
    x.style.fontFamily = "monospace" ;
    x.style.color = "beige" ;
    x.style.borderRadius = "20px" ;
    x.style.fontSize = "20px"
}

function stop () {
    x.style.backgroundColor = "white" ;
    x.style.fontFamily = "san-serif" ;
    x.style.color = "black" ;
    x.style.borderRadius = "0px" ;
    x.style.fontSize = "16px" ;

    let userInput = x.value ;

    if(userInput.toLowerCase() === "karachi") {
        y.value = "Sindh" ;
    } else if(userInput.toLowerCase() === "lahore") {
        y.value = "Punjab" ;
    } else if(userInput.toLowerCase() === "peshawar") {
        y.value =  "KPK" ;
    } else if(userInput.toLowerCase() === "quetta") {
        y.value = "Balochistan" ;
    } 
    
    let capitalLetter = x.value[0] ;
    let firstPart = capitalLetter.toUpperCase() ;
    let smallLetter = userInput.slice(1);
    let secondPart = smallLetter.toLowerCase() ;
    x.value = firstPart + secondPart ;
}


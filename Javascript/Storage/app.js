// let age = 20 ;
// let x = age >= 18 ? "Adult" : "Kid" ;
// console.log(x);

// let ag = prompt("Enter Your Age :");
// let isTrue = false ;
// let result = ag >= 18 ? isTrue = true : isTrue ;
// console.log(result);


let x = document.getElementById("first");
let y = document.getElementById("second");
let z = document.getElementById("third");

let curruntTime = new Date () ;
let hour = curruntTime.getHours();
let minute = curruntTime.getMinutes();
let second = curruntTime.getSeconds();

setInterval(function() {


x.innerHTML = hour + ":" ;
y.innerHTML = minute + ":" ;
z.innerHTML = second ;

if(hour > 12) {
    x.innerHTML = hour - 12 +  ":" ;
}
if(second <= 9) {
    z.innerHTML = "0" + second ;
}
if(minute <= 9) {
    y.innerHTML = "0" + minute + ":" ;
}
} , 100);


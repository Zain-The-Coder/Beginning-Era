// function doctor () {
//     console.log( "Welcome ! " +  "Patient" + " " + "Your Appointment On Night.");
// }
// doctor();

// function doctor (time) {
//     let x = ("Your " + time + " Is Ready");
//     console.log(x);
// }
// doctor("Breakfast");
// doctor("Lunch");
// doctor("Dinner");

// let a = +prompt("Enter 1st Number :");
// let b = +prompt("Enter 2nd Number :");
// function add () {
//     console.log(a + b);
// }
// add();

// function eating (food , time) {
//     console.log("Your " + food + " Is Ready For " + time);
// }
// eating("Biryani" , "Breakfast");
// eating("Daal Chawal" , "Lunch" );
// eating("Chicken Tikka " , "Dinner");

// function roza (clock , time , phase) {
//     console.log(clock + " Is The " + phase + " Time Of " + time);
// }
// roza ("4:15" , "Sehri" , "Ending");
// roza ("7:26" , "Iftari" , "Starting");

// function add (a , b) {
//     console.log (a + b);
// }
// let a = +prompt("Enter a number :");
// let b = +prompt("Enter a number : ");
// add ( a , b )

// add (a , b);

// function table () {
//     console.log(tno + " x " + ++i + " = " + tno*i);
// }
// let tno = prompt("Enter Any Table Number :");
// let i = 0;

// table();
// table();
// table();
// table();
// table();
// table();
// table();
// table();
// table();
// table();

// function sum (a , b) {
//     let x = (a + b);
//     return x ;
// }
// function add (a , b) {
//     let addition = sum(a , b);
//     console.log(addition);
// }
// add (5 , 7)




// function get () {
//     let n = 5;
//     return n;
// }

// function multiply (value) {
//     console.log(value * 10);
// // }

// let number = get ();   // return zaroori
// multiply (number);


// function taking (a , b) {
//     let add = (a + b);
//     return add ;
// }
// function printing (a , b) {
//     let x = taking(a , b);
//     return x ;
// }
// console.log(printing(4 , 7));

// function calculateTax(price) {
//     return price * 0.1;
// }

// function showBill(price) {
//     let tax = calculateTax(price);  // Ek function se tax mil gaya
//     console.log("Total Bill: " + (price + tax));
// }

// showBill(100);



// function salary (amount) {
//     let x = (amount  * 0.1);
//     return x ;
// }
// function calculateTax (amount) {
//     let y = salary(amount);
//     return y ;
// }
// let z = calculateTax (prompt("Enter your Salary :"));
// console.log("Your Deducted Income Tax is :" + z);

// function print (text) {
//     console.log(text)
// }
// print("hello world")

// function print (text) {
//     return text;

// }
// let x = print("Hello World");
// console.log(x)

// function number (yourNumber) {
//     let x = (yourNumber + 7);
//     let y = (yourNumber * 7);
//     let z = (yourNumber / 7);
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// number ( +prompt("Enter Your Number :"));

// function number (usernum) {
//     let x = (usernum + 10);
//     let y = (usernum * 10);
//     let z = (usernum / 10);
//     return [ x , y , z]
// }
// let n = +prompt("Enter Any Number : ");
// let ans = number(n);
// console.log("10 Is Add In Your Number " + ans[0]);
// console.log("Multiply Your Number By 10 " + ans[1]);
// console.log("Divide Your Number By 10" + ans[2]);

// function number (userNum){
//     let x = (userNum + 10);
//     let y = (userNum * 10);
//     let z = (userNum / 10);
//     return[x , y , z]
// }
// let xm = +prompt("Enter A Number")
// console.log(number(xm) [0]);
// console.log(number(xm) [1]);
// console.log(number(xm) [2]);

// function calculation (userInput1 , userInput2) {
//     let w = (userInput1 + userInput2);
//     let x = (userInput1 - userInput2);
//     let y = (userInput1 * userInput2);
//     let z = (userInput1 / userInput2);
//     return[w , x , y , z]; 
// }
// let userInput1 = +prompt("Enter First Number :");
// let userInput2 = +prompt("Enter Second Number : ");
// let firstFunction = calculation(userInput1,userInput2);
// function perfomance (userInput1 , userInput2) {
//     let yo = firstFunction;
// console.log("The Addition Of Two Numbers Is " + yo[0]);
// console.log("The Substraction Of Two Numbers Is " + yo[1]);
// console.log("The Multiplication Of Two Numbers Is " + yo[2]);
// console.log("The Division Of Two Numbers Is " + yo[3]);
// }
// perfomance();

// function cal (u1 , u2) {
//     let w = (u1 + u2);
//     let x = (u1 - u2);
//     let y = (u1 *  u2);
//     let z = (u1 / u2);
//     return[w , x , y , z];
// }
// function per (u1 , u2) {
//     console.log(cal(u1 , u2)[0]);
//     console.log(cal(u1 , u2)[1]);
//     console.log(cal(u1 , u2)[2]);
//     console.log(cal(u1 , u2)[3]);
// }
// per(14 , 2)

// function makePizza (base , topping1 , topping2) {
//     let x = base
//     let y = topping1;
//     let z = topping2;
//     return[x , y , z];
// }

// let first = prompt("Enter Pizza Base :");
// let second = prompt("Enter First Topping");
// let third = prompt("Enter Second Topping :");

// function donePizza(base , topping1 , topping2) {
//     let pizza = makePizza(base , topping1 , topping2);
//     let done = console.log("Your Pizza " + pizza[0] + " With " + pizza[1] + " and "
//         + pizza[2] + " Is Ready ");
//         return done ;
// }
// donePizza(first, second , third);

// function speed (distance , time) {
//     let x = distance;
//     let y = time;
//     return[x , y];
// } 
// let d = prompt("Enter Distance Covered By Object :");
// let t = prompt("Time Taken By Object : ");
// function calculation  (distance , time) {
//     let v = console.log("The Speed Of Object Is " + (d / t));
// }
// calculation(d,t);

function celciusConverter () {
    let c = (f - 32) * 5 / 9;
    console.log("Your Temperature In Celcius Is :" + c);
}
let f = prompt("Enter Temperature In Farenheit :");
celciusConverter(f);

function farenheitConverter () {
    let f = (c * 9/5) + 32
    console.log("Your Temperature In Farenheit Is :" + f);
}
let c = prompt("Enter Temperature In Celcius :");
farenheitConverter(c);
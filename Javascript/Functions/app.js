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


function calculateTax (salary) {
    let x = (salary * 0.1);
    return x ;
}

function answer (salary) {
    let tax = calculateTax(salary);
    console.log("Your Income Tax Which You Paid Is :" + tax);
}
answer(prompt("Enter Your Salary :"));


// function calculateTax(price) {
//     return price * 0.1;
// }

// function showBill(price) {
//     let tax = calculateTax(price);  // Ek function se tax mil gaya
//     console.log("Total Bill: " + (price + tax));
// }

// showBill(100);
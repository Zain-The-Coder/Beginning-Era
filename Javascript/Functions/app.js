// function doctor () {
//     console.log( "Welcome ! " +  "Patient" + " " + "Your Appointment On Night.");
// }
// doctor();

// function doctor (time) {
//     console.log("Your " + time + " Is Ready");
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

// function add (a , b) {
//     console.log(a + b)
// }
// add (+prompt("Enter 1st Number :"), +prompt("Enter 2nd Number :"));

function get () {
    let n = 5;
    return n;
}

function multiply (value) {
    console.log(value * 10);
}

let number = get ();   // return zaroori
multiply (number);




// const foo = () => { return (10) };

// console.log(foo())

// or

// const foo = () => 10;

// console.log(foo())

// or

// const foo = _ => 10;

// console.log(foo())

// or

// const foo = (value) => { console.log(value) };

// foo(10)

// or

// const foo = value => console.log(value);

// foo(10)

// or

// const foo = (num1 = 6, num2 = 4) => { console.log(num1 + num2) };

// foo()

// or

// const foo = (value, ...rest) => { console.log(value + rest) };

// foo(2, 2 + 2 + 2 + 2)
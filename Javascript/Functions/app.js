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


// function celciusConverter () {
//     let c = (f - 32) * 5 / 9;
//     console.log("Your Temperature In Celcius Is :" + c);
// }
// let f = prompt("Enter Temperature In Farenheit :");
// celciusConverter(f);

// function farenheitConverter () {
//     let f = (c * 9/5) + 32
//     console.log("Your Temperature In Farenheit Is :" + f);
// }
// let c = prompt("Enter Temperature In Celcius :");
// farenheitConverter(c);

// function take (base, topping1 , topping2) {
//     let size = base;
//     let top1 = topping1 + " topping ";
//     let top2 = topping2 + " topping "; 
//     return{
//         base:size,
//         topping1:top1,
//         topping2:top2,
//     }
// }
// let pizzaBase = prompt("Enter your Pizza Base :");
// let firstTopping = prompt("Enter 1st Topping :");
// let secondTopping = prompt("Enter 2nd Topping :");

// function done (base , topping1 , topping2) {
//     let ingredients = take(base , topping1 , topping2);
//     console.log(" Your " + ingredients.base + " Pizza With " +  ingredients.topping1 
//     + " and " + ingredients.topping2 + " Is Ready ");
// }
// done (pizzaBase , secondTopping , firstTopping)


// function buildStudent () {
//     let userName = prompt("Enter Your Name :");
//     let firstMarks = +prompt("Enter English Marks Out Of 100 :");
//     let secondMarks = +prompt("Enter Urdu Marks Out Of 100 :");
//     let thirdMarks = +prompt("Enter Math Marks Out Of 100 :") ;
//     let averageMarks = ((firstMarks + secondMarks + thirdMarks) / 3);
//     if(averageMarks >= 80) {
//         console.log("Welcome ! " + userName);
//         console.log("Your Average Marks Are " + averageMarks);
//         console.log("You Got A Grade !");
//     } else if (averageMarks >= 60) {
//         console.log("Welcome ! " + userName);
//         console.log("Your Average Marks Are " + averageMarks);
//         console.log("You Got B Grade !");
//     } else {
//         console.log("Welcome ! " + userName);
//         console.log("Your Average Marks Are " + averageMarks);
//         console.log("You Have Failed");
//     }
// }
// buildStudent();


// // 

// function buildStudent (userName , marks1 , marks2 , marks3) {
//     let studentName = userName ;
//     let averageMarks = ((marks1 + marks2 + marks3) / 3);
//     let grade ;
//     if (averageMarks >= 80) {
//         grade = "You Got A Grade !";
//     } else if (averageMarks >= 60) {
//         grade = "You Got B Grade !" ;
//     } else {
//         grade = "You Have Failed !" ;
//     }
//     return [studentName , averageMarks.toFixed(1) , grade]
// }
// let userName = prompt("Enter Your Name :");
// let m1 = +prompt("Enter Your English Marks :");
// let m2 = +prompt("Enter Your Urdu Marks :");
// let m3 = +prompt("Enter Your Math Marks :");


// function resultPrinter (userName , marks1 , marks2 , marks3) {
//     let studentInfo = buildStudent(userName , marks1 , marks2 , marks3);
//     let p1 = document.getElementById("firstLine");
//     let p2 = document.getElementById("secondLine");
//     let p3 = document.getElementById("thirdLine");
//     p1.innerHTML = "Welcome " + studentInfo[0];
//     p2.innerHTML = "Your Average Marks Is " + studentInfo[1];
//     p3.innerHTML =  studentInfo[2] ;
// }
// resultPrinter(userName , m1 , m2 , m3);

// function generateStudent (userName , marks1 , marks2 , marks3 , marks4 , marks5) {
//     let studentName = userName ;
//     let marksArray = [marks1 , marks2 , marks3 , marks4 , marks5];
//     let averageMarks = ((marksArray[0] + marksArray[1] + marksArray[2] + marksArray[3] + marksArray[4]) / 5);
//     let grade;
//     if (averageMarks >= 80) {
//         grade = "You Got A Grade !" ;
//     } else if (averageMarks >= 60) {
//         grade = "You Got B Grade !";
//     } else {
//         grade = "You Have Failed !" ;
//     }
//     let percentage = (((marksArray[0] + marksArray[1] + marksArray[2] + marksArray[3] + marksArray[4]) / 500) * 100 ) + " % " ;
//     return {
//         userName : studentName ,
//         average : averageMarks.toFixed(1) ,
//         Grade : grade ,
//         percent : percentage ,
//     }
// }
// let studentName = prompt("Enter Your Name :");
// let m1 = +prompt("Enter Your English Marks :");
// let m2 = +prompt("Enter Your Urdu Marks :");
// let m3 = +prompt("Enter Your Math Marks :");
// let m4 = +prompt("Enter Your Chemistry Marks :");
// let m5 = +prompt("Enter Your Physics Marks :");

// function resultPrinter (userName , marks1 , marks2 , marks3 , marks4 , marks5) {
//     let calculateResult = generateStudent (userName , marks1 , marks2 , marks3 , marks4 , marks5);
//     let p1 = document.getElementById("firstLine");
//     let p2 = document.getElementById("secondLine");
//     let p3 = document.getElementById("thirdLine");
//     let p4 = document.getElementById("fourthLine");
//     p1.innerHTML = "Welcome " + calculateResult.userName + " ! " ;
//     p2.innerHTML = "Your Average Marks Are " + calculateResult.average ;
//     p3.innerHTML = "Your Percentage Is " + calculateResult.percent ;
//     p4.innerHTML = calculateResult.Grade ;
// }

// resultPrinter(studentName , m1 , m2 , m3 , m4 , m5);


// // userheight ko **1 inch = 0.0254 meter**  sy multiply



// function add (a , b) {
//     let x = (a + b) ;
//     return x;
// }
// console.log(add (3 , 4));

// function greetio () {
//     console.log("Hello World");
// }
// greetio();

// const greet = () => "Hello World !" ;
// console.log(greet());


// let text = "UniVERsity of kaRAchi" ;
// let x = text.toLowerCase().split(" ");
// for(let i = 0; i < x.length; i++) {
//     x[i] = x[i].charAt(0).toUpperCase() + x[i].slice(1);
// }
// let y = x.join(" ");
// console.log(y);

// let text = ["UniVERsity of kaRAchi" , "UniVERsity OF PEShawaR" , "UNIverSiTy Of QueTTA"];
// for(let i = 0; i < text.length; i++) {
//     let updatedText = text[i].toLowerCase().split(" ");
//     for(let j = 0; j < updatedText.length; j++) {
//         updatedText[j] = updatedText[j].charAt(0).toUpperCase() + updatedText[j].slice(1);
//     }
//     let finalText = updatedText.join(" ");
//     console.log(finalText);
// }

// let inputs = document.querySelectorAll(".input");

// function start(x) {
//     x.style.backgroundColor = "black" ;
//     x.style.color = "white" ;
//     x.style.borderRadius = "20px" ;
//     x.style.fontFamily = "monospace" ;
//     x.style.fontSize = "20px" ;
// }
// function end (x) {
//     x.style.backgroundColor = "white" ;
//     x.style.color = "black" ;
//     x.style.fontSize = "16px" ;
//     x.style.borderRadius = "0px" ;
//     x.style.fontFamily = "Ariel" ;
//     x.style.height = "16px"
// }

// let p = document.getElementById("printer");
// let a = document.getElementById("first");
// let b = document.getElementById("second");
// let c = document.getElementById("third"); 

// function inputTaker (a , b , c) {
//     return[a.value , b.value , c.value];
// }


// function press (a , b , c) {

//     if(!a || !b || !c) {
//     p.innerHTML = "Enter Above Fields"
//     return ;
//     }
    
//     let taking = inputTaker(a , b , c);
//     p.innerHTML = "Your " + taking[0] + " Pizza With " + taking[1] + " Topping and " + taking[2] + " Topping Is Ready !" ; 
// }


// function namer (names) {
//     function capital (names) {
//         let x = names.charAt(0).toUpperCase() + names.slice(1).toLowerCase() ;
//         return x ;
//     }
//     let greet = ("Hello " + capital(names));
//     return greet ;
// }

// console.log(namer("zain"))

// const greet = function namer (userName) {
//     function capitalism (uName) {
//         let x = uName.charAt(0).toUpperCase() + uName.slice(1).toLowerCase() ;
//         return x ;
//     }
//     let greeting = ("Hello " + capitalism(userName)) ;
//     return greeting ;
// }

// console.log(greet("zain"));

// const result = function resulter (totalMarks , obtMarks) {
//     function per (tm , om) {
//         let percen = (om / tm) * 100 ;
//         return percen.toFixed(2) ; 
//     }
//     function gra (percen) {
//         let answer = "" ;
//         if(percen >= 90) {
//             answer = "You Got A+ Grade ! " ;
//         } else if (percen >= 80) {
//             answer = "You Got A Grade !" ;
//         } else if(percen >= 70) {
//             answer = "You Got B Grade !" ;
//         } else if(percen >= 60) {
//             answer = "You Got C Grade !" ;
//         } else if(percen >= 50) {
//             answer = "You Got D Grade !" ;
//         } else {
//             answer = "Fail !" ;
//         }
//         return answer ;
//     }
//     let percentage = per(totalMarks , obtMarks);
//     let finalAnswer = ("Your Percentage Is " + percentage + "  " + gra(percentage));
//     return finalAnswer ;
// }

// console.log(result (1100 , 994));

// greet ();
// function greet () {
//     function gre () {
//     let x = console.log("hello World");
//     return x ;
//     }
//     let y = gre() ;
//     return y ;
// }

// const greet = (greeting) => {
//     console.log("Hello World" + greeting);
// }

// greet (" Zain") ;

// function addition ( a = 7 , b = 7) {
//     let add = (a + b) ;
//     return add ;
// }
// console.log(addition());

// const addition = function add(a = 14 , b = 15) {
//     let add = ( a + b) ;
//     console.log(add);
// }
// addition();

// const addition = (a = 67 , b = 33) => {
//     let add = (a + b) ;
//     return add ;
// }
// console.log(addition());


// function sum(nums) {
//  let x = nums.reduce((acc, val) => acc + val, 0);
//  return x ;
// }
// let nums = [1, 2, 3];
// console.log(sum(nums));


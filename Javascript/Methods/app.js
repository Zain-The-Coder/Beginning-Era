// // // let studentNames = ["Ali", "Sara", "Zain", "Hina", "Ahmed", "Fatima"];
// // // let studentMarks = [88, 95, 67, 32, 76, 45];
// // // let totalMarks = 100;
// // // let lastResult = [] ;
// // // for (i = 0; i < studentNames.length; i++) {
// // //     let percentage = ((studentMarks[i] / totalMarks) * 100);
// // //     let grade = "" ;
// // //     if(percentage >= 90) {
// // //         grade = "A+" ;
// // //     } else if(percentage >= 80) {
// // //         grade = "A" ;
// // //     } else if(percentage >= 70) {
// // //         grade = "B" ;
// // //     } else if(percentage >= 60) {
// // //         grade = "C" ;
// // //     } else if(percentage >= 50) {
// // //         grade = "D" ;
// // //     } else {
// // //         grade = "Fail" ;
// // //     }
// // //     lastResult.push(studentNames[i] + " - Marks : " + studentMarks[i] + " - Percentage : " + percentage + "%" 
// // //         + " - Grade : " + grade);
// // // }
// // // console.log("STUDNETS RESULT");
// // // console.log(lastResult.join("\n"));

// // // let studentNames = ["Ali", "Sara", "Zain", "Hina", "Ahmed", "Fatima"];
// // // let studentMarks = [88, 95, 67, 92, 76, 90];
// // // let totalMarks = 100;
// // // scholarShipResult = [] ;
// // // for (i = 0; i < studentNames.length; i++) {
// // //     let percentage = ((studentMarks[i] / totalMarks) * 100);
// // //     let result = "" ;
// // //     if(percentage >= 85) {
// // //         result = "You Are Eligible For Scholarship !";
// // //     } else {
// // //         result = "You Are Not Eligible For Scholarship !";
// // //     }
// // //     scholarShipResult.unshift(studentNames[i] + " - " +"Percentage : " + percentage + "%" + " - " + result);
// // // }
// // // console.log(scholarShipResult.join("\n"));


// // // let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// // // let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// // // let fullNames = [];
// // // let mm = 0;
// // // for (var i = 0; i < firstNames.length; i++) {
// // // fullNames.push(firstNames[i] + lastNames[i]);
// // // }
// // // console.log(fullNames);


// // // let studentNames = ["Ali", "Sara", "Zain", "Hina", "Ahmed", "Fatima"];
// // // let studentMarks = [88, 95, 67, 92, 76, 90];
// // let studentData = [ 
// //     { Name : "Ali" , Marks : 88 ,},
// //     { Name : "Sara" , Marks : 95 ,},
// //     { Name : "Zain" , Marks : 67 ,},
// //     { Name : "Hina" , Marks : 92 ,},
// //     { Name : "Ahmed" , Marks : 76 ,},
// //     { Name : "Fatima" , Marks : 90 ,}
// // ]
// // let totalMarks = 100 ;
// // for (let i = 0; i <studentData.length; i++) {
// //     let percentage = ((studentData[i].Marks / totalMarks) * 100);
// //     studentData[i].percentage = percentage.toFixed(2);
// //     if(percentage >= 90) {
// //         studentData[i].grade = "A+" ;
// //     } else if(percentage >= 80) {
// //         studentData[i].grade = "A";
// //     } else if(percentage >= 70) {
// //         studentData[i].grade = "B" ;
// //     } else if(percentage >= 60) {
// //         studentData[i].grade = "C" ;
// //     } else if(percentage >= 50) {
// //         studentData[i].grade = "D" ;
// //     } else {
// //         studentData[i].grade = "Fail";
// //     }
// // console.log(studentData[i].Name + " - Marks : " + studentData[i].Marks + " - Percentage : " + studentData[i].percentage + " - Grade : " + studentData[i].grade);
// // }

// // let employees = [
// //     { name: "Usman", score: 78 },
// //     { name: "Areeba", score: 91 },
// //     { name: "Kashif", score: 65 },
// //     { name: "Nimra", score: 45 },
// //     { name: "Bilal", score: 84 },
// //     { name: "Huda", score: 99 }
// // ];

// // let totalScore = 100;

// // for (let i = 0; i < employees.length; i++) {
// //     let percentage = ((employees[i].score / totalScore) * 100);
// //     employees[i].percentage = percentage.toFixed(2);
// //     if(percentage >= 90) {
// //         employees[i].grade = "⭐ Excellent " ;
// //     } else if(percentage >= 80) {
// //         employees[i].grade = " 🥇 Very Good " ;
// //     } else if(percentage >= 70) {
// //         employees[i].grade = " 🥈 Good " ;
// //     } else if(percentage >= 60) {
// //         employees[i].grade = " 🟡 Average " ;
// //     } else if(percentage >= 50) {
// //         employees[i].grade = "⚠️ Needs Improvement " ;
// //     } else {
// //         employees[i].grade = " ❌ Poor "
// //     }
// //     console.log(employees[i].name + " - Score : " + employees[i].score + " - Percentage : " 
// //         + percentage + "%" + " - Grade : " + employees[i].grade);
// // }
// // let topPerformer = employees[0];
// // for (let i = 0; i < employees.length; i++) {
// //     if(employees[i].score > topPerformer.score); 
// //     topPerformer = employees[i];
// // }
// // console.log("👑 " + "THE TOP PERFORMER BETWEEN EMPLOYEES IS : " + topPerformer.name.toUpperCase());


// // https://youtu.be/B2AySOOwWJY?si=QmxjnzS_bpmQZqB5 ;

// // let products = [
// // {name : "Soap" , price : 120 , stock : 43 , sold : 30},
// // {name : "Detergent" , price : 210 , stock : 4 , sold : 32},
// // {name : "Shampoo" , price : 20 , stock : 20 , sold : 30},
// // {name : "Biscuit" , price : 40 , stock : 67 , sold : 7},
// // {name : "Oil" , price : 520 , stock : 87 , sold : 25},
// // {name : "Rice" , price : 340 , stock: 0 , sold : 20},
// // {name : "floar" , price : 90 , stock : 120 , sold : 90},
// // ]
// // for (let i = 0; i < products.length; i++) {
// //     let totalEarning = (products[i].price * products[i].sold);
// //     products[i].totalEarning = totalEarning ;
// //     if(products[i].stock < 10) {
// //         products[i].stockStatus = " Out Of Stock ! " ;
// //     } else {
// //         products[i].stockStatus = " In Stock !" ;
// //     }
// //     console.log("Product Name : " + products[i].name + " - Price : " + products[i].price + 
// // " - Remaining Stock : " + products[i].stock + " - Sold Out " + products[i].sold + " - Total Earning " + 
// // totalEarning + " - Stock Status : " + products[i].stockStatus);
// // }
// //     let topSellingProduct = products[0];
// // for (i = 0; i < products.length; i++) {
// //     if(products[i].sold > topSellingProduct.sold) {
// //         topSellingProduct = products[i];
// //     }
// // }
// // console.log("THE TOP SELLING PRODUCT IS: " + topSellingProduct.name.toUpperCase() + 
// // " - Sold: " + topSellingProduct.sold);

// // let cities = ["Karachi" , "Islamabad" , "Lahore" , "Quetta" , "Peshawar"];
// // cities.splice(2, 3 , "Multan" , "Thatta" , "Hyderabad" );
// // console.log(cities);

// // let cities = ["Karachi" , "Islamabad" , "Lahore" , "Quetta" , "Peshawar"];
// // let favCities = cities.slice(1 , 2);
// // console.log(cities);
// // console.log(favCities);

// // CHAPTER 17 TO 20 ( TASKS );

// // let matrix = [
// //      ["z" , "a" , "i" , "n"],
// //      ["n" , "i" , "a" , "z"], 
// // ]
// // console.log(matrix[1][2]);

// // let thread = [
// //     [
// //     [0 , 1],
// //     [2 , 3],
// //     ],
// //     [
// //         [4 , 5],
// //         [6 , 7],
// //     ]
// //     [
// //         [8 , 9],
// //         [10 , 11]
// //     ]
// // ] 
// // console.log(thread[0][1][1]);

// // for (let i = 1; i <= 10; i++) {
// //     console.log(i);
// // }

// let x = +prompt("Enter Your Starting Number :");
// let y = +prompt("Enter The Ending Number :");
// let z = +prompt("Enter Your Table Number :");
// for (let i = x; i <= y; i++) {
//     console.log(z + " x " + i + " = " + (i*z));
// }

// function printer () {
//     let x = +document.getElementById("tableNumber").value;
//     let y = +document.getElementById("startingPoint").value;
//     let z = +document.getElementById("endingPoint").value;

//     let output = " " ;

//     for(let i = y; i <= z; i++) {
//         output += (x + " x " + i + " = " + (x * i) + "<br>"); 
//     }
//     let p1 = document.getElementById("tablePrinter");
//     p1.innerHTML = output ;
// }

// // let fruits = ["apple" , "banana" , "mango" , "bringal"];
// // fruits.pop([3]);
// // fruits.splice(2 , 0 , "pineapple" , "orange");
// // console.log(fruits);
// // for(let i = 0; i < fruits.length; i++) {
// //     console.log("Element At Index " + [i] + " Is " + fruits[i] );
// // }

// // let counting = ["Counting : "] ;
// // let reverseCounting = ["Reverse Counting : "] ;
// // let evenNumbers = ["Even Numbers : "] ;
// // let oddNumbers = ["Odd Numbers : "] ;
// // let series = ["Series : "] ;
// // for (let i = 1; i <= 15; i++) {
// //     counting.push(i);
// //     if(i % 2 === 0) {
// //         evenNumbers.push(i);
// //         series.push(i+ "k");
// //     } else {
// //         oddNumbers.push(i);
// //     }
// // }
// // for(let i = 15; i >= 1; i--) {
// //     reverseCounting.push(i);
// // }
// // console.log(counting);
// // console.log(reverseCounting);
// // console.log(evenNumbers);
// // console.log(oddNumbers);
// // console.log(series);

// // let numbers = [24 , 53 , 78 , 91 , 12];
// // let biggestNumber =  numbers[0] ;
// // for (let i = 0; i < numbers.length; i++) {
// //     if(biggestNumber ==!  numbers[0]) {
// //         biggestNumber = "The Biggest Number Is : " + numbers[0] ;
// //     } else {
// //         biggestNumber = "The Biggest Number Is : " + numbers[i] ;
// //     }
// // }
// // console.log(numbers);
// // console.log(biggestNumber);


// // let items = ["cake" , "apple pie" , "cookies" , "chips" , "patties"];
// // alert("Welcome To ABC BAKERS !");
// // let userItem = prompt("Enter The Time That You Want : ");
// // stock = false ;
// // for (let i = 0; i < items.length; i++) {
// //     if(items[i] === userItem) {
// //         stock = true ; 
// //         break ;
// //     }
// // } 
// // if(stock === true) {
// //     console.log("Your item Is Present In Our Bakery ! ");
// // } else {
// //     console.log("Sorry , We Have Not !");
// // }

// // let text =  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam, quam aut unde, ullam natus libero quo tenetur distinctio ut illo debitis facilis minus tempora, esse impedit provident quas incidunt. " ;

// // text = text.toLowerCase();
// // console.log(text);
// // let result = " " ;
// // let textUpper = true ;
// // for (let i = 0; i < text.length; i++) {
// //     let char = text[i] ;
// //     if(textUpper === true && char >= "a" && char <= "z") {
// //         result = result + char.toUpperCase() ;
// //         textUpper = false ;
// //     } else {
// //         result = result + char ;
// //     } 
// //     if(char === " ") {
// //         result = result + char.toLowerCase() ;
// //         textUpper = true ;
// //     }
// // }
// // console.log(result);

// let text =  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam, quam aut unde, ullam natus libero quo tenetur distinctio ut illo debitis facilis minus tempora, esse impedit provident quas incidunt. " ;

// // text = text.toLowerCase();
// // console.log(text);
// // let result = " " ;
// // let textUpper = true ;
// // for (let i = 0; i < text.length; i++) {
// //     if(textUpper === true && text[i] >= "a" && text[i] <= "z") {
// //         result = result + text[i].toUpperCase() ;
// //         textUpper = false ;
// //     } else {
// //         result = result + text[i] ;
// //     } 
// //     if(text[i] === " ") {
// //         result = result + text[i].toLowerCase() ;
// //         textUpper = true ;
// //     }
// // }
// // console.log(result);

// // let fruits = ["apple" , "banana" , "mango" , "bringal"];
// // fruits.pop();
// // let dummyFruits = fruits.slice(1 , 4);
// // dummyFruits.push("pineapple" , "gavava" , "peach");
// // console.log(dummyFruits);
// // let userFruit = prompt("Enter Your Fruit : ");
// // let resent = false ;
// // for (let i = 0; i < dummyFruits.length; i++) {
// //     if(userFruit.toLowerCase() === dummyFruits[i].toLowerCase()) {
// //         resent = true;
// //         break ;
// //     } 
// // }
// // if(resent) {
// //     console.log("Your Fruit Is Healthy !");
// // } else {
// //     console.log("Your fruit Is Not Healthy !");
// // }

// let months = ["monday" , "tuesday" , "wednesday" , "thursday" , "friday" , "saturday" , "sunday"];
// let userMonth = prompt("Enter Your busy day : ").toLowerCase() ;
// let busyDay = false ;
// userMonth = userMonth.toLowerCase();
// for (let i = 0; i < months.length; i++) {
//     if(userMonth.includes(months[i])) {
//         busyDay = true ;
//         break ;
//     } 
// }
// if(busyDay === true) {
//     console.log(userMonth + " Is Your Busy day ! ");
// } else {
//     console.log("Please Enter Valid Day Name !");
// }

// let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

// let userInput = prompt("Enter your busy day:").toLowerCase().trim();  // Clean input
// let busyDay = false;
// let matchedDay = "";

// for (let i = 0; i < days.length; i++) {
//     // Check if user input is part of actual day
//     if (days[i].includes(userInput) || userInput.includes(days[i])) {
//         busyDay = true;
//         matchedDay = days[i];
//         break;
//     }
// }

// if (busyDay) {
//     let formattedDay = matchedDay.charAt(0).toUpperCase() + matchedDay.slice(1);
//     console.log(formattedDay + " is your busy day!");
// } else {
//     console.log("Please enter a valid day name!");
// }


// let numbers = [24 , 53 , 78 , 91 , 12];
// console.log(numbers);
// let biggestNumber = numbers[0] ;
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > biggestNumber) {
//         biggestNumber = numbers[i];
// }
// }
// console.log("The Biggest Number Is " + biggestNumber);

// let numbers = [24 , 53 , 78 , 91 , 12];
// console.log("The Numbers Are : " + numbers.join(" - "));
// let smallNumber = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] < smallNumber) {
//         smallNumber = numbers[i];
//     }
// }
// console.log("The Smaller Number Is " + smallNumber);

// let items = ["cake" , "apple pie" , "cookies" , "chips" , "patties"];
// alert("Welcome To ABC BAKERS !");
// let userItem = prompt("Enter The Time That You Want : ");
// let available = false ;
// let result = " " ;
// for (let i = 0; i < items.length; i++) {
//     if(userItem.toLowerCase() === items[i].toLowerCase()) {
//         available = true ;
//         result = "Your Item Is present at " + [i] + " counter In Our Bakery !";
//         break ;
//     } else {
//         result = "Sorry !" ;
//     }
// }
// console.log(result);

// let months = ["jan" , "feb" , "mar" , "apr" , "may" , "jun"];
// let userMonth =   prompt("Enter Your Birth Month :");
// userMonth = userMonth.toLowerCase();
// userMonth = userMonth.slice(0 , 3);
// let birthMonth = months.indexOf(userMonth);
// if(birthMonth > -1) {
//     console.log("You Got The Discount !");
// } else {
//     console.log("You Are Not Achieve Discount !");
// }

// let months = ["jan" , "feb" , "mar" , "apr" , "may" , "jun"];
// let userMonth =   prompt("Enter Your Birth Month :");
// userMonth = userMonth.toLowerCase();
// userMonth = userMonth.slice(0 , 3);
// let discount =  false ;
// for (let i = 0; i < months.length; i++) {
//     if(userMonth === months[i]){
//         discount = true;
//         break ;
//     } 
// }
// if(discount === true) {
//     console.log("You Got The Discount !"); 
// } else {
//     console.log("Sorry !");
// }   

// let x = prompt("Enter Your Favorite Mobile Phone : ");
// console.log("My Favorite Mobile Phone Is :" + x);
// console.log("The Lenght Of String value is :" + x.length);

// let userCountry = prompt("Enter Your Country : ");
// let user = userCountry.indexOf("n");
// if(user <= -1) {
//     console.log("The Letter -N- Is Not Found In Your Input !")
// } else {
//     console.log("The User Country Is " + userCountry);
//     console.log("The Index Of -N- Is " + user);
// }

// let n = "Hello World" ;
// console.log(n.toUpperCase());
// console.log("The Last Index Of -L- Is : " + n.lastIndexOf("l"));

// let n = "abcdefghijklmnopqrstuvwxyz";
// console.log("The Index Of Z Is : " + n.indexOf("z"));

    // let firstName =  "Hafiz" ;
    // let lastname = "Zain" ;
    // let fullName = firstName.concat(" " , lastname);
    // console.log(fullName);

// let message = "Ali and Ahmed are brothers and they play cricket and football.";
// let update = message.replace(/and/g , "&");
// console.log(message);
// console.log(update);

// let stringNumber = "245" ;
// let number =  Number(stringNumber);
// console.log("Value:" + stringNumber + " \n " + "Data Type : String");
// console.log("Value:" + number + " \n " + "Data Type : Number");

// let userInput = prompt("Enter Your Item : ");
// console.log(userInput);
// let newInput = userInput.toUpperCase();
// console.log(newInput);

// let userInput = prompt("Enter Your Item : ");
// let changeChase = true ;
// let result = " " ;
// for (let i = 0; i < userInput.length; i++) {
// if(userInput) {
//     result = result + userInput[i].toUpperCase();
//     changeChase = false ;
// }
// }
// console.log(result);

// let text = "a quick  brown fox jumps over the lazy dog" ;
// let correct = false ;
// for (let i = 0; i < text.length; i++) {
//     let char = text.slice(i , i + 2);
//     console.log(char);
//     if(char === "  ") {
//         correct = true ;
//         break ;
//     }
// }
// if(correct === false) {
//     console.log("Your Information Is Correct !");
// } else{
//     console.log("Sorry !");

// let teslaa = prompt("Enter Your Text :");
// let result = "Your Text Is Correct ! " ;
// for (let i = 0; i < teslaa.length; i++) {
//     let char = teslaa.slice(i , i + 2);
//     console.log(char);
//     if(char === "  ") {
//         result = "Please Enter Your Text In Simple Way !" ;
//         break ;
//     } 
// }
// console.log(result);

// let userNumber = 56.86 ;
// console.log(userNumber);
// userNumber = userNumber.toString().replace("." , "");
// console.log(userNumber);

// let userNumber = 56.76 ;
// userNumber = Math.floor(userNumber); // Removing float point numbers
// console.log(userNumber);

// let items = ["cake" , "apple pie" , "cookies" , "chips" , "patties"];
// let x = prompt("Enter Your Item :");
// x = x.toLowerCase();
// let print = " " ;
// for (let i = 0; i < items.length; i++) {
//     if(items[i] === x) {
//         print = "Your Item Is Present At Index " + items.indexOf(x) + "In Our Bakery !" ;
//     } else {
//         print = "Sorry ! Your Item Is Not Availabe At Our Bakery !" ;
//     }
// }
// console.log(print);

// let fruits = ["apPLe" , "BaNAnA" , "GavAvA" , "MANGo" , "pEAch" , "wAteR MElon"];
// for (let i = 0; i < fruits.length; i++) {
//     let fruitName = fruits[i] ;
//     let firstLetter = fruitName.charAt(0).toUpperCase();
//     let dummyFruits = fruitName.slice(1).toLowerCase();
//     console.log(firstLetter + dummyFruits);
// }

 
// let animals = ["liON", "elEPHant", "zeBrA", "whiTE TIGEr", "giRAffE" , "blACK peNTHer"];
// for(let i = 0; i < animals.length; i++) {
//     let firstLetter = animals[i].charAt(0).toUpperCase();
//     let extraText = animals[i].slice(1).toLowerCase();
//     console.log(firstLetter + extraText);
// }

// let animals = ["liON", "elEPHant", "zeBrA", "whiTE TIGEr", "giRAffE" , "blACK peNTHer"];
// for (let i = 0; i < animals.length; i++) {
//     let updateAnimal = animals[i].toLowerCase().split(" ");
//     for (let j = 0; j < updateAnimal.length; j++) {
//         updateAnimal[j] = updateAnimal[j].charAt(0).toUpperCase() + updateAnimal[j].slice(1).toLowerCase();
//     }
//     let lastResult = updateAnimal.join(" ");
//     console.log((i + 1) + " - " + lastResult);
// }

// let items = ["cookies" , "rusk" , "cake" , "paties" , "chips" , "nimco"];
// let userItem = prompt("Enter The Item You Want To Buy :");
// let present = false ;
// let index = 0;
// let userInput = userItem.toLowerCase();
// for (let i = 0; i < items.length; i++) {
//     if(items[i] === userInput) {
//         present = true ;
//         break ;
//     }
//     index = i ;
// }
// if(present) {
//     console.log("Your Item Is Present At Index " + index + " In Our Bakery !");
// } else {
//     console.log("Sorry , Your Item Is Not Available !");
// }

// let userPassword = prompt("Enter Your Password :");
// if(/^[0-9]/.test(userPassword)) {
//     console.log("You Cannot ❌ Use Number As A Starter Of Password !");
// } else if(userPassword.length < 6) {
//     console.log("Please Enter 6 Digits Password !");
// } else if(!/^[a-zA-Z0-9. ]+$/.test(userPassword)) {
//     console.log("Invalid Password. Kindly Remove ❌ Special Character From Your Password !");
// } else {
//     console.log("✅ Your Password Has Saved !");
// }

// let text = "This Is A Stupid Product ! " ;
// text = text.replace("Stupid" , "******");
// console.log(text);

// let message = "This is a stupid Product. you guys are stupid.";
// message = message.replace(/stupid/g , "******");
// console.log(message);

let para = "a quick World War II brown fox jumps over the lazy dog.a quick World War II brown fox jumps over the lazy dog.a quick World War II brown fox jumps over the lazy dog.a quick World War II brown fox jumps over the lazy dog.a quick World War II brown fox jumps over the lazy dog.a quick World War II brown fox jumps over the lazy dog.a quick World War II brown fox jumps over the lazy dog.a quick World War II brown fox jumps over the lazy dog.";
let replacetext = "The Second World War" ;
for (let i = 0; i < para.length; i++) {
    let advancePara = para.slice(i , i + 12);
    console.log(advancePara);
    if(advancePara === "World War II") {
        para = para.slice(0 , i);
    }
    console.log(para)
}
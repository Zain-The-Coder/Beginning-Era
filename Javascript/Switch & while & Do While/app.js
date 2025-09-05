// let day = prompt("enter day number");
// let userDay = Number(day);

// switch (userDay) {
//     case 1 :
//     console.log("Monday") ;
//     break ;
//     case 2: 
//     console.log("Tuesday");
//     break ;
//     case 3 : 
//     console.log("Wednesday") ;
//     break ;
//     default : 
//     console.log("Our Limit Is Finish")
// }

function calculator (operator , a , b) {
    switch (operator) {

        case "+" : 
        return a + b ;
        break ;

        case "-" : 
        return a - b ;
        break ;

        case "*" :
            return a * b ;
            break ;

    }
}

console.log(calculator(3 , 4 , "*"))
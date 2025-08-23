// function moveForward () {
//     console.log("played")
// }

// setInterval(moveForward, 800000);

let sepcialPara = document.getElementsByClassName("special");
let hello = document.getElementsByClassName("notSpecial");

function changer () {
    let isChanged = false ;
    if(!isChanged) {
    for(let i = 0 ; i < sepcialPara.length; i++) {
        let para = sepcialPara[i] ;
        para.style.backgroundColor = "black" ;
        para.style.color = "white" ;
        para.style.fontSize = "20px" ;
        para.style.fontFamily = "monospace" ;
        para.style.padding = "23px" ;
        para.style.borderRadius = "20px"
        isChanged = true ;
        }
    }  else  {
    for(let i = 0 ; i < sepcialPara.length; i++) {
        let paras = sepcialPara[i] ;
        paras.style.backgroundColor = "red" ;
        paras.style.color = "white" ;
        paras.style.fontSize = "san-serif" ;
        paras.style.borderRadius = "20px" ;
        paras.style.padding = "23px" 
        paras.style.fontSize = "20px" ;
        isChanged = false ;
    }
    }
}

// function hel ()  {
//     for(let i = 0 ; i < hello.length; i++) {
//         let paras = hello[i] ;
//         paras.style.backgroundColor = "red" ;
//         paras.style.color = "white" ;
//         paras.style.fontSize = "san-serif" ;
//         paras.style.borderRadius = "20px" ;
//         paras.style.padding = "23px" 
//         paras.style.fontSize = "20px" ;
//     }
// }
setTimeout(changer , 1000);

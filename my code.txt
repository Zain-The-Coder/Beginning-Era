let userName = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");
let userPassword = document.getElementById("user-password");
let message = document.getElementById("message");
let user = document.getElementById("username");
let spiner = document.getElementById("loader");
let task = document.getElementById("task-taker");
let ulEl = document.getElementById("task-list")
const db = firebase.firestore();


function signUp () {
  localStorage.setItem("userName" , userName.value);
  spiner.style.visibility = "visible" ;
  firebase.auth().createUserWithEmailAndPassword(userEmail.value, userPassword.value)
  .then((userCredential) => {
    let user = userCredential.user;
    spiner.style.visibility = "hidden" ;
    console.log("user added");
    return firebase.auth() ;
  })
  .catch((error) => {
    //let errorCode = error.code;
    let errorMessage = error.message;
    spiner.style.visibility = "hidden" ;
    let errorOccured = String(errorMessage).slice(9)
    message.innerHTML = errorOccured;
  });
}

function signIn () {
  localStorage.setItem("userName" , userName.value);
  spiner.style.visibility = "visible" ;
  firebase.auth().signInWithEmailAndPassword(userEmail.value, userPassword.value)
  .then((userCredential) => {
   // let user = userCredential.user;
    console.log("yes, user found");
    spiner.style.visibility = "hidden" ;
    gotoHome() ;
    return firebase.auth() ;
  })
  .catch((error) => {
    //let errorCode = error.code;
    let errorMessage = error.message;
    spiner.style.visibility = "hidden" ;
    let errorOccured = String(errorMessage).slice(9)
    message.innerHTML = errorOccured;  });
}

function signOut () {
  spiner.style.visibility = "visible" ;
firebase.auth().signOut()
  .then(() => {
    gotoindex() ;
    localStorage.removeItem("userName");
    spiner.style.visibility = "hidden" ;
    return firebase.auth() ;
}).catch((error) => {
  console.log(error);
});
}

function gotoindex () {
  window.location.href = "./index.html"
}
function gotoHome () {
  window.location.href = "./home.html" ;
}



let currentUser = null ;

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    currentUser = user ;
    console.log("user signed in " , user.uid) ;
  } else {
    currentUser = null ;
    console.log("No User Found !") ;
  }
})

function refresh () {
    user.innerHTML = localStorage.getItem("userName");
    db.collection("tasks").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id , doc.data());
          let liEl = document.createElement("li");
          liEl.textContent = doc.data().Task;
          ulEl.appendChild(liEl);
    });
});
}
function saverTask () {
    if(currentUser) {
db.collection("tasks").add({
  Task : task.value ,
  Uid : currentUser.uid ,
  Name : localStorage.getItem("userName"),
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    let liEl = document.createElement("li");
    liEl.textContent = task.value ,
    ulEl.appendChild(liEl);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
  } else {
   console.error("No user is signed in");
   alert("Please sign in first to add a task.");
 }
}
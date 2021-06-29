import firebase from "./firebase";
import auth from "./firebase"


const auth= firebase.auth();

export function login(){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e=>alert(e.message));
    console.log("hello Theo")
}

//active user to homepage token
//1//03mt-k0RpuzP8CgYIARAAGAMSNwF-L9IrnZ4dnmGCsW98KwQyK4z9nDb3zdQdLhoPh-Iw_Cr3Mtzb0yr42BLzHZLGVtJLoPaSPxU
auth.onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+emailField);

    }else{
      alert("No Active user Found")
    }
  })
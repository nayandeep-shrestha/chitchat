import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseConfig from "./config/firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

function Glogin(){
    signInWithPopup(auth, provider)
        .then((result)=>{
            console.log(result.user);
        }).catch((error)=>{
            console.log(error);
        })
}

export default Glogin;
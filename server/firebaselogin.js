import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseConfig from "./config/firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

async function GLogin(){
    return signInWithPopup(auth, provider)
        .then((result)=>{
            return {
                displayName: result.user.displayName,
                email: result.user.email,
                emailVerified: result.user.emailVerified,
            }
        }).catch((error)=>{
            console.log(error);
        })
}

export default GLogin;
'use client';
import { ToastContainer } from "react-toastify"
import LoginSignup from './login-signup/loginSignup'

export default function Home() {
  
  return (
    <><ToastContainer autoClose={3000} />
    <LoginSignup/>
    </>
  );
}

'use client';
import { ToastContainer } from "react-toastify"
import LoginSignup from '../components/login-signup/loginSignup'
import { Provider } from "react-redux";
import rootStore from "../store";

export default function Home() {
  return (
    <>
    <Provider store={rootStore}>
    <ToastContainer autoClose={2000} />
    <LoginSignup/>
    </Provider>
    </>
  );
}

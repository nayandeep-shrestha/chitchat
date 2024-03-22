'use client';
import { ToastContainer } from "react-toastify"
import LoginSignup from '../components/login-signup/loginSignup'
import { Provider } from "react-redux";
import rootStore from "../store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

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

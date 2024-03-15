'use client';
import Image from "next/image";
import './login-sign.css';
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  const handleSignUp = () =>{
   document.getElementsByClassName('container')[0].classList.add("sign-up-mode");
  }
  const handleSignIn = () =>{
   document.getElementsByClassName('container')[0].classList.remove("sign-up-mode");
  }
  
  return (
         <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with Google</p>
            <div className="social-media">
              <a href="#" className="social-icon">
              <FcGoogle />
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with Google</p>
            <div className="social-media">
              <a href="#" className="social-icon">
              <FcGoogle />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn"
            onClick={handleSignUp}
            >
              Sign up
            </button>
          </div>
          <img src="/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn"
            onClick={handleSignIn}
            >
              Sign in
            </button>
          </div>
          <img src="/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>

  );
}

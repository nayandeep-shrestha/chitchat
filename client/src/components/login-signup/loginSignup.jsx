import './login-sign.css';
import Login from './login'
import SignUp from './signUp'

export default function loginSignup() {
    const handleSignUp = () =>{
     document.getElementsByClassName('login-signup-container')[0].classList.add("sign-up-mode");
    }
    const handleSignIn = () =>{
     document.getElementsByClassName('login-signup-container')[0].classList.remove("sign-up-mode");
    }
    
    return (
      <>
           <div className="login-signup-container">
        <div className="forms-container">
          <div className="signin-signup">
           <Login/>
           <SignUp/>
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
      </>
    );
  }
  
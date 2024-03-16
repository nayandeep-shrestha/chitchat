import { FcGoogle } from "react-icons/fc";
export default function Login() {
    return(
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
    )
}
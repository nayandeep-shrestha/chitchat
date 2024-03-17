import { FcGoogle } from "react-icons/fc";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
export default function SignUp() {
    return(
        <form action="#" className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <div className="input-field-icon">
          <FaUser/>
          </div>
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
        <div className="input-field-icon">
          <FaEnvelope/>
          </div>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
        <div className="input-field-icon">
          <FaLock/>
          </div>
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
    )
}
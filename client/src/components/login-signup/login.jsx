import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as Yup from "yup"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  let [disable, setDisable] = useState(false)
  const router = useRouter();
  const schema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().matches(/[a-zA-Z0-9]/).min(8)
  })
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        setDisable(true)
        router.push('/chats')
        toast.success("Welcome to ChitChat")

        // let auth_svc = new AuthService()
        // let loginResponse = await auth_svc.login(values)
        // if (loginResponse) {
        //     dispatch(userStore(loginResponse))
        //     if (loginResponse.role === "admin") {
        //         toast.success("Welcome to user pannel")
        //         navigate("/" + loginResponse.role)
        //     } else if (loginResponse.role === 'customer') {
        //         navigate("/customer/profile")
        //     }
        // }
      } catch (err) {
        console.log("Respone: ", err)
        toast.error(err.msg)
      } finally {
        setDisable(false)
      }
    }
  })

  return (
    <form className="sign-in-form" onSubmit={formik.handleSubmit}>
      <h2 className="title">Sign in</h2>
      <div className="input-field">
      <div className="input-field-icon">
          <FaEnvelope/>
          </div>
        <input type="email" name="email" placeholder="Email" onChange={formik.handleChange} />
      </div>
        <span className="text-red-400">
          {formik?.errors?.email}
        </span>
      <div className="input-field">
      <div className="input-field-icon">
          <FaLock/>
          </div>
        <input type="password" name="password" placeholder="Password" onChange={formik.handleChange} />
      </div>
        <span className="text-red-400">
          {formik?.errors?.password}
        </span>
      <button type="submit" className="btn solid" disabled={disable}>
        Login
        </button>
      <p className="social-text">Or Sign in with Google</p>
      <div className="social-media">
        <a href="#" className="social-icon">
          <FcGoogle />
        </a>
      </div>
    </form>
  )
}
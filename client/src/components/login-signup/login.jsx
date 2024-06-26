import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, FaLock } from "react-icons/fa";
import { login } from "../../reducers/user.slicer";


import GLogin from "../../../../server/firebaselogin";
import {addUserToDB} from "../../../../server/addUser";

export default function Login() {
    let [disable, setDisable] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter();
    const schema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required().matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/, "Password must contain at least a digit and a special character").min(8)
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
                if (values.email === "shresnayan@gmail.com" && values.password === "Nayan@07") {
                    dispatch(login(values))
                    router.push('/chats')
                    toast.success("Welcome to ChitChat")
                }
                else
                    toast.error("Credentials didn't match")
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


    //auth with google using firebase
    async function handleGLogin() {
        const response = await GLogin();
        const userLoginRes = await addUserToDB(
            {
                email: response.email,
                name : response.displayName,
                chats: []
            }
        );
        dispatch(login(userLoginRes));
        router.push("/chats");
    }


    return (
        <form className="sign-in-form" onSubmit={formik.handleSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <div className="input-field-icon">
                    <FaEnvelope />
                </div>
                <input type="email" name="email" placeholder="Email" onChange={formik.handleChange} />
            </div>
            <span className="text-red-400">
                {formik?.errors?.email}
            </span>
            <div className="input-field">
                <div className="input-field-icon">
                    <FaLock />
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
                    <button type="button" onClick={handleGLogin}><FcGoogle /></button>
                </a>
            </div>
        </form>
    )
}
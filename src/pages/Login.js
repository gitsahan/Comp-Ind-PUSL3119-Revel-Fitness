/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import {React, useEffect, useState} from "react";
import {MdEmail, MdVpnKey} from "react-icons/md";
import googlebtn from "../assets/googlesign.png";
import loginbtn from "../assets/login.png";
import {useNavigate} from "react-router-dom";
import {Authentication} from "../firebase/Firebase";
import Swal from "sweetalert2";
import {signInWithEmailAndPassword, GoogleAuthProvider, getAuth, signInWithPopup, signOut} from "firebase/auth";

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const navigate = useNavigate();

    const SignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(Authentication, Email, Password)
        .then((userCredentials) => {
            console.log(userCredentials);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successful',
                showConfirmButton: false,
                timer: 3000
              });navigate("/");
        }).catch((error) => {
            console.log(error);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Login Unsuccessful',
                showConfirmButton: false,
                timer: 3000
              });
        });
    }

    const Auth = getAuth()
    const provider = new GoogleAuthProvider();
    const HandleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithPopup(Auth, provider)
        .then((result) => {
            const user = result.user
            navigate("/")
            Swal.fire(
                'Google SignIn',
                'Successful',
                'success'
              )
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const [Email, SetEmail] = useState("");
    const [Error, SetError] = useState("");
    const [Password, SetPassword] = useState("");
    const [Message, SetMessage] = useState("");

    const CheckEmail = (e) => {
        var Regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var EmailValue = e.target.value;
        SetEmail(EmailValue)
        if (Email.match(Regex)){
            SetError("");
        } else {
            SetError("Invalid email address");
        }
    };

    const CheckPassword = (e) => {
        var Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{7,30}$/;
        var PasswoordValue = e.target.value;
        SetPassword(PasswoordValue)
        if (Password.match(Regex)){
            SetMessage("");
        } else {
            SetMessage("Min 8 Characters. Including a (uppercase & lowercase) letter, number & character.");
        }
    };

    return(
        <div className="py-12 flex flex-col items-center bg-gradient-to-r from-cyan-950 to-gray-900">
            <div className="h-auto w-[800px] flex justify-center items-center bg-gray-900 border-[1px] border-slate-400 rounded-lg">
            <form onSubmit={SignIn} className="flex flex-col">

                <div className="flex flex-col items-center">
                    <p className="text-xl text-amber-500 font-bold font-headFont uppercase mt-5">Sign In</p>
                    <div className="h-1 w-28 bg-amber-500"/>
                </div>
                <div className="flex justify-center items-center gap-10 mt-5">
                    <div className="flex flex-col gap-2 text-emerald-700 mt-5">
                        <p className="flex items-center gap-3"><span><MdEmail className="h-4 w-4"/></span>Enter your email</p>
                        <div>
                            <input type="text" className="h-4 w-80 bg-transparent text-slate-200 rounded-lg outline-none active:outline-transparent mt-1 px-4"
                            placeholder="example@example.com" value={Email} onChange={CheckEmail}/>
                            <div className="h-[2px] w-80 bg-blue-700"/>
                            <p className="py-1 text-sm text-red-700" type={Error}>{Error}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-10 mt-5">
                    <div className="flex flex-col gap-2 text-emerald-700 mt-5">
                        <p className="flex items-center gap-3"><span><MdVpnKey className="h-4 w-4"/></span>Enter your password</p>
                        <div>
                            <input type="password" className="h-4 w-80 bg-transparent text-slate-200 rounded-lg outline-none active:outline-transparent mt-1 px-4"
                            placeholder="**********" value={Password} onChange={CheckPassword}/>
                            <div className="h-[3px] w-80 bg-blue-700"/>
                            <p className="w-[300px] py-1 text-sm text-red-700" type={Message}>{Message}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-14"/>
                <div className="flex justify-center">
                    <div className="px-10">
                        <button type="submit" className="h-12 w-60 flex justify-center items-center bg-gray-800 border-white rounded-3xl hover:drop-shadow-xl active:bg-slate-700 active:text-white active:border-white gap-2">
                            <img className="py-1 w-7 h-10" src={loginbtn} alt="register_button"/>
                            <p className="text-white font-headFont font-bold">Login</p>
                        </button>
                    </div>
                    <div className="px-10">
                        <button className="h-12 w-60 flex justify-center items-center bg-gray-800 border-white rounded-3xl hover:drop-shadow-xl active:bg-slate-700 active:text-white active:border-white gap-2" onClick={HandleGoogleLogin}>
                            <img className="py-1 w-10 h-10" src={googlebtn} alt="google_button"/>
                            <p className="text-white font-headFont font-bold">Sign-Up With Google</p>
                        </button>
                    </div>
                </div>
                <div className="mt-8"/>
                <div className="flex justify-center items-center text-emerald-700 cursor-pointer active:text-blue-700">
                    Dont have an account ? Contact the web admin.
                </div>
                <div className="mb-2"/>
            </form>
            </div>
        </div>       
    );
};

export default Login;
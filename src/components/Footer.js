/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import {React, useState, useEffect} from "react";
import logo from "../assets/logo.png";
import payment from "../assets/payment.png"
import {AiFillGithub} from "react-icons/ai";
import {BsFacebook, BsYoutube, BsPaypal} from "react-icons/bs"
import {AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai";
import {RiAccountCircleFill} from "react-icons/ri";
import {MdAdminPanelSettings, MdOutlineHelp} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {Authentication} from "../firebase/Firebase"
import {onAuthStateChanged} from "firebase/auth";

const Footer = () => {
    const Navigate = useNavigate();
    const [AuthUSer, SetAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(Authentication, (user)=> {
            if(user) {
                SetAuthUser(user);
               }else{
                SetAuthUser(null);
               }
            });
            return() => {
                listen();
            }
        }, [])

        const Redirect = () => {
            if (AuthUSer == null){
                Navigate("/adminlogin")
            }else{
                Navigate("/admin")
            }
    }
    return(
        <div className="py-10 bg-gray-900 font-HeadFont text-slate-400">
            <div className="max-w-screen-xl mx-auto flex justify-between">
                <div className="flex flex-col gap-5">
                    <img className="h-7 w-24" src={logo} alt="footerlogo" onClick={()=>Navigate("/")}/>
                    <p>Revel Filnesss Club 2023 ©</p>
                    <img className="h-8 w-50" src={payment} alt="pay_opt"/>
                    <div className="flex gap-3 items-center">
                        <AiFillGithub className="h-7 w-7 hover:text-white cursor-pointer"/>
                        <BsFacebook className="h-6 w-6 hover:text-white pcursor-pointer"/>
                        <AiFillInstagram className="h-7 w-7 hover:text-white cursor-pointer"/>
                        <AiFillTwitterCircle className="h-7 w-7 hover:text-white cursor-pointer"/>
                        <BsYoutube className="h-7 w-7 hover:text-white cursor-pointer"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                        <p className="text-xl text-amber-500 font-headFont font-bold uppercase">Locate Us</p>
                        <p>No:333, Galle Road, Colombo 03</p>
                        <p>Mobile: +94 777 123 456</p>
                        <p>Telephone: +94 111 123 456</p>
                        <p>Email: info@revel.com</p>
                </div>
                <div className="flex flex-col gap-2">
                        <p className="text-xl text-amber-500 font-headFont font-bold uppercase">Profile</p>
                        <p className="flex items-center gap-3 cursor-pointer hover:text-white"><span><RiAccountCircleFill className="h-4 w-4"/></span>My Profile</p>
                        <p className="flex items-center gap-3 cursor-pointer hover:text-white"><span><BsPaypal className="h-4 w-4"/></span>Checkout</p>
                        <p className="flex items-center gap-3 cursor-pointer hover:text-white" onClick={Redirect}><span><MdAdminPanelSettings className="h-4 w-4"/></span>Admin Login</p>
                        <p className="flex items-center gap-3 cursor-pointer hover:text-white"><span><MdOutlineHelp className="h-4 w-4"/></span>Help & Support</p>
                </div>
                <div className="flex items-center flex-col gap-4">
                    <p className="text-xl text-amber-500 font-headFont font-bold uppercase">News letter</p>
                    <input type="email" className="py-2 h-10 w-50 bg-transparent border px-4 border-slate-400 rounded-lg active:border-amber-500 mt-4" placeholder="Enter your email"/>
                    <button className="h-6 w-60 bg-slate-500 border-[1px] border-slate-400 rounded-lg text-gray-900 text-sm hover:bg-amber-500 hover:text-gray-900 hover:text-sm uppercase right-0">Subscribe To News Letter</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
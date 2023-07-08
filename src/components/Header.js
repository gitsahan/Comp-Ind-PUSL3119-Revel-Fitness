/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import {React, useState, useEffect} from "react";
import logo from "../assets/logo.png";
import avater from "../assets/avatar.png";
import {useNavigate} from "react-router-dom";
import {Authentication} from "../firebase/Firebase"
import {onAuthStateChanged} from "firebase/auth";

const Header = () => {
    const navigate = useNavigate();
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
                navigate("/login")
            }else{
                navigate("/profile")
            }
    }

    return (
        <div className="w-full h-16 bg-gray-900 border-b-[1px] border-slate-500 shadow-lg shadow-gray-900/50 top-0 sticky z-10">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <div>
                     <img className="h-7 w-24 cursor-pointer" src={logo} alt="head_logo" onClick={()=>navigate("/")}/>
                </div>
                <ul className="uppercase flex items-center gap-8 text-amber-500 font-medium font-headFont">
                    <li className="hover:text-white cursor-pointer" onClick={()=>navigate("/")}>Home</li>
                    <li className="hover:text-white cursor-pointer" onClick={()=>navigate("/products")}>Shop</li>
                    <li className="hover:text-white cursor-pointer" onClick={()=>navigate("/docs")}>Documents</li>
                    <li className="hover:text-white cursor-pointer" onClick={()=>navigate("/instructors")}>Instructors</li>
                    <li className="hover:text-white cursor-pointer" onClick={()=>navigate("/contact")}>Contact</li>
                    <li className="hover:text-white cursor-pointer" onClick={()=>navigate("/location")}>Location</li>
                </ul>
                <div className="flex items-column gap-8 text-amber-500">
                    <div>
                        <img src={avater} className="h-8 w-8 hover:scale-125 hover:text-white cursor-pointer" onClick={Redirect}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
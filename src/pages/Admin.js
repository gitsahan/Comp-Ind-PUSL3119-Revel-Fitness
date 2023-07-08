/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import {React, useState, useEffect} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {Authentication} from "../firebase/Firebase";
import {useNavigate} from "react-router-dom";
import {Database} from "../firebase/Database";
import adminwall from "../assets/adminwall.jpg";
import admin from "../assets/admin.png";
import adduser from "../assets/adduser.jpg"
import Swal from "sweetalert2";
import userdata from "../assets/userdata.jpg";

const Admin = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    const Navigate = useNavigate();
    const [AuthUSer, SetAuthUser] = useState(null);
    const db = Database;

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

    const UserSignOut = () => {
        signOut(Authentication).then(() => {
        console.log("Sign Out Successful.");
        }).catch((error) => {
            console.log(error);
        }); Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Sign Out Successful',
            showConfirmButton: false,
            timer: 3000
          });
    }

    const Redirect = () => {
        if (AuthUSer == null){
            Navigate("/")
        }
    }
        return (
            <div className="bg-gradient-to-r from-cyan-950 to-sky-800 overflow-x-hidden">
                <div className="flex h-[500px] w-[400vw]">
                    <img className="h-full w-screen object-cover" src={adminwall} alt="admin_wall"/>
                </div>
                <div className="bg-gradient-to-r from-cyan-950 to-sky-800"/>
                <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-950 to-sky-800">
                    <h1 className="w-80 py-2 bg-gray-900 text-red-700 text-center text-2xl uppercase font-bold mt-10">User Registration</h1>
                    <span className="h-[3px] w-20 bg-gray-900 mt-3"/>
                </div>
                <p className="flex justify-center items-center text-slate-200 mt-5">Click the button bellow to add an user.</p>
                <div className="flex justify-center items-center">
                    <button className="flex justify-center items-center h-[40px] w-[200px] bg-red-800 text-slate-200 text-lg font-bold font-headFont uppercase tracking-wider hover:cursor-pointer hover:shadow-2xl rounded-lg mt-5" onClick={()=>Navigate("/register")}>
                        Register
                    </button>
                </div>
                <div className="flex justify-center items-center mt-10"></div>
                <div className="flex h-[350px] w-[400vw]">
                    <img className="h-full w-screen object-cover" src={adduser} alt="add_user"/>
                </div>
                <div className="bg-gradient-to-r from-cyan-950 to-sky-800"/>
                <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-950 to-sky-800">
                    <h1 className="w-80 py-2 bg-gray-900 text-red-700 text-center text-2xl uppercase font-bold mt-10">Membership Details</h1>
                    <span className="h-[3px] w-20 bg-gray-900 mt-3"/>
                </div>
                <p className="flex justify-center items-center text-slate-200 mt-5 mb-5">Access User Data</p>
                <div className="flex justify-center items-center">
                    <button className="flex justify-center items-center h-10 w-36 bg-red-700 text-white text-xl font-bold rounded-lg uppercase" onClick={()=>Navigate("/userdata")}>Access</button>
                </div>
                <div className="flex justify-center items-center">
                </div>
                <div className="flex h-10 w-full bg-gradient-to-r from-cyan-950 to-sky-800"/>
                <div className="flex h-[350px] w-[400vw]">
                    <img className="h-full w-screen object-cover" src={userdata} alt="user_data"/>
                </div>
                <div className="flex h-5 w-full bg-gradient-to-r from-cyan-950 to-sky-800"/>
                <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-950 to-sky-800">
                    <h1 className="w-80 py-2 bg-gray-900 text-red-700 text-center text-2xl uppercase font-bold mt-5">Admin Account</h1>
                    <span className="h-[3px] w-20 bg-gray-900 mt-3" />
                    <div className="flex h-5 w-full bg-gradient-to-r from-cyan-950 to-sky-800"/>
                </div>
                <div className="flex flex-col justify center items-center">
                    <img src={admin} alt="admin_dp" className="flex justify-center items-center h-24 w-28 shadow-xl"/>
                    <div className="flex h-5 w-full bg-gradient-to-r from-cyan-950 to-sky-800"/>
                    {AuthUSer ? <><p className="flex justify-center items-center text-white font-bold font-headFont">{`You are signed in as "${AuthUSer.email}"`}</p></> : <Redirect/>}
                    <div className="flex justify-center items-center mt-2">
                    <button className="justify-center items-center h-[30px] w-[100px] bg-red-700 text-white text-lg font-bold rounded-lg hover:cursor-pointer hover:shadow-xl" onClick={UserSignOut}>Sign Out</button>
                </div>
                </div>
                <div className="flex h-5 w-full bg-gradient-to-r from-cyan-950 to-sky-800"/>
            </div>
        )
};

export default Admin;
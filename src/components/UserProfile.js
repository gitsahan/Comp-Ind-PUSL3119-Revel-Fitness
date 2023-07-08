/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import {React, useState, useEffect} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {Authentication} from "../firebase/Firebase";
import {useNavigate} from "react-router-dom";
import profilethumb from "../assets/profile_thumb.png";
import Swal from "sweetalert2";

const UserProfile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
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
        }, []);

    const UserSignOut = () => {
        signOut(Authentication).then(() => {
        console.log("Sign Out Successful.");
        }).catch((error) => {
            console.log(error);
        });Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Sign Out Successful',
            showConfirmButton: false,
            timer: 3000
          })
    };

    const Redirect = () => {
        if (AuthUSer == null){
            Navigate("/login")
        };
    };


    return (
        <div className="bg-gradient-to-r from-cyan-950 to-gray-900">
            <div className="flex flex-col justify-center items-center">
                <h1 className="w-80 py-2 bg-amber-600 text-white text-center text-2xl uppercase font-bold mt-5">My Profile</h1>
                <span className="h-[3px] w-20 bg-amber-600 mt-3" />
                <div className="flex h-3 w-full"/>
            </div>
            <div className="flex flex-col items-center text-slate-200">
                <img src={profilethumb} className="flex justify-center h-28 w-28 mb-5" alt="profile_thumb"/>
            </div>
            <div className="flex flex-col justify-center items-center">
                {AuthUSer ? <><p className="text-amber-500 font-bold font-headFont mb-2">{`You are signed in as "${AuthUSer.email}"`}</p></> : <Redirect/>}
                <button className="items-center h-[30px] w-[100px] bg-slate-200 text-gray-900 text-lg font-bold rounded-lg hover:cursor-pointer hover:shadow-xl" onClick={UserSignOut}>Sign Out</button>
            </div>
        </div>
        
    );
};

export default UserProfile;
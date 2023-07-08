/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import React from "react";
import {useNavigate} from "react-router-dom";
import profile from "../assets/profile.jpg"
import offer from "../assets/offer.jpg"
import AvailabilityStatus from "../components/Availability";
import subscription from "../assets/subscription.jpeg";
import {RiVisaFill} from "react-icons/ri"
import UserProfile from "../components/UserProfile";

const Profile = () => {
    const Navigate = useNavigate();
        return (
            <div className="bg-gradient-to-r from-cyan-950 to-gray-900 overflow-x-hidden">
                <UserProfile/>
                <div className="flex h-10 w-full bg-gradient-to-r from-cyan-950 to-gray-900"/>
                <div className="flex h-[550px] w-[400vw]">
                    <img className="h-full w-screen object-cover" src={profile} alt="profile_sep"/>
                </div>
                <div className="flex h-5 w-full bg-gradient-to-r from-cyan-950 to-gray-900"/>
                <div className="bg-gradient-to-r from-cyan-950 to-gray-900"/>
                <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-950 to-gray-900">
                    <h1 className="w-80 py-2 bg-amber-600 text-white text-center text-2xl uppercase font-bold mt-5">Gym Usage</h1>
                    <span className="h-[3px] w-20 bg-amber-600 mt-3"/>
                    <p className="text-slate-200 font-bold mt-3">Availability of the fitness center can be in 3 forms. Minimum, Average & Maximum.</p>
                </div>
                <AvailabilityStatus/>
                <div className="flex justify-center">
                    <div className="h-2 w-28 bg-amber-500"/>
                </div>
                <div className="flex h-[550px] w-[400vw] mt-10">
                    <img className="h-full w-screen object-cover" src={offer} alt="offer_sep"/>
                </div>
                <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-950 to-gray-900 mt-10">
                    <h1 className="w-80 py-2 bg-amber-600 text-white text-center text-2xl uppercase font-bold mt-5">Update Info</h1>
                    <span className="h-[3px] w-20 bg-amber-600 mt-3"/>
                    <p className="text-slate-200 font-bold mt-3">Enter your preferences</p>
                </div>

                <div className="py-10 flex flex-col items-center bg-gradient-to-r from-cyan-950 to-gray-900">
        <div className="h-auto w-[600px] flex justify-center items-center bg-gray-900 border-[1px] border-slate-400 rounded-lg">
            <div className="flex flex-col items-center">
                <p className="text-xl text-amber-500 font-bold font-headFont uppercase mt-5">Contact Us</p>
                <div className="h-1 w-36 bg-amber-500"/>
                <div className="flex flex-col gap-2">
                    <form>
                    <label className="flex text-emerald-700 uppercase mt-10 mb-2">Email</label>
                    <input className="h-10 w-[300px] bg-transparent text-slate-200 outline-none" type="email" name="user_name" placeholder="johndoe@gmail.com"/>
                    <div className="h-[2px] w-[300px] bg-emerald-700"/>
                    <label className="flex text-emerald-700 uppercase mt-5 mb-2">Instructor</label>
                    <input className="h-10 w-[300px] bg-transparent text-slate-200 outline-none" type="text" name="user_email" placeholder="Lucion Pushparaj"/>
                    <div className="h-[2px] w-[300px] bg-emerald-700"/>
                    <label className="flex text-emerald-700 uppercase mt-5 mb-2">Package</label>
                    <input className="h-10 w-[300px] bg-transparent text-slate-200 outline-none appearance-none hover:appearance-none [appearance:textfield]
                    [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="text" name="user_phone"
                    placeholder="Fitness Plus"/>
                    <div className="h-[2px] w-[400px] bg-emerald-700"/>
                    <ul className="flex justify-center items-center">
                        <li><button className="h-8 w-24 bg-emerald-700 text-gray-900 font-bold mt-10 mb-5 rounded-xl ml-[304px] hover:bg-amber-500" type="submit">Send</button></li>
                    </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>

                <div className="h-10 w-full bg-gradient-to-r from-cyan-950 to-gray-900"/> 
                <div className="flex h-[400px] w-[400vw] mb-5">
                    <img className="h-full w-screen object-cover" src={subscription} alt="payment_sep"/>
                </div>
                <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-950 to-gray-900">
                    <h1 className="w-80 py-2 bg-amber-600 text-white text-center text-2xl uppercase font-bold mt-5">Payment</h1>
                    <span className="h-[3px] w-20 bg-amber-600 mt-3" />
                    <div className="h-3 w-full bg-gradient-to-r from-cyan-950 to-gray-900"/>
                    <p className="text-slate-200 font-bold mb-10">Make your monthly payment online.</p>
                    <button className="flex justify-between items-center h-[50px] w-[575px] bg-red-800 text-slate-200 hover:cursor-pointer hover:shadow-2xl rounded-lg px-10" onClick={()=>Navigate("/stripepay")}>
                        <RiVisaFill className="flex justify-center items-center h-[35px] w-[45px]"/>
                        <p className="flex justify-center items-center text-slate-200 text-xl uppercase tracking-wider">Pay your monthly payment (3,000 LKR)</p>
                    </button>
                </div> 
                <div className="h-10 w-full bg-gradient-to-r from-cyan-950 to-gray-900"/>    
            </div>
        )
};

export default Profile;
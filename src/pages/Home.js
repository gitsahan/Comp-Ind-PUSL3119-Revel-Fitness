/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import React, {useEffect, useState } from "react";
import Banner from "../components/Banner";
import about from "../assets/about.jpg";
import services from "../assets/services.png"
import elders from "../assets/elders.jpg";
import professionals from "../assets/professionals.jpg"
import teenagers from "../assets/teenagers.jpg"
import offers from "../assets/offer.jpg";
import usage from "../assets/usage.jpg";

const Home = () => {;
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <Banner/>
            <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-950 to-gray-900 shadow-gray-900/50">
                <h1 className="w-80 py-2 bg-amber-600 text-white text-center text-2xl uppercase font-bold mt-5">Who we are ?</h1>
                <span className="h-[3px] w-20 bg-amber-500 mt-3" />
                <p className="max-w-[850px] text-center text-slate-200 mt-5 mb-5">Revel Fitness Club, formely known as Revel-Fit is a private owned business (PVT) LTD.
                We provide you the opportunity to exrcise, workout and involve in variety of fitness activities under the supervision of fitness experts. Multiple budget
                friendly subscription plans allows you to opt the most appropriate. Since 2008, Revel is a well reputed fitness club in the area. We are proud to mention that
                our 13 years of excellency reflects the effective & convenient service we offer you.</p>
            </div>
            <div className="h-auto w-full overflow-x-hidden">
                <div className="w-screen h-[600px] relative">
                    <div className="flex h-full w-[400vw]">
                        <img className="h-full w-screen object-cover" src={about} alt="about"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-950 to-gray-900">
                <h1 className="w-80 py-2 bg-amber-600 text-white text-center text-2xl uppercase font-bold mt-5">What we offer ?</h1>
                <span className="h-[3px] w-20 bg-amber-500 mt-3 mb-10"/>
                <img src={services} alt="facilities"/>
                <div className="mb-20"/>
            </div>
            <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-950 to-gray-900 shadow-gray-900/50">
                <h1 className="w-80 py-2 bg-amber-600 text-white text-center text-2xl uppercase font-bold mt-5">Subscriptions</h1>
                <span className="h-[3px] w-20 bg-amber-500 mt-3 mb-14"/>
            </div>
            <div className="flex justify-between items-center bg-gradient-to-r from-cyan-950 to-gray-900 px-36">
                <div className="h-[475px] w-[325px] bg-gray-900 border-[2px] border-slate-400 rounded-xl cursor-pointer hover:scale-125">
                    <img className="h-full w-full rounded-lg" src={elders} alt="elderly"/>
                    <p className="flex flex-col justify-center items-center mt-3 text-amber-500 font-bold text-lg">Elderls (1,500 LKR)</p>
                </div>
                <div className="h-[475px] w-[325px] bg-gray-900 border-[2px] border-slate-400 rounded-xl cursor-pointer hover:scale-125">
                    <img className="h-full w-full rounded-lg" src={professionals} alt="pro"/>
                    <p className="flex flex-col justify-center items-center mt-3 text-amber-500 font-bold text-xl">Professionals (3,000 LKR)</p>
                </div>
                <div className="h-[475px] w-[325px] bg-gray-900 border-[2px] border-slate-400 rounded-xl cursor-pointer hover:scale-125">
                    <img className="h-full w-full rounded-lg" src={teenagers} alt="students"/>
                    <p className="flex flex-col justify-center items-center mt-3 text-amber-500 font-bold text-lg">Students (2,000 LKR)</p>
                </div>
            </div>
            <div className=" flex justify-between h-28 w-full items-center bg-gradient-to-r from-cyan-950 to-gray-900"/>
            <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-950 to-gray-900 shadow-gray-900/50">
                <h1 className="w-80 py-2 bg-amber-600 text-white text-center text-2xl uppercase font-bold mt-5">Busy Hours</h1>
                <span className="h-[3px] w-20 bg-amber-500 mt-3" />
                <p className="max-w-[850px] text-center text-slate-200 mt-5 mb-5">The graphicsl illustration bellow indicates the busy hours of the fitness center.</p>
                <div className="h-[400px] w-[800px] bg-gray-900 border-[2px] border-slate-400 rounded-xl cursor-pointer hover:scale-125">
                    <img className="h-full w-full rounded-lg" src={usage} alt="usage"/>
                </div>
                <div className="flex bg-gradient-to-r from-cyan-950 to-gray-900 mb-20"/>
                <div className="h-auto w-full overflow-x-hidden">
                    <div className="w-screen h-[300px] relative">
                        <div className="flex h-full w-[400vw]">
                            <img className="h-full w-screen object-cover" src={offers} alt="offers"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
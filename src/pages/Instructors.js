/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import React from "react";
import instructorwall from "../assets/instructorwall.jpg";
import tashen from "../assets/tashen.jpg";
import lucion from "../assets/lucion.jpg";
import jack from "../assets/jack.jpg";
import yohan from "../assets/yohan.jpg";
import thushi from "../assets/thushi.jpg";
import sarani from "../assets/sarani.jpg";

const Instructors = () => {
    return(
        <div>
            <div className="h-auto w-full overflow-x-hidden">
                <div className="w-screen h-[400px] relative">
                    <div className="h-full w-[400vw] flex">
                        <img className="h-full w-screen object-cover" src={instructorwall} alt="instructor_wallaper"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-950 to-gray-900">
                <h1 className="w-80 py-2 bg-amber-600 text-white text-center text-2xl uppercase font-bold mt-5">Diet Plans</h1>
                <span className="h-[3px] w-20 bg-amber-600 mt-3" />
                <p className="max-w-[850px] text-center text-slate-200 mt-5 mb-5">Prior to selecting a preffered fitness instructor at Revel Fitness, you can go through their
                profiles and get a basic idea about the fields they are specialized in; and the experience of the each instructor.</p>
                <div className="flex h-10 w-full bg-gradient-to-r from-cyan-950 to-gray-900"/>
            </div>
            <div className="flex justify-between items-center h-auto w-full bg-gradient-to-r from-cyan-950 to-gray-900 gap-10 px-20">
                <div className="flex flex-col h-[320px] w-[240px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                        <img className="h-[500px] w-[240px] rounded-lg" src={lucion} alt="lucion_thumb"/>
                    <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold mt-3">Mr. Lucion Pushparaj</p>
                    <p className="flex flex-col justify-center items-center text-slate-200">Bodybuilding (4y+)</p>
                </div>
                <div className="flex flex-col h-[320px] w-[240px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                        <img className="h-[320px] w-[240px] rounded-lg" src={yohan} alt="yohan_thumb"/>
                    <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold mt-3">Mr. Yohan Perera</p>
                    <p className="flex flex-col justify-center items-center text-slate-200">Athletic Fitness (2y+)</p>
                </div>
                <div className="flex flex-col h-[320px] w-[240px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                        <img className="h-[320px] w-[240px] rounded-lg" src={tashen} alt="tashen_thumb"/>
                    <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold mt-3">Mr. Tashen Dissanayake</p>
                    <p className="flex flex-col justify-center items-center text-slate-200">Weight Loss (3y+)</p>
                </div>
            </div>
            <div className="flex h-24 w-full bg-gradient-to-r from-cyan-950 to-gray-900"/>
            <div className="flex justify-between items-center h-auto w-full bg-gradient-to-r from-cyan-950 to-gray-900 gap-10 px-20">
                <div className="flex flex-col h-[320px] w-[240px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                        <img className="h-[320px] w-[240px] rounded-lg" src={sarani} alt="sarani_thumb"/>
                    <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold mt-3">Ms. Sarani Nikesha</p>
                    <p className="flex flex-col justify-center items-center text-slate-200">Weight Loss (3y+)</p>
                </div>
                <div className="flex flex-col h-[320px] w-[240px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                        <img className="h-[320px] w-[240px] rounded-lg" src={jack} alt="jack_thumb"/>
                    <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold mt-3">Mr. Akila Jakson</p>
                    <p className="flex flex-col justify-center items-center text-slate-200">Bodybuilding (3y+)</p>
                </div>
                <div className="flex flex-col h-[320px] w-[240px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                        <img className="h-[320px] w-[240px] rounded-lg" src={thushi} alt="thushi_thumb"/>
                    <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold mt-3">Ms. Thusi Bhagya</p>
                    <p className="flex flex-col justify-center items-center text-slate-200">Yoga (4y+)</p>
                </div>
            </div>
            <div className="h-20 w-full bg-gradient-to-r from-cyan-950 to-gray-900"/>
        </div>
    )
};

export default Instructors;
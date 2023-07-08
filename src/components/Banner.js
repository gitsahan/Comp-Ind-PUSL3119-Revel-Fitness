/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import React from "react";
import backvideo from "../assets/backvideo.mp4";
import offer from "../assets/offer.jpg";

const Banner = () => {
return(
    <div className="h-auto w-full overflow-x-hidden">
            <div className="w-screen h-[600px] relative">
                <div className="h-full w-[400vw] flex">
                    <img className="h-full w-screen object-cover" src={offer} alt="offer_cover"/>
                    <div className="h-full w-full top-0 flex flex-col absolute justify-center items-center uppercase font-bold text-white drop-shadow-2xl"> */
                        <h1 className="text-5xl text-amber-500 font-headFont">Revel Fitness Club</h1>
                        <h1 className="text-2xl">- Lift heavy today if you want strength tomorrow -</h1>
                    </div>
                </div>
            </div>
        </div>
);
};

export default Banner;
/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import React from "react";
import GMaps from "../components/GoogleMaps"

const Location = () => {
    return(
        <div className="font-headFont bg-gradient-to-r from-cyan-950 to-gray-900 text-amber-500">
            <div className="h-10 w-full bg-gradient-to-r from-cyan-950 to-gray-900"/>
            <div className="flex justify-center">
                <GMaps/>
            </div>
            <div className="h-5 w-full bg-gradient-to-r from-cyan-950 to-gray-900"/>
                <div className="flex justify-center font-bold uppercase tracking-wider">
                    Our Location: No:333, Galle Road, Colombo 03.
                </div>
            <div className="h-10 w-full bg-gradient-to-r from-cyan-950 to-gray-900"/>
        </div>
    );
};

export default Location;
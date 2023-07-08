/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

    import React from "react";
    import sd, { UserDatabase }  from "../components/UserDatabase"

    const UserData =() => {
        return(
            <div className="bg-gradient-to-r from-cyan-950 to-sky-800 overflow-x-hidden">
                <UserDatabase/>
            </div>
        );
    };

    export default UserData;
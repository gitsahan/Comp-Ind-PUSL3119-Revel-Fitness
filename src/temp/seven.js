/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

    import React from "react";
    import StripeCheckout from "react-stripe-checkout";
    import stripe from "../assets/stripe.png"
    
    const StripePay_07 = () => {
        const onToken = (token) => {
            console.log(token);
        }
        return(
            <div className="overflow-x-hidden">
                <div className="flex h-[250px] w-[400vw]">
                    <img className="h-full w-screen object-cover" src={stripe} alt="stripe"/>
                </div>
                <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-950 to-gray-900">
                    <div className="mt-5">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="w-80 py-2 bg-amber-600 text-white text-center text-2xl uppercase font-bold mt-5">Payment</h1>
                            <span className="h-[3px] w-20 bg-amber-600 mt-3" />
                            <p className="max-w-[850px] text-center text-slate-200 mt-5 mb-5">Make your payment secure with Stripe (Simple - Fast - Secure.)</p>
                        </div>
                    </div>
                    <StripeCheckout name= "Monthly Subscription Payment" currency="lkr" amount="3600000" token={onToken} stripeKey="pk_test_51N8LF6A0mKgCHMZDAHANYKWpzubifKK7OrQj40CyE73wXAxHbTXgd66nnu1pRpIyIlDRirIYEd8tWseH65ENbTNb00RNY3ZMIg" className="bg-gray-900"/>
                    <div className="h-5 w-full"/>
                </div>
            </div>
        )
    }
    
    export default StripePay_07;
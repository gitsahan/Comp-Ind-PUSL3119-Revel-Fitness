/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import {React, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import dietwall from "../assets/dietwall.jpg";
import vegitables from "../assets/vegitables.jpg";
import protien from "../assets/protien.jpg";
import calcium from "../assets/calcium.jpg";
import dessert from "../assets/dessert.jpg";
import juice from "../assets/juice.jpg";
import weightloss from "../assets/weightloss.jpg";
import atheltic from "../assets/athletic.jpg";
import bodybuilding from "../assets/bodybuilding.jpg";

const Documents = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>
            <div className="h-auto w-full overflow-x-hidden">
                <div className="w-screen h-[400px] relative">
                    <div className="h-full w-[400vw] flex">
                        <img className="h-full w-screen object-cover" src={dietwall} alt="diet_wallaper"/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-950 to-gray-900">
                <h1 className="w-80 py-2 bg-amber-600 text-white text-center text-2xl uppercase font-bold mt-5">Diet Plans</h1>
                <span className="h-[3px] w-20 bg-amber-600 mt-3" />
                <p className="max-w-[850px] text-center text-slate-200 mt-5 mb-5">"A healthy diet is essential for good health and nutrition. It protects you against many chronic
                noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and
                industrially-produced trans-fats, are essential for healthy diet" - WHO (World Health Organization)</p>
                <div className="flex h-10 w-full bg-gradient-to-r from-cyan-950 to-gray-900"/>
            </div>
            <div className="flex justify-between items-center h-auto w-full bg-gradient-to-r from-cyan-950 to-gray-900 gap-10 px-20">
                <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                    <a href="https://livingspinal.com/content/Meal%20Plans/mealplanprintableformat/Vegetarian%20Meal%20Plan%20Guide.pdf" target="pdf" rel="dietplan.pdf">
                        <img className="h-[300px] w-[300px] rounded-lg" src={vegitables} alt="vegitables_thumb"/></a>
                    <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">Vegan Diet Plan (PDF)</p>
                </div>
                <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                    <a href="https://diet.mayoclinic.org/media/d4lf4y20/higher-protein-sample-meal-plan.pdf" target="pdf" rel="dietplan.pdf">
                        <img className="h-[300px] w-[300px] rounded-lg" src={protien} alt="protien_thumb"/></a>
                    <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">Protienfull Diet Plan (PDF)</p>
                </div>
                <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                    <a href="https://cdn.ymaws.com/aptanj.org/resource/resmgr/2020_spring_conference/handouts/high_calcium_foods_chart_as_.pdf" target="pdf" rel="dietplan.pdf">
                        <img className="h-[300px] w-[300px] rounded-lg" src={calcium} alt="calcium_thumb"/></a>
                    <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">Hight Calcium Diet Plan (PDF)</p>
                </div>
                <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                    <a href="https://realhealthyrecipes.com/fffbmdownloads/27%20Fat%20Burning%20Desserts.pdf" target="_pdf" rel="dietplan.pdf">
                        <img className="h-[300px] w-[300px] rounded-lg" src={dessert} alt="dessert_thumb"/></a>
                    <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">Fat Burning Desserts (PDF)</p>
                </div>
            </div>
            <div className="flex h-24 w-full bg-gradient-to-r from-cyan-950 to-gray-900"/>
            <div className="flex justify-between items-center h-auto w-full bg-gradient-to-r from-cyan-950 to-gray-900 gap-10 px-20">
                <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                    <a href="https://optimumappliances.com/assets/manual_pdf/EN/100_Juices_v2-ONLINE_16.6.2020new.pdf" target="pdf" rel="dietplan.pdf">
                        <img className="h-[300px] w-[300px] rounded-lg" src={juice} alt="juice_thumb"/></a>
                    <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">Healthy Juices (PDF)</p>
                </div>
                <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                    <a href="https://images.template.net/wp-content/uploads/2016/01/11040917/30-Day-Meal-Plan-for-Weigh-Loss-PDF-Template-Free-Download.pdf" target="pdf" rel="dietplan.pdf">
                        <img className="h-[300px] w-[300px] rounded-lg" src={weightloss} alt="weightloss_thumb"/></a>
                    <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">Weight Loss Diet Plan(PDF)</p>
                </div>
                <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                    <a href="https://www.depthtraining.ca/wp-content/uploads/2016/06/OS2016-High-Performance-Nutrition-Program.pdf" target="pdf" rel="dietplan.pdf">
                        <img className="h-[300px] w-[300px] rounded-lg" src={atheltic} alt="athletic_thumb"/></a>
                    <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">Diet Plan For Athletes (PDF)</p>
                </div>
                <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                    <a href="https://www.maxinutrition.com/downloads/HOG-BULKING-MEAL-PLANNER.PDF" target="pdf" rel="dietplan.pdf">
                        <img className="h-[300px] w-[300px] rounded-lg" src={bodybuilding} alt="bodybuilding_thumb"/></a>
                    <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">Bodybuilder's Diet Plan (PDF)</p>
                </div>
            </div>
            <div className="flex h-28 w=full bg-gradient-to-r from-cyan-950 to-gray-900"/>
        </div>
    );
};

export default Documents;
/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

    import {React, useEffect} from "react";
    import {useNavigate} from "react-router-dom";
    import supplements from "../assets/supplements.webp"
    import prod01 from "../assets/prod01.jpg";
    import prod02 from "../assets/prod02.jpg";
    import prod03 from "../assets/prod03.jpg";
    import prod04 from "../assets/prod04.jpg";
    import prod05 from "../assets/prod05.jpg";
    import prod06 from "../assets/prod06.jpg";
    import prod07 from "../assets/prod07.jpg";
    import prod08 from "../assets/prod08.jpg";
    
    const ProductList = () => {
        const navigate = useNavigate();
        useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
        return(
            <div>
                <div className="h-auto w-full overflow-x-hidden">
                    <div className="w-screen h-[400px] relative">
                        <div className="h-full w-[400vw] flex">
                            <img className="h-full w-screen object-cover" src={supplements} alt="diet_wallaper"/>
                        </div>
                    </div>
                </div>
    
                <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-950 to-gray-900">
                    <h1 className="w-80 py-2 bg-amber-600 text-white text-center text-2xl uppercase font-bold mt-5">Shop With Us</h1>
                    <span className="h-[3px] w-20 bg-amber-600 mt-3" />
                    <p className="max-w-[850px] text-center text-slate-200 mt-5 mb-5">"Getting all of the nutrients you need simply cannot be done without supplements."</p>
                    <div className="flex h-10 w-full bg-gradient-to-r from-cyan-950 to-gray-900"/>
                </div>
                <div className="flex justify-between items-center h-auto w-full bg-gradient-to-r from-cyan-950 to-gray-900 gap-10 px-20">
                    <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                        <img className="h-[300px] w-[300px] rounded-lg" src={prod01} alt="prod01_thumb"/>
                        <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">WHEY Protien (5 lbs)</p>
                        <p className="flex flex-col justify-center items-center text-amber-500 text-lg font-bold uppercase mt-3">21000 (LKR)</p>
                        <div className="flex justify-center items-center">
                            <button className="flex justify-center items-center h-8 w-28 bg-red-700 text-white uppercase rounded-lg" onClick={()=>navigate("/pay01")}>Buy</button>
                        </div>
                    </div>
                    <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                        <img className="h-[300px] w-[300px] rounded-lg" src={prod02} alt="prod02_thumb"/>
                        <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">Carnivour Mass (6 lbs)</p>
                        <p className="flex flex-col justify-center items-center text-amber-500 text-lg font-bold uppercase mt-3">25000 (LKR)</p>
                        <div className="flex justify-center items-center">
                            <button className="flex justify-center items-center h-8 w-28 bg-red-700 text-white uppercase rounded-lg" onClick={()=>navigate("/pay02")}>Buy</button>
                        </div>
                    </div>
                    <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                        <img className="h-[300px] w-[300px] rounded-lg" src={prod03} alt="prod03_thumb"/>
                        <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">Combat Mass Gainer (12 lbs)</p>
                        <p className="flex flex-col justify-center items-center text-amber-500 text-lg font-bold uppercase mt-3">30000 (LKR)</p>
                        <div className="flex justify-center items-center">
                            <button className="flex justify-center items-center h-8 w-28 bg-red-700 text-white uppercase rounded-lg" onClick={()=>navigate("/pay03")}>Buy</button>
                        </div>
                    </div>
                    <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                        <img className="h-[300px] w-[300px] rounded-lg" src={prod04} alt="prod04_thumb"/>
                        <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">Skull Labs Creatine</p>
                        <p className="flex flex-col justify-center items-center text-amber-500 text-lg font-bold uppercase mt-3">15000 (LKR)</p>
                        <div className="flex justify-center items-center">
                            <button className="flex justify-center items-center h-8 w-28 bg-red-700 text-white uppercase rounded-lg" onClick={()=>navigate("/pay04")}>Buy</button>
                        </div>
                    </div>
                </div>
                <div className="flex h-36 w-full bg-gradient-to-r from-cyan-950 to-gray-900"/>
                <div className="flex justify-between items-center h-auto w-full bg-gradient-to-r from-cyan-950 to-gray-900 gap-10 px-20">
                    <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                            <img className="h-[300px] w-[300px] rounded-lg" src={prod05} alt="prod05_thumb"/>
                        <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">BPI Protien (5 lbs)</p>
                        <p className="flex flex-col justify-center items-center text-amber-500 text-lg font-bold uppercase mt-3">21000 (LKR)</p>
                        <div className="flex justify-center items-center">
                            <button className="flex justify-center items-center h-8 w-28 bg-red-700 text-white uppercase rounded-lg" onClick={()=>navigate("/pay05")}>Buy</button>
                        </div>
                    </div>
                    <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                            <img className="h-[300px] w-[300px] rounded-lg" src={prod06} alt="prod06_thumb"/>
                        <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">Carnivour Mass (10 lbs)</p>
                        <p className="flex flex-col justify-center items-center text-amber-500 text-lg font-bold uppercase mt-3">35000 (LKR)</p>
                        <div className="flex justify-center items-center">
                            <button className="flex justify-center items-center h-8 w-28 bg-red-700 text-white uppercase rounded-lg" onClick={()=>navigate("/pay06")}>Buy</button>
                        </div>
                    </div>
                    <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                            <img className="h-[300px] w-[300px] rounded-lg" src={prod07} alt="prod07_thumb"/>
                        <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">BPI Bulk Muscle (15 lbs)</p>
                        <p className="flex flex-col justify-center items-center text-amber-500 text-lg font-bold uppercase mt-3">36000 (LKR)</p>
                        <div className="flex justify-center items-center">
                            <button className="flex justify-center items-center h-8 w-28 bg-red-700 text-white uppercase rounded-lg" onClick={()=>navigate("/pay07")}>Buy</button>
                        </div>
                    </div>
                    <div className="flex flex-col h-[300px] w-[300px] bg-gray-900 border-2 border-slate-400 rounded-lg cursor-pointer hover:shadow-2xl">
                            <img className="h-[300px] w-[300px] rounded-lg" src={prod08} alt="prod08_thumb"/>
                        <p className="flex flex-col justify-center items-center text-slate-200 text-lg font-bold uppercase mt-3">Dymatize Elite (5 lbs)</p>
                        <p className="flex flex-col justify-center items-center text-amber-500 text-lg font-bold uppercase mt-3">39500 (LKR)</p>
                        <div className="flex justify-center items-center">
                            <button className="flex justify-center items-center h-8 w-28 bg-red-700 text-white uppercase rounded-lg" onClick={()=>navigate("/pay08")}>Buy</button>
                        </div>
                    </div>
                </div>
                <div className="flex h-36 w=full bg-gradient-to-r from-cyan-950 to-gray-900"/>
            </div>
        );
    };
    
    export default ProductList;
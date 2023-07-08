/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import React from "react";
import {Database} from "../firebase/Database";
import {ref, onValue} from "firebase/database"
import buynow from "../assets/buynow.png";
import {useNavigate} from "react-router-dom";

const db = Database();
const Redirect = () => {
    const navigate = useNavigate();
        navigate("/profile");
}

export class ProductList extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        };
    };

    componentDidMount(){
        const dbref = ref(db, "products");
        onValue(dbref, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyName, "data": data});
            });
            this.setState({tableData: records})
        });
    };

    render(){
        return(
            <div className="flex justify-center items-center bg-gradient-to-r from-cyan-950 to-gray-900 px-10">
            <div className="mt-10">
                <table className="h-auto w-[1000px]">
                    <thead className="text-amber-500 font-headFont">
                        <tr className="bg-gray-800 border-2 border-rounded-lg h-10">
                            <th className="justify-center items-center w-[100px] uppercase">ID</th>
                            <th className="justify-center items-center w-[200px] uppercase">Product</th>
                            <th className="justify-center items-center w-[200px] uppercase">Image</th>
                            <th className="justify-center items-center w-[100px] uppercase">Price</th>
                            <th className="justify-center items-center w-[100px] uppercase">Buy</th>
                        </tr>
                        <tr>
                            <th><div className="h-5"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((row, index) => {
                            return(
                            <tr>
                                <td className="justify-center items-center text-center w-[100px] text-lg text-amber-500 font-bold">{row.data._id}</td>
                                <td className="text-center w-[200px] text-xl text-amber-500 font-bold">{row.data.title}</td>
                                <td className="flex justify-center "><img className="mt-10 h-[200px] w-[170px] rounded-xl hover:cursor-pointer hover:scale-125" src={row.data.image}/></td>
                                <td className="justify-center items-center text-center w-[100px] text-2xl text-red-700 font-bold">{row.data.price} LKR</td>
                                <td className="justify-center items-center text-center w-[100px] text-2xl text-slate-200"><img src={buynow} className="h-10 w-[200px] cursor-pointer hover:shadow-2xl" alt="buynow_logo" onClick={Redirect}/></td>
                            </tr>
                        );
                    })};
                    <tr>
                            <th><div className="h-5"/></th>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        )
    };
};
export default ProductList;
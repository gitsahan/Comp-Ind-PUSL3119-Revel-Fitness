/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import React from "react";
import {Database} from "../firebase/Database"
import {ref, onValue} from "firebase/database"

const db = Database();

export class AvailabilityStatus extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        };
    };

    componentDidMount(){
        const dbref = ref(db, "usage");
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
                <table className="h-auto w-[250px]">
                    <thead className="text-amber-500 font-headFont">
                        <tr className="bg-gray-800 border-2 h-10">
                            <th className="justify-center items-center w-[100px] text-red-700 uppercase tracking-widest">Current Availability</th>
                        </tr>
                        <tr>
                            <th><div className="h-5"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((row, index) => {
                            return(
                            <tr>
                                <td className="justify-center items-center text-center w-[100px] text-2xl text-amber-500 font-bold font-headFont uppercase tracking-wider">{row.data.title}</td>
                            </tr>
                        );
                    })}
                    <tr>
                            <th><div className="h-[2px]"/></th>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        )
    };
};

export default AvailabilityStatus;
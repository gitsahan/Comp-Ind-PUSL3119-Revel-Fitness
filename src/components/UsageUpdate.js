/*  Project: Revel Fitness.
    Developer: Sahan K. Karunaratne.
    Keywords: React, Firebase, Stripe, EmailJS, Google Maps. */

import React from "react";
import {Database} from "../firebase/Database";
import {ref, set, get, update, remove, child} from "firebase/database";

export class Crud extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            db:"",
            availability:"",
            email: "",
            instructor: "",
            package: ""
        }
        this.interface = this.interface.bind(this);
    }

    componentDidMount(){
        this.setState({
            db: Database
        });
    }

    render() {
        return(
            <div>
                <label>Enter the current availability status.</label>
                <input className="text-black" type="text" id="statusbox" value={this.state.availability} onchange={e => {this.setState({availability: e.target.value});}}/>
                <input className="text-black" type="text" id="emailbox" value={this.state.availability} onchange={e => {this.setState({email: e.target.value});}}/>
                <input className="text-black" type="text" id="instructorbox" value={this.state.availability} onchange={e => {this.setState({instructor: e.target.value});}}/>
                <input className="text-black" type="text" id="packagebox" value={this.state.availability} onchange={e => {this.setState({package: e.target.value});}}/>

                <button id="insertBtn" onClick={this.interface}>insert</button>
            </div>
        )
    }

    interface(event) {
        const id = event.target.id;

        if(id=="updateBtn"){
            this.updateData();
        }
        else if(id=="insertBtn"){
            this.insertData();
        }
    }

    getAllInputs(){
        return{
            availability: this.state.availability,
            age: this.state.age
        }
    }

    insertData(){
        const db=this.state.db;
        const data = this.getAllInputs();

        set(ref(db, "usag/"+data.availability), {
            age: data.age
        }).then(()=>{alert("Data was updated successfully.")}).catch((error)=>{alert("Data was not updated successfully."+error)});
    }

    insertData(){
        const db=this.state.db;
        const data = this.getAllInputs();

        update(ref(db, "usag/"+data.availability), {
            age: data.age
        }).then(()=>{alert("Data was updated successfully.")}).catch((error)=>{alert("Data was not updated successfully."+error)});
    }

}
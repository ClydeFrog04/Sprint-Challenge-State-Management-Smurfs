import React, {useContext, useEffect, useState} from "react";
import "./App.css";
import {SmurfContext, SmurfProvider} from "../SmurfContext";
import axios from "axios";
import AddSmurfForm from "./AddSmurfForm";
import {SmurfsCard} from "./SmurfsCards";

const App = () => {

    //set state vars
    //[{"name":"Brainey","age":200,"height":"5cm","id":0}]

    useEffect(() => {
        //get data from server
        axios.get("http://localhost:3333/smurfs")
            .then(res => {
                console.log(res);
            })
            .catch(console.log);
    }, []);

    return (
        <div className="App">
            <SmurfProvider>
                <AddSmurfForm/>
                <SmurfsCard/>
            </SmurfProvider>
        </div>
    );
}

export default App;

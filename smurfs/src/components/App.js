import React from "react";
import "./App.css";
import {SmurfProvider} from "../SmurfContext";
import AddSmurfForm from "./AddSmurfForm";
import {SmurfsCard} from "./SmurfsCards";

const App = () => {

    //set state vars
    //[{"name":"Brainey","age":200,"height":"5cm","id":0}]

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

import React, {useContext, useEffect, useState} from "react";
import "./App.css";
import {SmurfContext} from "../SmurfContext";
import axios from "axios";
import AddSmurfForm from "./AddSmurfForm";
import {SmurfsCard} from "./SmurfsCards";

const App = () => {

    //set state vars
    //[{"name":"Brainey","age":200,"height":"5cm","id":0}]
    const [smurfs, setSmurfs] = useState([{"name": "Brainey", "age": 200, "height": "5cm", "id": 0}]);

    useEffect(() => {
        //get data from server
        axios.get("http://localhost:3333/smurfs")
            .then(res => {
                console.log(res);
                setSmurfs(res.data);//set returned smurfs array to context state
            })
            .catch(console.log);
    }, []);

    const addSmurf = smurf =>{
        setSmurfs([...smurfs, smurf]);
    }

    return (
        <div className="App">
            <SmurfContext.Provider value={{smurfs, addSmurf}}>
                <AddSmurfForm/>
                <SmurfsCard/>
            </SmurfContext.Provider>
        </div>
    );
}

export default App;

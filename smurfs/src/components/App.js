import React, {useContext, useEffect} from "react";
import "./App.css";
import {SmurfContext, SmurfProvider} from "../SmurfContext";
import axios from "axios";
import AddSmurfForm from "./AddSmurfForm";

const App = () => {

    const [setSmurfs] = useContext(SmurfContext);

    useEffect(() =>{
        //get data from server
        axios.get("http://localhost:3333/smurfs")
            .then(res =>{
                console.log(res);
                setSmurfs(res.data);//set returned smurfs array to context state
            })
            .catch(console.log);
    });

    return (
        <div className="App">
            <SmurfProvider>
                <AddSmurfForm/>
            </SmurfProvider>
        </div>
    );
}

export default App;

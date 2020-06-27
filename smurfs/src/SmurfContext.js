import React, {createContext, useState} from "react";

//I know this is a different pattern, but it is something I have seen so I tried it out!
export const SmurfContext = createContext([]);

export const SmurfProvider = props => {
    //set state vars
    //[{"name":"Brainey","age":200,"height":"5cm","id":0}]
    const [smurfs, setSmurfs] = useState([{"name":"Brainey","age":200,"height":"5cm","id":0}]);

    const addSmurf = smurf =>{
        console.log("Add called");
        setSmurfs([...smurfs, smurf]);
    }

    const setSmurfsFromDB = smurfsToAdd =>{
        setSmurfs([...smurfsToAdd]);
    }

    return (
        <SmurfContext.Provider value={{smurfs, addSmurf, setSmurfsFromDB}}>
            {props.children}
        </SmurfContext.Provider>
    );

}
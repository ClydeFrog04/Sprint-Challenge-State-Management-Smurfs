import React, {useContext} from "react";
import {SmurfContext} from "../SmurfContext";



export const SmurfsCard = () =>{
    const {smurfs} = useContext(SmurfContext);

    return(
        <div className="cards">
            {smurfs.map((smurf, index) =>{
                console.log("mapping", smurfs);
                return <div key={index}>{smurf.name}</div>
            })}
        </div>
    );
}
import React, {useContext, useState} from "react";
import "./AddSmurfForm.css";
import {SmurfContext} from "../SmurfContext";
import axios from "axios";


const AddSmurfForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        height: "",
    });

    const {smurfs, addSmurf} = useContext(SmurfContext);

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const clearForm = () =>{
        setFormData({
            name: "",
            age: "",
            height: "",
        });
    }


    const submitSmurf = e =>{
        e.preventDefault();

        const newSmurf = {...formData, age: parseInt(formData.age, 10)};
        addSmurf({newSmurf});
        axios.post("http://localhost:3333/smurfs", newSmurf)
            .then(console.log)
            .catch(console.log);
        clearForm();
    }

    return (
        <div className="smurfForm">
            <form className="form" onSubmit={submitSmurf}>
                <p className="field-label is-normal">Add a new Smurf:</p>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                    <label className="label">Name</label>
                    </div>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="please enter a name..."
                            name="name"
                            value={formData.name}
                            onChange={handleChange}

                        />
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                    <label className="label">Age</label>
                    </div>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="please enter an age..."
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                    <label className="label">Height</label>
                    </div>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="e.g. 5cm"
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="field is-normal">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddSmurfForm;
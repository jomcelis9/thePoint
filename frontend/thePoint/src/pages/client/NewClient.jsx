// src/NewClient.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewClient = () => {

    const [patientDetail,setPatientDetail] = useState({
         patient_name: "",
         patient_age: "",
         contact: ""
    })

    const handleChange = (e) => {
        setPatientDetail({ ...patientDetail, 
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch("http://127.0.0.1:5001/patient", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(patientDetail),
        });
        //reset form
        if (response.ok) {
            setPatientDetail({
                patient_name: "",
                patient_age: "",
                contact: ""
            });
        }
    };    
    
    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 mt-10">New Patient</h2>
            <div>
            <form onSubmit={handleSubmit} className="mx-auto p-6 border rounded-xl shadow-md shadow-white bg-white m-10 w-[1000px]">

                    <h1 className="flex justify-center gap-5 text-2xl mb-4 text-thePointRed bg-transparent drop-shadow-md">Enter Patient Details</h1>

                    <div className="grid md:grid-cols-2 md:gap-7 rounded-md py-2">
                        <div className="relative z-0 w-full group">
                            <label htmlFor="firstName">Full Name</label>
                            <input id="fullName" name="patient_name" type="text" required className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Juan" onChange={handleChange} value={patientDetail.patient_name}/>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-7 rounded-md py-2 mb-3">
                        <div className="relative z-0 w-full group">
                            <label>Contact Number</label>
                            <input name="contact" type="text" required maxLength="11" className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="ex. 09123456789" onChange={handleChange} value={patientDetail.contact}/>
                        </div>
                        <div className="relative z-0 w-full group">
                            <label>Age</label>
                            <input name="patient_age" type="text" required maxLength="3" className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="27" onChange={handleChange} value={patientDetail.patient_age}/>
                        </div>
                    </div>
                </form>
                <div className="flex flex-col items-center justify-center h-[100px] mb-1">
                    <button
                        onClick={handleSubmit}
                        id="NewPatientBtn" 
                        type="submit"
                        className="w-48 bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 active:bg-primary-600 focus:outline-none focus:ring focus:ring-amber-200 rounded-lg mb-10"
                     >
                    SAVE PATIENT
                     </button>
                    <Link to="/bookchoice">
                        <button
                            id="AddClientBtn" // Changed this ID to ensure uniqueness
                            type="button"
                            className="w-48 bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 active:bg-primary-600 focus:outline-none focus:ring focus:ring-amber-200 rounded-lg"
                        >
                        BACK TO BOOKING
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewClient;

import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function BookChoice() {

    return (
        <div className={`p-4 transition-all duration-300 ${open ? "ml-0" : "ml-20"} mt-20 mb-10 border`}>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Client Management</h2>
            
            <div className="flex flex-col items-center justify-center h-[300px] mb-4">
    <Link to="/newClient"> 
    <button
        id="NewPatientBtn" 
        type="button"
        className="w-48 bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 active:bg-primary-600 focus:outline-none focus:ring focus:ring-amber-200 rounded-lg mb-10"
    >
        New Patient
    </button>
    </Link>

    <Link to={"/bookPatient"}>
        <button
            id="bookClient" // Changed this ID to ensure uniqueness
            type="button"
            className="w-48 bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 active:bg-primary-600 focus:outline-none focus:ring focus:ring-amber-200 rounded-lg"
        >
        Book Existing Patient
        </button>
    </Link>
    

</div>
        </div>
    );
}

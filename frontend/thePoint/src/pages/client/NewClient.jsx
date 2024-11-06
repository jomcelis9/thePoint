import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NewClient = () => {

    // const [patientDetail,setPatientDetail] = useState({
    //     patient_name: "",
    //     patient_age: "",
    //     patient_contact: ""

    // })

    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 mt-10">New Patient</h2>
            <div>
            <form onSubmit={""} className="mx-auto p-6 border rounded-xl shadow-md shadow-white bg-white m-10 w-[1000px]">

                    <h1 className="flex justify-center gap-5 text-2xl mb-4 text-thePointRed bg-transparent drop-shadow-md">Enter Patient Details</h1>

                    <div className="grid md:grid-cols-2 md:gap-7 rounded-md py-2">
                        <div className="relative z-0 w-full group">
                            <label htmlFor="firstName">Full Name</label>
                            <input id="fullName" name="fulltName" type="text" required className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Juan" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-7 rounded-md py-2 mb-3">
                        <div className="relative z-0 w-full group">
                            <label>Contact Number</label>
                            <input name="contactNumber" type="text" required maxLength="11" className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="ex. 09123456789" />
                        </div>
                        <div className="relative z-0 w-full group">
                            <label>Age</label>
                            <input name="age" type="text" required maxLength="3" className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="27" />
                        </div>
                    </div>
                </form>
                <div className="flex flex-col items-center justify-center h-[100px] mb-1">
                    <button
                        onClick={""}
                        id="NewPatientBtn" 
                        type="submit"
                        className="w-48 bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 active:bg-primary-600 focus:outline-none focus:ring focus:ring-amber-200 rounded-lg mb-10"
                     >
                    SAVE PATIENT
                     </button>
   
                    <button
                        id="AddClientBtn" // Changed this ID to ensure uniqueness
                        type="button"
                        className="w-48 bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 active:bg-primary-600 focus:outline-none focus:ring focus:ring-amber-200 rounded-lg"
                    >
                    BACK TO BOOKING
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewClient;

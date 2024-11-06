import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function BookChoice() {

    return (
        <div className="relative flex justify-center items-center h-screen w-screen overflow-x-hidden"
            style={{
                backgroundImage: `url('/src/images/sample2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="relative z-10 flex flex-col items-center justify-center h-[300px] w-[350px] bg-white bg-opacity-90 rounded-lg shadow-lg">
                <Link to="/newclient"> 
                    <button
                        id="NewPatientBtn" 
                        type="button"
                        className="w-48 bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 active:bg-primary-600 focus:outline-none focus:ring focus:ring-amber-200 rounded-lg mb-5"
                    >
                        New Client
                    </button>
                </Link>

                <Link to={"/bookPatient"}>
                    <button
                        id="bookClient"
                        type="button"
                        className="w-48 bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 active:bg-primary-600 focus:outline-none focus:ring focus:ring-amber-200 rounded-lg"
                    >
                        Book Existing Client
                    </button>
                </Link>
            </div>
        </div>
    );
}

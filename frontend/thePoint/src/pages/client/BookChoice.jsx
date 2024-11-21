import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function BookChoice() {
    return (
        <div 
            style={{
                backgroundImage: `url('/src/images/sample2.jpg')`, // Reference to your image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh', // Ensures the div covers the full viewport height
                display: 'flex',
                alignItems: 'center', // Centers content vertically
                justifyContent: 'center', // Centers content horizontally
            }}
        >
            <div className="flex flex-col items-center justify-center p-8 border rounded-lg shadow-lg bg-white bg-opacity-70">
                <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Your Healing Starts Now</h2>
                
                <div className="flex flex-col items-center justify-center h-[200px] mb-4">
                    <Link to="/newClient"> 
                        <button
                            id="NewPatientBtn" 
                            type="button"
                            className="w-48 bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 active:bg-primary-600 focus:outline-none focus:ring focus:ring-amber-200 rounded-lg mb-10"
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
        </div>
    );
}

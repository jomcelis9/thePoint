import { useState, useEffect } from "react";
import axios from "axios";
export default function ConfirmPage() {
    const [showGuardianForm, setShowGuardianForm] = useState(false);
    const [formData, setFormData] = useState({
        guardianName: "",
        guardianContact: ""
    });

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        async function fetchPatients() {
            try {
                const response = await axios.get('/patient'); // Adjust the endpoint to your backend
                console.error("Response: ", response.data)
                setPatients(response.data); // Assuming `data` is an array of patient objects
            } catch (error) {
                console.error("Failed to fetch patients:", error);
            }
        }
        
        fetchPatients();
    }, []);

    // Handle change for accompanied radio buttons
    const handleAccompaniedChange = (e) => {
        setShowGuardianForm(e.target.value === "no");
    };

    // Handle change for guardian form inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="pt-24 flex gap-5 justify-center min-h-screen">
            <div className="w-full max-w-md">
                <h1 className="text-center mb-6">Book Existing Patient</h1>
                <div>
                <form className="bg-white p-6 rounded-lg shadow-md w-full">
                    <div className="mb-5">
                        {/* Patient selection */}
                        <select
                            name="patient"
                            className="mb-4 shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                        >
                            <option value="">Select Patient</option>
                            {patients.map((patient) => (
                                <option key={patient.patient_id} value={patient.patient_id}>
                                    {patient.patient_name}
                                </option>
                            ))}
                        </select>

                        {/* Patient details */}
                        <div className="border p-3 rounded-lg cursor-pointer">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                            <div className="flex justify-between mb-2">
                                <div>{"{patient_name}"}</div>
                            </div>

                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Age</label>
                            <div className="flex justify-between mt-2">
                                <div>{"{patient_age}"}</div>
                            </div>
                        </div>

                        {/* Therapy type and appointment details */}
                        <select name="therapyType" className="mt-4 shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none">
                            <option value="">Select Type of Therapy</option>
                            <option value="occupational">Occupational Therapy</option>
                            <option value="sped">SPED Program</option>
                            <option value="physical">Intensive Physical Therapy</option>
                        </select>

                        <div className="w-full mt-4">
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Preferred Date:</label>
                            <input id="date" name="date" type="date" className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>

                        <div className="w-full mt-4">
                            <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900">Preferred Time:</label>
                            <input id="time" name="time" type="time" className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" min="09:00" max="18:00" />
                        </div>
                    </div>

                    {/* Accompanied section */}
                    <div className="mt-4">
                        <p className="italic text-sm/[20px]">For clients aged 18 and below, please select "Yes" if they will be accompanied by a parent or relative. If "No" pls input your emergency contact details.</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <label className="mr-2">
                            <input type="radio" name="accompanied" value="yes" onChange={handleAccompaniedChange} /> Yes
                        </label>
                        <label className="ml-4">
                            <input type="radio" name="accompanied" value="no" onChange={handleAccompaniedChange} /> No
                        </label>
                    </div>
                </form>
                </div>

                {/* Submit button */}
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="text-white bg-thePointRed rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Proceed to payment
                    </button>
                </div>
            </div>

            {/* Conditional Guardian Form */}
            {showGuardianForm && (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Emergency Contact Details</h2>
                    <div className="grid md:gap-7 rounded-md py-2">
                        <div className="relative z-0 w-full group">
                            <label htmlFor="guardianName">Full Name</label>
                            <input
                                id="guardianName"
                                name="guardianName"
                                type="text"
                                value={formData.guardianName}
                                required
                                className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                                placeholder="Maria Dela Cruz"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="relative z-0 w-full group">
                            <label htmlFor="guardianContact">Emergency Contact Number</label>
                            <input
                                id="guardianContact"
                                name="guardianContact"
                                type="text"
                                value={formData.guardianContact}
                                required
                                maxLength="11"
                                className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                                placeholder="ex. 09123456789"
                                onKeyPress={(e) => { if (!/[0-9]/.test(e.key)) e.preventDefault(); }}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

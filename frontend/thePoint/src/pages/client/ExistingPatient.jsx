import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ConfirmPage() {
    const [showGuardianForm, setShowGuardianForm] = useState(false);
    const [patientAppointmentDetail, setpatientAppointmentDetail] = useState({
        patient_name: "",
        patient_age: "",
        patient_id: "",
        therapy_type: "",
        preferred_time: "",
        preferred_date: "",
        guardian_name: "",
        guardian_contact: "",
        accompanied:""
    });

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        async function fetchPatients() {
            try {
                const response = await axios.get('/patient');
                setPatients(response.data); // Assuming `data` is an array of patient objects
            } catch (error) {
                console.error("Failed to fetch patients:", error);
            }
        }

        // Retrieve saved data from localStorage
        const savedFormData = localStorage.getItem("patientAppointmentDetail");
        if (savedFormData) {
            const parsedData = JSON.parse(savedFormData);
            setpatientAppointmentDetail(parsedData);
            if (parsedData.accompanied === "no") {
                setShowGuardianForm(true); 
            }
        }
        
        fetchPatients();
    }, []);

    

    // Save data to localStorage whenever patientAppointmentDetail changes
    useEffect(() => {
        localStorage.setItem("patientAppointmentDetail", JSON.stringify(patientAppointmentDetail));
    }, [patientAppointmentDetail]);

    // Handle change for accompanied radio buttons
    const handleAccompaniedChange = (e) => {
        const value = e.target.value;
        const isAccompanied = value === "yes";
        
        setpatientAppointmentDetail((prevDetail) => ({
            ...prevDetail,
            accompanied: value,
            guardian_name: isAccompanied ? "" : prevDetail.guardian_name,
            guardian_contact: isAccompanied ? "" : prevDetail.guardian_contact
        }));
        setShowGuardianForm(!isAccompanied);
    };

    // Handle change for inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setpatientAppointmentDetail((prevDetail) => ({
            ...prevDetail,
            [name]: value,
        }));
    };

    // Handle patient selection by patient_id and various input changes
    const handlePatientChange = (e) => {
        const { name, value } = e.target;

        if (name === "patient") {
            const selectedPatient = patients.find(patient => patient.patient_id === parseInt(value, 10));
            if (selectedPatient) {
                setpatientAppointmentDetail(prevDetail => ({
                    ...prevDetail,
                    patient_name: selectedPatient.patient_name,
                    patient_age: selectedPatient.patient_age,
                    patient_id: selectedPatient.patient_id,
                    appoint_type: selectedPatient.appoint_type,
                    preferred_time: selectedPatient.preferred_time,
                    preferred_date: selectedPatient.preferred_date,
                    guardian_name: selectedPatient.guardian_name,
                    guardian_contact: selectedPatient.guardian_contact
                }));
            } else {
                setpatientAppointmentDetail(prevDetail => ({
                    ...prevDetail,
                    patient_name: "",
                    patient_age: "",
                    patient_id: "",
                    appoint_type: "",
                    preferred_time: "",
                    preferred_date: "",
                    guardian_name: "",
                    guardian_contact: ""
                }));
            }
        } else if (name === "therapyType") {
            setpatientAppointmentDetail(prevDetail => ({
                ...prevDetail,
                therapy_type: value
            }));
        } else if (name === "date") {
            setpatientAppointmentDetail(prevDetail => ({
                ...prevDetail,
                preferred_date: value
            }));
        } else if (name === "time") {
            setpatientAppointmentDetail(prevDetail => ({
                ...prevDetail,
                preferred_time: value
            }));
        } else if (name === "guardian_name" || name === "guardian_contact") {
            setpatientAppointmentDetail(prevDetail => ({
                ...prevDetail,
                [name]: value
            }));
        }
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
                                onChange={handlePatientChange}
                                className="mb-4 shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                            >
                                <option value="">Select Patient</option>
                                {patients.map((patient) => (
                                    <option key={patient.patient_id} value={patient.patient_id}>
                                        {patient.patient_name}
                                    </option>
                                ))}
                            </select>

                            {/* Display selected patient details */}
                            {(
                                <div className="border p-3 rounded-lg">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Name:</label>
                                    <div className="flex justify-between mb-2">
                                        <div>
                                            {patientAppointmentDetail.patient_name}
                                        </div> 
                                    </div>
 
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Age:</label>
                                    <div className="flex justify-between mt-2">
                                        <div>{patientAppointmentDetail.patient_age}</div>
                                    </div>
                                </div>
                            )}

                            {/* Therapy type and appointment details */}
                            <select onChange={handlePatientChange} name="therapyType" className="mt-4 shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none">
                                <option value="">Select Type of Therapy</option>
                                <option value="Occupational Therapy">Occupational Therapy</option>
                                <option value="SPED">SPED Program</option>
                                <option value="Intensive Physical Therapy">Intensive Physical Therapy</option>
                            </select>

                            <div className="w-full mt-4">
                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Preferred Date:</label>
                                <input onChange={handlePatientChange} id="date" name="date" type="date" className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>

                            <div className="w-full mt-4">
                                <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900">Preferred Time:</label>
                                <input onChange={handlePatientChange} id="time" name="time" type="time" className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" min="09:00" max="18:00" />
                            </div>
                        </div>

                        {/* Accompanied section */}
                        <div className="mt-4">
                            <p className="italic text-sm/[20px]">For clients aged 18 and below, please select "Yes" if they will be accompanied by a parent or relative. If "No" please input your emergency contact details.</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <label className="mr-2">
                                <input type="radio" name="accompanied" checked={setpatientAppointmentDetail.accompanied === "yes"} value="yes" onChange={handleAccompaniedChange} /> Yes
                            </label>
                            <label className="ml-4">
                                <input type="radio" name="accompanied" checked={setpatientAppointmentDetail.accompanied === "no"}  value="no" onChange={handleAccompaniedChange} /> No
                            </label>
                        </div>
                    </form>
                </div>

                <div className="flex justify-center mt-6">
                    <Link to={"/confirm"} state={patientAppointmentDetail}>
                        <button
                            type="submit"
                            className="text-white bg-thePointRed rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Proceed to payment
                        </button>
                    </Link>
                </div>
            </div>

            {/* Conditional Guardian Form */}
            {showGuardianForm && (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Gauardian Details</h2>
                    <div className="grid md:gap-7 rounded-md py-2">
                        <div className="relative z-0 w-full group">
                            <label htmlFor="guardianName">Guardian's Name</label>
                            <input
                                id="guardian_name"
                                name="guardian_name"
                                type="text"
                                value={patientAppointmentDetail.guardian_name}
                                required
                                className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                                placeholder="Maria Dela Cruz"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="relative z-0 w-full group">
                            <label htmlFor="guardianContact">Contact Number</label>
                            <input
                                id="guardian_contact"
                                name="guardian_contact"
                                type="text"
                                value={patientAppointmentDetail.guardian_contact}
                                required
                                maxLength="11"
                                className="shadow-md rounded-lg w-full 
                                text-gray-800 text-sm border-b border-gray-300 f
                                ocus:border-thePointPink px-2 py-3 outline-none"
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

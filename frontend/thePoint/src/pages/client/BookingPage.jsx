import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BookingPage() {
    
    const [minDate, setMinDate] = useState("");
    const [showGuardianForm, setShowGuardianForm] = useState(false); // State for showing Guardian Details
    const [formData, setFormData] = useState({
        appoint_date: "",
        appoint_type: "",
        time: "",
        patient_name: "", // This will need to be handled separately
        patient_age: "",
        therapist_name: "",
        appointment_status: "",
        contact_number: "",
        accompanied: "",   // Add accompanied here if you want to store it
        guardianName: "",
        guardianContact: ""

    });

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        setMinDate(getTodayDate());
        const savedFormData = localStorage.getItem("formData");
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
            if (JSON.parse(savedFormData).accompanied === "no") {
                setShowGuardianForm(true); 
            }
        }
    }, []);;


    const handleInputChange = (e) => {
        const { name, value } = e.target; // Destructure the name and value
        let updatedFormData = { ...formData, [name]: value }; // Use the name to update the correct key
    
        setFormData(updatedFormData);
        localStorage.setItem("formData", JSON.stringify(updatedFormData));
    };    
    

    const handleAccompaniedChange = (e) => {
        const { value } = e.target;
        const updatedFormData = { ...formData, accompanied: value };
        setFormData(updatedFormData);
        localStorage.setItem("formData", JSON.stringify(updatedFormData)); 
        setShowGuardianForm(value === "no");
    };

        // Function to clear the form
        const handleClearForm = () => {
            setFormData({
                appoint_date: "",
                appoint_type: "",
                time: "",
                patient_id: "",
                patient_name: "",
                patient_age: "",
                therapist_name: "",
                appointment_status: "",
                contact_number: "",
                accompanied: "",
                guradian_name: "",
                guardian_contact: ""
            });
            setShowGuardianForm(false);
            localStorage.removeItem("formData");
        };
        
         return(
                <div className="relative">
                Booking Page

                <div className="flex justify-center mt-36">
                    <div className="mx-auto px-6 ">

                        <div className="text-center">
                        <h1 className="text-3xl font-medium text-thePointRed bg-transparent"> Prioritize Your Health, Begin Healing </h1>
                        </div>

                            <div className=" mx-auto w-96 ">
                                <div className="flex justify-center items-center drop-shadow-lg pt-7 mb-7">
                                        <ol className="flex items-center w-full">
                                            <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-thePointRed60 after:border-4 after:inline-block dark:after:border-blue-800">
                                                <span className="flex items-center justify-center w-10 h-10 bg-thePointRed rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>                                            
                                                </span>
                                            </li>
                                            <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                                                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                                    <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                        <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                                                    </svg>
                                                </span>
                                            </li>
                                            <li className="flex items-center ">
                                                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                                    <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                                                    </svg>
                                                </span>
                                            </li>
                                        </ol>
                                </div>  
                            </div>
                    <form className="mx-auto p-6 border rounded-xl shadow-md shadow-white bg-white m-10">
                        <h1 className="flex justify-center gap-5 text-2xl mb-4 text-thePointRed bg-transparent drop-shadow-md">Enter Patient Details</h1>

                        <div className="grid md:grid-cols-2 md:gap-7 rounded-md py-2">
                            <div className="relative z-0 w-full group">
                                <label htmlFor="patient_name">Full Name</label>
                                <input id="patient_name" name="patient_name" type="text" value={formData.patient_name} required className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Juan" onChange={handleInputChange}/>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-7 rounded-md py-2 mb-3">
                            <div className="relative z-0 w-full group">
                                <label>Contact Number</label>
                                <input name="contact_number" type="text" value={formData.contact_number} required maxLength="11" className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="ex. 09123456789" onKeyPress={(e) => { if (!/[0-9]/.test(e.key)) e.preventDefault(); }} onChange={handleInputChange} />
                            </div>
                            <div className="relative z-0 w-full group">
                                <label>Age</label>
                                <input name="patient_age" type="text" value={formData.patient_age} required maxLength="3" className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="27" onKeyPress={(e) => { if (!/[0-9]/.test(e.key)) e.preventDefault(); }} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="relative z-0 w-full group">
                            <label>Type of Therapy</label>
                            <select name="appoint_type" value={formData.appoint_type} className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" onChange={handleInputChange}>
                                <option value="">Select Type of Therapy</option>
                                <option value="occupational">Occupational Therapy</option>
                                <option value="sped">SPED Program</option>
                                <option value="physical">Intensive Physical Therapy</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preferred Date:</label>
                            <input id="appoint_date" name="appoint_date" value={formData.appoint_date} type="date" min={minDate} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={handleInputChange} />
                        </div>

                        <div className="w-full mt-4">
                            <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preferred Time:</label>
                            <input id="time" name="time" value={formData.time}type="time" className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" min="09:00" max="18:00" onChange={handleInputChange} />
                        </div>


                         <div>
                            <p className="italic text-sm/[20px] pt-4">
                                For clients aged 18 and below, please select "Yes" if they will be accompanied by a parent or relative. If "No" pls input your emergency contact details.
                            </p>
                        </div>
                        <div className="flex items-center mt-1">
                            <label className="mr-2">
                                <input type="radio" name="accompanied" value="yes" checked={formData.accompanied === "yes"} onChange={handleAccompaniedChange} />
                                Yes
                            </label>
                            <label className="ml-4">
                                <input type="radio" name="accompanied" value="no" checked={formData.accompanied === "no"} onChange={handleAccompaniedChange} />
                                No
                            </label>
                        </div>



                        {showGuardianForm && (
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">Emergency Contact Details</h2>
                                <div className="grid md:grid-cols-2 md:gap-7 rounded-md py-2">
                                    <div className="relative z-0 w-full group">
                                        <label htmlFor="guardian_name">Full Name</label>
                                        <input id="guardian_name" name="guardian_name" type="text" value={formData.guardian_name} required className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Maria Dela Cruz" onChange={handleInputChange} />
                                    </div>
                                    <div className="relative z-0 w-full group">
                                        <label htmlFor="guardian_contact">Emergency Contact Number</label>
                                        <input id="guardian_contact" name="guardian_contact" type="text" value={formData.guardian_contact} required maxLength="11" className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="ex. 09123456789" onKeyPress={(e) => { if (!/[0-9]/.test(e.key)) e.preventDefault(); }} onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-center mb-5 mt-3">
                            <button
                                type="button"
                                onClick={handleClearForm} // Call the clear function on button click
                                className="bg-white w-25 text-Black border border-gray-500 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-2xl text-sm px-5 py-2 text-center transition ease-in delay-100 hover:-translate-y-1 hover:drop-shadow-xl duration-300"
                            >
                                Clear
                            </button>
                        </div>
                    </form>
                            <div className="flex justify-center mb-5">
                                <button
                                    type="button"
                                    className="bg-thePointRed rounded-full w-10 h-10 text-white focus:ring-2 focus:outline-none focus:ring-amber-200 flex items-center justify-center transform active:scale-x-100 transition-transform hover:-translate-y-1 hover:drop-shadow-xl duration-300"
                                    >
                                    <img src="/src/images/Addicon.png" alt="Add" className="w-6 h-6" />
                                </button>
                            </div>

                    <       div className="flex mt-7 justify-center">
                                <Link to="/confirm" state={formData}>
                                    <button id="bookingContinue" type="button" className="bg-thePointRed w-25 text-white bg-primary-600 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-2xl text-sm px-5 py-2 text-center transition ease-in delay-100 hover:-translate-y-1 hover:drop-shadow-xl duration-300">
                                        Continue
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>             
                </div>       
            );
}
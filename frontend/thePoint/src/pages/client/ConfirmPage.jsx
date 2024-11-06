import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from 'axios';

export default function ConfirmPage() {
    const location = useLocation();
    const patientAppointmentDetail = location.state || {}; // Access the passed data
    console.log("FORM DATA OUTSIDE:  ", patientAppointmentDetail);

    // Extract guardian details
    const { accompanied, guardian_name, guardian_contact } = patientAppointmentDetail;

    const uploadDocument = async (e) => {
        e.preventDefault();
        try {
            console.log("FORM DATA: " , patientAppointmentDetail)
            const response = await fetch(`http://127.0.0.1:5001/appointments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(patientAppointmentDetail)
            });
            
            if (response.ok) {
                const result = await response.json();
                console.log(result);
                //navigate("/payment"); // Navigate to the payment page after successful submission
            } else {
                console.error("Failed to insert data");
            }
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <div className="relative">
            Booking Page

            <div className="flex justify-center mt-36">
                <div className="mx-auto px-6 ">
                    <div className="text-center">
                        <h1 className="text-3xl font-medium text-thePointRed bg-transparent"> Prioritize Your Health, Begin Healing </h1>
                    </div>
                    <div className="mx-auto w-96 ">
                        <div className="flex justify-center items-center drop-shadow-2xl pt-7 mb-7">
                            <ol className="flex items-center w-full">
                                <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-thePointRed after:border-4 after:inline-block dark:after:border-blue-800">
                                    <span className="flex items-center justify-center w-10 h-10 bg-thePointRed rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512">
                                            <path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                        </svg>
                                    </span>
                                </li>
                                <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-thePointRed60 after:border-4 after:inline-block dark:after:border-gray-700">
                                    <span className="flex items-center justify-center w-10 h-10 bg-thePointRed rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                        <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                                        </svg>
                                    </span>
                                </li>
                                <li className="flex items-center ">
                                    <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                        <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                                        </svg>
                                    </span>
                                </li>
                            </ol>
                        </div>  
                    </div>

                    {/* Form */}
                    <div className="gap-1 border-2 rounded-xl p-5 ">
                        <h2>Customer Details</h2>
                        <div className="flex flex-col my-5 p-3 rounded-lg bg-white">
                            <h3 className="text-sm text-black">Client #1</h3>
                            <div className="flex justify-items-stretch gap-5">
                                <div>
                                    <input disabled type="text" className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                                        value={patientAppointmentDetail.patient_name} readOnly
                                    />
                                    <p>
                                        <i>First Name</i>
                                    </p>
                                </div>
                                <div>
                                    <input disabled type="text" className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                                        value={patientAppointmentDetail.patient_age} readOnly
                                    />
                                    <p>
                                        <i>Age:</i>
                                    </p>
                                </div>
                                <div>
                                    <input disabled type="text" className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                                        value={patientAppointmentDetail.therapy_type} readOnly
                                    />
                                    <p>
                                        <i>Therapy Type</i>
                                    </p>
                                </div>
                                <div>
                                    <input disabled type="text" className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                                        value={patientAppointmentDetail.preferred_date} readOnly
                                    />
                                    <p>
                                        <i>Preferred Date</i>
                                    </p>
                                </div>
                                <div>
                                    <input disabled type="text" className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                                        value={patientAppointmentDetail.preferred_time} readOnly
                                    />
                                    <p>
                                        <i>Preferred Time</i>
                                    </p>
                                </div>
                            </div>


                            {accompanied ==="no" && (
                                <div className="mt-5">
                                    <h3 className="text-sm text-black">Emergency Contact</h3>
                                    <div className="flex justify-items-stretch gap-5">
                                        <div>
                                            <input type="text" className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                                                value={guardian_name || ""} readOnly
                                            />
                                            <p>
                                                <i>Full Name</i>
                                            </p>
                                        </div>
                                        <div>
                                            <input type="text" className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                                                value={guardian_contact || ""} readOnly
                                            />
                                            <p>
                                                <i>Contact</i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex mt-7 justify-center">
                            <Link to="/payment">
                                <button onClick={"uploadDocument"} className="bg-thePointRed text-white rounded-lg px-4 py-2 hover:bg-thePointPink transition-all duration-300">
                                    Confirm
                                </button>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    );
}


import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BookingPage() {
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        age: '',
        date: '',
        time: '',
        accompanied: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [minDate, setMinDate] = useState('');
   

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    
    useEffect(() => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        setMinDate(`${yyyy}-${mm}-${dd}`);
    }, []);

    useEffect(() => {
        validateForm();
    }, [formData]); 

    const validateForm = () => {
        const { firstName, lastName, contactNumber, age, date, time, accompanied } = formData;
        const isValid = firstName.trim() && lastName.trim() && contactNumber.trim() && age.trim() && date && time && accompanied !== '';
        setIsFormValid(isValid);
    };

    return (
        <div className="relative">
            Booking Page
            <div className="flex justify-center mt-36">
                <div className="mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-3xl font-medium text-thePointRed bg-transparent"> Prioritize Your Health, Begin Healing </h1>
                    </div>
                    <div className=" mx-auto w-96 ">
                                <div className="flex justify-center items-center drop-shadow-lg pt-7 mb-7">
                                        <ol className="flex items-center w-full">
                                            <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-thePointRed60 after:border-4 after:inline-block dark:after:border-gray-700">
                                                 <span className="flex items-center justify-center w-10 h-10 bg-thePointRed rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                                                     <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                         <path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.7-9.2L288 94.6z"/>
                                                     </svg>
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
                    {/* Form 1*/}
                    <form className="mx-auto p-6 border rounded-xl shadow-md bg-white m-10">
                        <h1 className="flex justify-center gap-5 text-2xl mb-4 text-thePointRed bg-transparent drop-shadow-md"> Enter Patient Details </h1>
                        <div className="font- italic text-sm">
                        <p> Client Number 1</p>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-7 rounded-md py-2">
                            <div className="relative z-0 w-full group">
                                <label htmlFor="firstName">First Name</label>
                                <input id="firstName" name="firstName" type="text" required className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Juan" onChange={handleChange} />
                            </div>
                            <div className="relative z-0 w-full group">
                                <label htmlFor="lastName">Last Name</label>
                                <input id="lastName" name="lastName" type="text" required className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Dela Cruz" onChange={handleChange} />
                            </div>
                        </div>

                        {/* Contact Number and Age */}
                        <div className="grid md:grid-cols-2 md:gap-7 rounded-md py-2 mb-3">
                            <div className="relative z-0 w-full group">
                                <label htmlFor="contactNumber">Contact Number</label>
                                <input id="contactNumber" name="contactNumber" type="text" required maxLength="11" className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="ex. 09123456789" onChange={handleChange} onKeyPress={(e) => {
                                    if (!/[0-9]/.test(e.key)) {
                                    e.preventDefault();
                                                 }
                                            }}
                                        />
                            </div>
                            <div className="relative z-0 w-full group">
                                <label htmlFor="age">Age</label>
                                <input id="age" name="age" type="text" required className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="27" maxLength="3" onChange={handleChange} onKeyPress={(e) => {
                                    if (!/[0-9]/.test(e.key)) {
                                    e.preventDefault();
                                                 }
                                            }}
                                        />
                            </div>

                        </div>

                        {/* Date and Time */}
                        <div className="w-full">
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preferred Date:</label>
                            <input id="date" name="date" type="date" className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" min={minDate} onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="time" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Preferred time: Sample(10:00 AM/PM)</label>
                        <div className="relative">
                            <input type="time" id="time" name="time" className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" min="09:00" max="18:00" required onChange={handleChange} />
                        </div>

                        
                        <div>
                        <p className="italic text-sm/[20px] pt-4">
                                For clients aged 18 and below, please select "Yes" if they will be accompanied by a parent or relative.
                            </p>
                            <p className="italic text-sm/[20px]">
                                If not, select "No" and provide the details of the guardian who will accompany them.
                            </p>
                        </div>
                        <div className="flex items-center mt-1">
                            <label className="mr-2">
                                <input type="checkbox" name="accompanied" value="yes" onChange={handleChange} />
                                Yes
                            </label>
                            <label className="ml-4">
                                <input type="checkbox" name="accompanied" value="no" onChange={handleChange} />
                                No
                            </label>
                        </div>
                    </form>
                </div>
            </div>
             {/* Add Button */}
             <div className="flex justify-center">
                             <button
                                 id="Add Form"
                                 type="button"
                                 className="bg-thePointRed rounded-full w-10 h-10 text-white focus:ring-2 focus:outline-none focus:ring-amber-200 
                                 flex items-center justify-center transform active:scale-x-100 transition-transform transition ease-in delay-100 hover:-translate-y-1 hover:drop-shadow-xl duration-300"
                             >
                                <img
                                    src="/src/images/Addicon.png" 
                                    alt="Add"
                                    className="w-6 h-6" 
                                />
                             </button>
                        </div>

                        {/* Continue Button */}
                        <div className="flex mt-7 justify-center">
                            <Link to={isFormValid ? "/payment" : "#"}>
                                <button
                                    id="bookingContinue"
                                    type="button"
                                    className={`bg-thePointRed w-25 text-white font-medium rounded-2xl text-sm px-5 py-2 text-center transition ease-in delay-100 hover:-translate-y-1 hover:drop-shadow-xl duration-300 ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}
                                    disabled={!isFormValid}
                                >
                                    Continue
                                </button>
                            </Link>
                        </div>
        </div>
        
    );
}

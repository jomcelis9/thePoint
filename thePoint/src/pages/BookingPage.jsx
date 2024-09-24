import { Link } from "react-router-dom"
import Header from "../Header";

export default function BookingPage(){

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
                        {/* Form */}
                            <form className="mx-auto p-6 border rounded-xl shadow-md shadow-white bg-white m-10">
                                <h1 className="flex justify-center gap-5 text-2xl mb-4 text-thePointRed bg-transparent drop-shadow-md"> Enter Patient Details </h1>

                                <div className="grid md:grid-cols-2 md:gap-7 rounded-md py-2">    
                                    <div className="relative z-0 w-full group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input id="firstName" name="firstName" type="text" required className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Jap-mar " />
                                    </div>
                                    
                                    <div className="relative z-0 w-full group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input id="lastName" name="lastName" type="text" required className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Jap-mar " />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 md:gap-7 rounded-md py-2 mb-3">    
                                    <div className="relative z-0 w-full group">
                                    <label htmlFor="contactNumber">Contact Number</label>
                                    <input id="contactNumber" name="contactNumber" type="text" required className=" shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Jap-mar " />
                                    </div>
                                    <div className="relative z-0 w-full group">
                                    <label htmlFor="age">Age</label>
                                    <input id="age" name="age" type="text" required className=" shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Jap-mar " />
                                    </div>
                                </div>
                                    <div className="w-full">
                                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preffered Date:</label>
                                        <input id="date" name="date" type="date" className=" shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                                    </div>

                                    <label for="time" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Preffered time:</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
                                            </svg>
                                        </div>
                                        <input type="time" id="time" className="shadow-md bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value="00:00" required />
                                    </div>

                                    <div className=" flex mt-7 justify-center">
                                        <Link to={"/payment"}>
                                            <button id="bookingContinue" type="button" className="bg-thePointRed w-25 text-white bg-primary-600 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-2xl text-sm px-5 py-2 text-center 
                                            transform active:scale-x-100 transition-transform transition ease-in delay-100 hover:-translate-y-1 hover:drop-shadow-xl duration-300 ">
                                            Continue
                                            </button>
                                        </Link>

                                    </div>
                            </form>
                    </div>
                </div>
                
            </div>


        
    );
}
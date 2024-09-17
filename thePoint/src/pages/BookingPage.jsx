import { Link } from "react-router-dom"
import Header from "../Header";

export default function BookingPage(){

    return(
                <div className="px-4 bg-slate">
                Booking Page

                <div className="flex justify-center">
                    <div className="m-auto px-6 ">
                        <div className="text-center">
                            Multi step progress bar
                        </div>
                        {/* Form */}
                            <form className="mx-auto p-6 border rounded-xl shadow-lg shadow-thePointRed60">
                                <h1 className="flex justify-center gap-5 text-3xl mb-4 text-thePointRed bg-transparent drop-shadow-md font-semibold"> Enter Patient Details </h1>

                                <div className="grid md:grid-cols-2 md:gap-7 rounded-md py-2">    
                                    <div className="relative z-0 w-full group">
                                    <label For="firstName">First Name</label>
                                    <input id="firstName" name="firstName" type="text" required class="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Jap-mar " />
                                    </div>
                                    
                                    <div className="relative z-0 w-full group">
                                    <label For="lastName">Last Name</label>
                                    <input id="lastName" name="lastName" type="text" required class="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Jap-mar " />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 md:gap-7 rounded-md py-2 mb-3">    
                                    <div className="relative z-0 w-full group">
                                    <label For="lastName">Contact Number</label>
                                    <input id="name" name="name" type="text" required class=" shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Jap-mar " />
                                    </div>
                                    <div className="relative z-0 w-full group">
                                    <label For="lastName">Age</label>
                                    <input id="name" name="name" type="text" required class=" shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Jap-mar " />
                                    </div>
                                </div>
                                    <div className="w-full">
                                        <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preffered Date:</label>
                                        <input id="date" name="date" type="date" className=" shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                                    </div>

                                    <label for="time" class="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Preffered time:</label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
                                            </svg>
                                        </div>
                                        <input type="time" id="time" class="shadow-md bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value="00:00" required />
                                    </div>

                                    <div class=" flex mt-7 justify-center">
                                        <button type="button" class="bg-gradient-to-r from-thePointRed to-thePointPink w-25 text-white bg-primary-600 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-2xl text-sm px-5 py-2 text-center 
                                        transform active:scale-x-100 transition-transform transition ease-in delay-100 hover:-translate-y-1 hover:drop-shadow-xl duration-300 ">
                                        Continue
                                        </button>
                                    </div>
                            </form>
                    </div>
                </div>
                
            </div>


        
    );
}
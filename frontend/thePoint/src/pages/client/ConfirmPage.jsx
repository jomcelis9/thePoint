import { Link } from "react-router-dom"

export default function ConfirmPage(){
    return(
        <div className="relative">
        Booking Page

        <div className="flex justify-center mt-36">
            <div className="mx-auto px-6 ">

                <div className="text-center">
                <h1 className="text-3xl font-medium text-thePointRed bg-transparent"> Prioritize Your Health, Begin Healing </h1>
                </div>
                <div className=" mx-auto w-96 ">
                            <div className="flex justify-center items-center drop-shadow-2xl pt-7 mb-7">
                                    <ol className="flex items-center w-full">
                                        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-thePointRed after:border-4 after:inline-block dark:after:border-blue-800">
                                            <span className="flex items-center justify-center w-10 h-10 bg-thePointRed rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>                                            
                                            </span>
                                        </li>
                                        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-thePointRed after:border-4 after:inline-block dark:after:border-gray-700">
                                            <span className="flex items-center justify-center w-10 h-10 bg-thePointRed rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                            </span>
                                        </li>
                                        <li className="flex items-center ">
                                            <span className="flex items-center justify-center w-10 h-10 bg-thePointRed rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                                <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                                                </svg>
                                            </span>
                                        </li>
                                    </ol>
                            </div>  
                        </div>
                {/* Form */}
                {/* grid grid-cols-2 */}
                    <div className=" gap-1 border-2 rounded-xl p-5 ">
                    <h2>Customer Details</h2>
                        <div className="flex flex-col my-5 p-3 rounded-lg bg-gradient-to-r from-thePointRed to-thePointPink " >
                            <h3 className="text-sm text-white">Patient #1</h3>
                                        <label htmlFor="time" className=" font-semibold text-white">Happy Bday Jmar</label>
                                        
                                        <div className="flex justify-items-stretch gap-5">

                                            <div className="text-xs font-mono text-white font-medium">
                                                <p> <i>Contact Number: 09468138079 </i></p>
                                            </div>

                                            <div className="text-xs font-mono text-white font-medium">
                                                <p> <i>Age: 15 </i></p>
                                            
                                            </div>

                                            <div className="text-xs font-mono text-white font-medium">
                                                <p> <i>Peffered Date: 09/24/2024 </i></p>
                                            
                                            </div>

                                            
                                            <div className="text-xs font-mono text-white font-medium">
                                                <p> <i>Peffered Time: 4:30 pm </i></p>
                                            
                                            </div>

                                            <div className="text-xs font-mono text-white font-medium">
                                                <p> <i>Preffered Time: 4:30 pm </i></p>
                                            
                                            </div>
                                        </div>
                        </div>

                        <div className="flex flex-col my-5 p-3 rounded-lg bg-gradient-to-r from-thePointRed to-thePointPink " >
                            <h3 className="text-sm text-white">Patient #1</h3>
                                        <label htmlFor="time" className=" font-semibold text-white">Happy Bday Jmar</label>
                                        
                                        <div className="flex justify-items-stretch gap-5">

                                            <div className="text-xs font-mono text-white font-medium">
                                                <p> <i>Contact Number: 09468138079 </i></p>
                                            </div>

                                            <div className="text-xs font-mono text-white font-medium">
                                                <p> <i>Age: 15 </i></p>
                                            
                                            </div>

                                            <div className="text-xs font-mono text-white font-medium">
                                                <p> <i>Peffered Date: 09/24/2024 </i></p>
                                            
                                            </div>

                                            
                                            <div className="text-xs font-mono text-white font-medium">
                                                <p> <i>Peffered Time: 4:30 pm </i></p>
                                            
                                            </div>

                                            <div className="text-xs font-mono text-white font-medium">
                                                <p> <i>Preffered Time: 4:30 pm </i></p>
                                            
                                            </div>

                                            
                                        </div>
                                        
                        </div>

                        <div className="flex flex-col my-5 p-3 rounded-lg bg-gradient-to-r from-thePointRed to-thePointPink " >
                            <h3 className="text-sm text-white">Patient #1</h3>
                                        <label htmlFor="time" className=" font-semibold text-white">Happy Bday Jmar</label>
                                        
                                        <div className="flex justify-items-stretch gap-5">

                                            <div className="text-xs font-mono text-white font-medium">
                                                <p> <i>Contact Number: 09468138079 </i></p>
                                            </div>

                                            <div className="text-xs font-mono text-white font-medium">
                                                <p> <i>Age: 15 </i></p>
                                            
                                            </div>

                                            <div className="text-xs font-mono text-white font-medium">
                                                <p> <i>Peffered Date: 09/24/2024 </i></p>
                                            
                                            </div>

                                            
                                            <div className="text-xs font-mono text-white font-medium">
                                                <p> <i>Peffered Time: 4:30 pm </i></p>
                                            
                                            </div>

                                            <div className="text-xs font-mono text-white font-medium">
                                                <p> <i>Preffered Time: 4:30 pm </i></p>
                                            
                                            </div>
                                        </div>
                            </div>
                    </div>

                        <div className=" flex mt-7 justify-center">
                                        <Link to={""}>
                                            <button type="button" className="bg-gradient-to-r from-thePointRed to-thePointPink w-25 text-white bg-primary-600 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-2xl text-sm px-5 py-2 text-center 
                                            transform active:scale-x-100 transition-transform transition ease-in delay-100 hover:-translate-y-1 hover:drop-shadow-xl duration-300 ">
                                            Confirm
                                            </button>
                                        </Link>
                        </div>
            </div>
        </div>
    </div>
    );
}
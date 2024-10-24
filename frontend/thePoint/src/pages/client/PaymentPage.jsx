import { Link } from "react-router-dom"


export default function PaymentPage(){

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
                                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512">
                                            <path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                        </svg>
                                    </span>
                                </li>
                                <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-thePointRed after:border-4 after:inline-block dark:after:border-gray-700">
                                    <span className="flex items-center justify-center w-10 h-10 bg-thePointRed rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512">
                                            <path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                        </svg>
                                    </span>
                                </li>
                                <li className="flex items-center ">
                                    <span className="flex items-center justify-center w-10 h-10 bg-thePointRed rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                    <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                                                </svg>
                                    </span>
                                </li>
                            </ol>
                        </div>
                        </div>
                {/* Form */}

                    <div className="grid grid-cols-2 gap-1 border-2 rounded-xl">
                        <div className="border rounded-xl my-10 mx-5 my-10 p-6 bg-white rounded-xl shadow-lg shadow-white">
                            QR CODE:
                            <img src="/src/images/QR CODE.png" className="w-full rounded-lg">
                            </img>

                            <div className="grid gap-2 text-center">
                                <h3 className="font-medium text-2xl">Account Number: 0914xxx-xxx-x</h3>
                                <h3 className="font-medium text-2xl">Account Name: Juan D DelaCruz</h3>
                                <div className="mx-auto max-w-96">
                                    <p className="text-justify text-xs">
                                        <i>The clinic asks for a downpayment for your booking to be approved. 
                                        This is also to ensure commitment from clients and to secure the time slot for your appointment. 
                                        The downpayment will be deducted from your total bill during your visit. 
                                        The downpayment is non refundable upon cancelling.
                                        </i>
                                    </p>
                                </div>

                            </div>
                        </div>
                    <form className="p-6 mx-5 my-10 border rounded-xl shadow-md shadow-white bg-white ">
                            <h1 className="flex justify-center gap-5 text-xl mb-4 text-thePointRed bg-transparent drop-shadow-md"> Enter Downpayment Details </h1>

                                <div className="w-full">
                                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Name:</label>
                                    <input id="date" name="date" type="text" className=" shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. Juan Dela Cruz" />
                                </div>

                                <label htmlFor="accountNumber" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Number:</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                    </div>
                                    <input type="text" id="time" className="shadow-md bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. 88888888"         required 
                                    onKeyPress={(e) => {
                                    if (!/[0-9]/.test(e.key)) {
                                    e.preventDefault();
                                            }
                                        }}
                                    />
                                </div>

                                <div className="relative">
                                    <label htmlFor="referenceNumber" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Reference Number:</label>
                                    <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                    </div>
                                    <input type="text" id="time" className="shadow-md bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. 88888888" required />
                                </div>

                                <div className="relative">
                                    <label htmlFor="receipt" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Payment Receipt: </label>

                                    <div className="flex items-center justify-center w-full">
                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div> 

                                </div>

                                <div className=" flex mt-7 justify-center">
                                    <Link to={'/pending'}>
                                        <button type="button" className="bg-gradient-to-r from-thePointRed to-thePointPink w-25 text-white bg-primary-600 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-2xl text-sm px-5 py-2 text-center 
                                        transform active:scale-x-100 transition-transform transition ease-in delay-100 hover:-translate-y-1 hover:drop-shadow-xl duration-300 ">
                                        Submit
                                        </button>
                                    </Link>
                                </div>
                        </form>
                    </div>
                    
            </div>
        </div>
    </div>
    );

}
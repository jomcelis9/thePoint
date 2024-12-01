import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function PaymentPage() {
    const [accountName, setAccountName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [payAmount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const patientAppointmentDetail = location.state || {};

    const uploadDocument = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://127.0.0.1:5001/appointments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(patientAppointmentDetail)
            });
            if (!response.ok) {
                console.error("Failed to insert data");
            } else {
                const result = await response.json();
                console.log(result);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5001/routes/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: 500,
                    description: "Payment for appointment",
                }),
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                console.error("Error from server:", errorText);
                alert("Failed to create payment link. Server responded with an error.");
                return;
            }
    
            const data = await response.json();
            if (data.checkoutUrl) {
                window.location.href = data.checkoutUrl;
            } else {
                alert("Failed to create payment link. No checkout URL received.");
            }
        } catch (error) {
            console.error("Error during payment request:", error);
            alert("An error occurred while processing your payment. Please check your connection and try again.");
        } finally {
            setLoading(false);
        }
    
        console.log("Account Name:", accountName);
        console.log("Account Number:", accountNumber);
        console.log("PayAmount", payAmount);
    };

    return (
        <div className="flex justify-center items-center mt-20 min-h-screen">
            <div className="w-full max-w-3xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-medium text-thePointRed">Prioritize Your Health, Begin Healing</h1>
                </div>
                
                <div className="flex justify-center items-center drop-shadow-2xl pt-7 mb-7">
                    {/* Step Indicator */}
                    <ol className="flex items-center w-full">
                        {/* First Step */}
                        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-thePointRed after:border-4 after:inline-block dark:after:border-blue-800">
                            <span className="flex items-center justify-center w-10 h-10 bg-thePointRed rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512">
                                    <path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                </svg>
                            </span>
                        </li>
                        {/* Second Step */}
                        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-thePointRed after:border-4 after:inline-block dark:after:border-gray-700">
                            <span className="flex items-center justify-center w-10 h-10 bg-thePointRed rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512">
                                    <path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                </svg>
                            </span>
                        </li>
                        {/* Third Step */}
                        <li className="flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 bg-thePointRed rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                                </svg>
                            </span>
                        </li>
                    </ol>
                </div>

                {/* Form */}
                <div className="grid grid-cols-2 gap-1 border-2 rounded-xl shadow-lg">
                    <div className="border rounded-xl my-10 mx-5 p-6 bg-white">
                        QR CODE:
                        <img src="/src/images/QR CODE.png" className="w-full rounded-lg" />
                    </div>
                    <form onSubmit={handleSubmit} className="p-6 mx-5 my-10 border rounded-xl shadow-md bg-white">
                        <h1 className="flex justify-center gap-5 text-xl mb-4 text-thePointRed bg-transparent drop-shadow-md">Enter Payment Details</h1>

                        <div className="w-full">
                            <label htmlFor="accountName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Name:</label>
                            <input id="accountName" name="accountName" type="text" required value={accountName} onChange={(e) => setAccountName(e.target.value)} className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ex. Juan Dela Cruz" />
                        </div>

                        <label htmlFor="accountNumber" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Number:</label>
                        <input type="text" id="accountNumber" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} required className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ex. 1234 5678 90" />

                        <label htmlFor="amount" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount:</label>
                        <input type="number" id="amount" value={payAmount} onChange={(e) => setAmount(e.target.value)} required className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="PHP" />

                        <div className="flex justify-center pt-5">
                            <button type="submit" className="text-white bg-thePointRed hover:bg-opacity-90 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" disabled={loading}>{loading ? "Processing..." : "Continue"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

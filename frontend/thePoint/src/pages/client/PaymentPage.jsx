import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PaymentPage({ patientId, patientNumber }) {
    const navigate = useNavigate();
    const [accountName, setAccountName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [referenceNumber, setReferenceNumber] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (accountNumber.length !== 9) {
            alert("Account number must be exactly 9 characters long.");
            return;
        }
        if (referenceNumber.length !== 9) {
            alert("Reference number must be exactly 9 characters long.");
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5001/routes/payment/create-payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: 25000, // downpayment amount in cents
                    paymentMethod: 'gcash',
                    patientId: null,
                    patientNumber: patientNumber,
                    accountName: accountName,
                    accountNumber: accountNumber,
                    referenceNumber: referenceNumber,
                }),
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log("Payment intent created successfully:", data);
                setMessage("Payment Completed! Thank you for your downpayment.");
                setIsSuccess(true);
                setTimeout(() => {
                    navigate('/pending'); 
                }, 3000); 
            } else {
                console.error("Failed to create payment intent:", data);
                setMessage("Payment initiation failed: " + data.error);
                setIsSuccess(false);
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred while initiating payment.");
            setIsSuccess(false);
        }
    };
    

    return (
        <div className="relative">
            Booking Page
            <div className="flex justify-center mt-36">
                <div className="mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-3xl font-medium text-thePointRed bg-transparent">Prioritize Your Health, Begin Healing</h1>
                    </div>

                    <div className={`mt-4 text-center ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
                        {message}
                    </div>

                    <div className="grid grid-cols-2 gap-1 border-2 rounded-xl">
                        <div className="border rounded-xl my-10 mx-5 p-6 bg-white shadow-lg">
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 mx-5 my-10 border rounded-xl shadow-md bg-white">
                            <h1 className="flex justify-center gap-5 text-xl mb-4 text-thePointRed bg-transparent drop-shadow-md">Enter Downpayment Details</h1>

                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Fixed Downpayment Amount:</label>
                                <input
                                    type="text"
                                    value="250 PHP"
                                    readOnly
                                    className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                />
                            </div>

                            <div className="w-full mt-4">
                                <label htmlFor="accountName" className="block mb-2 text-sm font-medium text-gray-900">Account Name:</label>
                                <input
                                    id="accountName"
                                    type="text"
                                    value={accountName}
                                    onChange={(e) => setAccountName(e.target.value)}
                                    className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="ex. Juan Dela Cruz"
                                    required
                                />
                            </div>

                            <label htmlFor="accountNumber" className="block mt-4 mb-2 text-sm font-medium text-gray-900">Account Number:</label>
                            <input
                                id="accountNumber"
                                type="text"
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value)}
                                className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="ex. 88888888"
                                required
                                onKeyPress={(e) => {
                                    if (!/[0-9]/.test(e.key) || accountNumber.length >= 9) {
                                        e.preventDefault();
                                    }
                                }}
                            />

                            <label htmlFor="referenceNumber" className="block mt-4 mb-2 text-sm font-medium text-gray-900">Reference Number:</label>
                            <input
                                id="referenceNumber"
                                type="text"
                                value={referenceNumber}
                                onChange={(e) => setReferenceNumber(e.target.value)}
                                className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="ex. 88888888"
                                required
                                onKeyPress={(e) => {
                                    if (!/[0-9]/.test(e.key) || referenceNumber.length >= 9) {
                                        e.preventDefault();
                                    }
                                }}
                            />

                            <label htmlFor="receipt" className="block mt-4 mb-2 text-sm font-medium text-gray-900">Payment Receipt (optional):</label>
                            <input
                                type="file"
                                id="receipt"
                                onChange={(e) => setReceiptFile(e.target.files[0])}
                                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                accept="image/*"
                            />

                            <div className="flex mt-7 justify-center">
                                <button type="submit" className="bg-gradient-to-r from-thePointRed to-thePointPink w-25 text-white font-medium rounded-2xl text-sm px-5 py-2 text-center transform active:scale-x-100 transition-transform duration-300 hover:-translate-y-1 hover:drop-shadow-xl">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

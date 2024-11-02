import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PaymentPage({ patientId, patientNumber }) {
    const navigate = useNavigate();
    const [accountName, setAccountName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [referenceNumber, setReferenceNumber] = useState('');
    const [receiptFile, setReceiptFile] = useState(null);
    const [message, setMessage] = useState(''); // State for feedback message
    const [isSuccess, setIsSuccess] = useState(false); // State for success/failure indication

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('accountName', accountName);
        formData.append('accountNumber', accountNumber);
        formData.append('referenceNumber', referenceNumber);
        if (receiptFile) {
            formData.append('receipt', receiptFile);
        }

        // Add patient details to form data
        formData.append('patientId', patientId); // Use patientId prop
        formData.append('patientNumber', patientNumber); // Use patientNumber prop

        try {
            const response = await fetch('http://localhost:5001/routes/payment/create-payment', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                // Handle successful response
                console.log("Payment details submitted successfully.");
                setMessage("Payment submitted successfully!");
                setIsSuccess(true);
                navigate('/pending');
            } else {
                // Handle error
                console.error("Failed to submit payment details.");
                setMessage("Failed to submit payment details.");
                setIsSuccess(false);
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred while submitting payment.");
            setIsSuccess(false);
        }
    };

    return (
        <div className="relative">
            Booking Page
            <div className="flex justify-center mt-36">
                <div className="mx-auto px-6 ">
                    <div className="text-center">
                        <h1 className="text-3xl font-medium text-thePointRed bg-transparent">Prioritize Your Health, Begin Healing</h1>
                    </div>

                    <div className="mx-auto w-96 ">
                        <div className="flex justify-center items-center drop-shadow-2xl pt-7 mb-7">
                            <ol className="flex items-center w-full">
                            </ol>
                        </div>
                    </div>
                    <div className={`mt-4 text-center ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
                        {message}
                    </div>

                    {/* Form */}
                    <div className="grid grid-cols-2 gap-1 border-2 rounded-xl">
                        <div className="border rounded-xl my-10 mx-5 p-6 bg-white shadow-lg">
                            {/* Additional content can go here */}
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 mx-5 my-10 border rounded-xl shadow-md bg-white">
                            <h1 className="flex justify-center gap-5 text-xl mb-4 text-thePointRed bg-transparent drop-shadow-md">Enter Downpayment Details</h1>

                            <div className="w-full">
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
                                    if (!/[0-9]/.test(e.key)) {
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
                            />

                            <label htmlFor="receipt" className="block mt-4 mb-2 text-sm font-medium text-gray-900">Payment Receipt:</label>
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

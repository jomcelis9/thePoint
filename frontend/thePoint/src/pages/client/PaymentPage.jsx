import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function PaymentPage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const fixedDownpayment = 250; 
    const [loading, setLoading] = useState(false);

    const handlePay = async () => {
        if (!name || !phone || !email) {
            alert("Please fill in all required fields.");
            return;
        }
    
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5001/routes/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: fixedDownpayment * 100,
                    phone,
                    name,
                    email,
                    description: "Payment for appointment",
                    date: selectedDate.toISOString(), 
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
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex gap-10 p-10 bg-white shadow-lg rounded-lg border-2 w-3/5 max-w-4xl">
                <div className="bg-white p-5 shadow-lg rounded-lg border w-1/2">
                    <h2 className="text-lg font-medium text-thePointRed mb-4">Select Date</h2>
                    <Calendar
                        onChange={setSelectedDate}
                        value={selectedDate}
                        className="rounded-lg border-2 shadow-sm w-full"
                    />
                </div>

                <div className="bg-white p-5 shadow-lg rounded-lg border w-1/2">
                    <h2 className="text-lg font-medium text-thePointRed mb-4">Enter Your Details</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-gray-100 text-gray-800 p-2 rounded-lg border w-full shadow-inner"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-100 text-gray-800 p-2 rounded-lg border w-full shadow-inner"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="bg-gray-100 text-gray-800 p-2 rounded-lg border w-full shadow-inner"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Fixed Downpayment Amount:</label>
                        <input
                            type="text"
                            value={`${fixedDownpayment} PHP`}
                            readOnly
                            className="bg-gray-100 text-gray-800 p-2 rounded-lg border w-full shadow-inner"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Selected Date:</label>
                        <input
                            type="text"
                            value={selectedDate.toDateString()}
                            readOnly
                            className="bg-gray-100 text-gray-800 p-2 rounded-lg border w-full shadow-inner"
                        />
                    </div>

                    <button
                        onClick={handlePay}
                        className="w-full mt-5 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-thePointRed to-thePointPink hover:shadow-lg transition duration-200"
                        disabled={loading}
                    >
                        {loading ? "Processing..." : "Pay"}
                    </button>
                </div>
            </div>
        </div>
    );
}

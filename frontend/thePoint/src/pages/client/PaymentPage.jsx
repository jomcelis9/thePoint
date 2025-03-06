import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function PaymentPage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const fixedDownpayment = 250; 
    const [loading, setLoading] = useState(false);

    
    const location = useLocation();
    const patientAppointmentDetail = location.state || {}; // Access the passed data
    console.log("FORM DATA OUTSIDE:  ", patientAppointmentDetail);

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

    const handlePay = async () => {

        uploadDocument();

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
        <div className="pt-20">
            
            <div className="text-center">
                        <h1 className="text-3xl font-medium text-thePointRed bg-transparent"> Prioritize Your Health, Begin Healing </h1>
            </div>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex gap-10 p-10 bg-white shadow-lg rounded-lg border-2 w-3/5 max-w-4xl">
            <div className="bg-white p-5 shadow-lg rounded-lg border w-1/2">
                <h2 className="text-lg font-medium text-thePointRed mb-4">Client Details</h2>
                <label className="ml-2 text-gray-600">client #1</label>
                <div className="border p-3 rounded-md space-y-2">
                    <div className="flex">
                        <h3 className="font-semibold w-1/3">Name:</h3>
                        <p className="w-2/3">{patientAppointmentDetail.patient_name}</p>
                    </div>
                    <div className="flex">
                        <h3 className="font-semibold w-1/3">Age:</h3>
                        <p className="w-2/3">{patientAppointmentDetail.patient_age}</p>
                    </div>
                    <div className="flex">
                        <h3 className="font-semibold w-1/3">Type:</h3>
                        <p className="w-2/3">{patientAppointmentDetail.therapy_type}</p>
                    </div>
                    <div className="flex">
                        <h3 className="font-semibold w-1/3">Date:</h3>
                        <p className="w-2/3">{patientAppointmentDetail.preferred_date}</p>
                    </div>
                    <div className="flex">
                        <h3 className="font-semibold w-1/3">Time:</h3>
                        <p className="w-2/3">{patientAppointmentDetail.preferred_time}</p>
                    </div>
                </div>
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

                    <button onClick={uploadDocument}> 
                    TEST UPLOAD
                    </button>
                </div>
            </div>
        </div>
        </div>
       
    );
}

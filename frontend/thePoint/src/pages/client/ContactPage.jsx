import { useState } from "react";
import { Link } from "react-router-dom";
// import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_em7if1c", // Replace with your EmailJS Service ID
            "template_lqkyv2p", // Replace with your EmailJS Template ID
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: "doloritojmar@gmail.com", // The recipient's email
            },
            "vtsvqLH3xh7evy65Q" // Replace with your EmailJS Public Key
        )
        .then(() => {
            setSuccessMessage("Message sent successfully We will get back to you as soon as possible!");
            setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
            console.error("Error sending message:", error);
            setSuccessMessage("Failed to send message. Try again.");
        });
    };

    return (
        <div className="px-0 overflow-x-hidden">
            <div className="relative flex justify-center items-center h-screen w-screen overflow-x-hidden"
                style={{
                    backgroundImage: "url('/src/images/Sample.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>

                <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col sm:flex-row justify-between gap-6">

                    {/* Contact Us Section */}
                    <div className="flex flex-col items-center text-center space-y-4 sm:pr-8 sm:w-1/2">
                        <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
                        <p className="text-gray-600">
                            Interested in our services? Just pick up the phone to chat with a member of our team.
                        </p>
                        <p className="text-pink-500 font-semibold">Smart-0907 371 0209</p>
                        <p className="text-pink-500 font-semibold">Globe-0907 371 0208</p>
                    </div>

                    {/* Send a Message Form Section */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md sm:w-1/2">
                        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Send Us a Message</h3>
                        <form onSubmit={sendEmail}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800"
                                    placeholder="Email Address"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800"
                                    placeholder="Type your message..."
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-pink-500 text-white rounded-md focus:outline-none hover:bg-pink-600 transition duration-300"
                            >
                                SEND MESSAGE
                            </button>
                            {successMessage && <p className="mt-3 text-center text-green-600">{successMessage}</p>}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

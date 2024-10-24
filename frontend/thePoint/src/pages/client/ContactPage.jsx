import { Link } from "react-router-dom";

export default function ContactPage() {  
    return (
        <div className="flex items-center justify-center min-h-screen py-10 bg-gray-100">
            {/* Contact Page Content */}
            <div className="max-w-6xl mx-auto py-20 px-5">
                <h2 className="text-6xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
                <div className="flex flex-col md:flex-row justify-between">

                    <div className="space-y-8 mb-8 md:mb-0 md:mr-16">
                        <div className="flex items-center space-x-4 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
                            <img src="/src/images/location2.jpg" alt="Address" className="w-20 h-20" />
                            <div>
                                <h3 className="text-pink-500 font-bold text-2xl">Address</h3>
                                <p className="text-gray-700 text-lg">11023 Street, Barangay Uno Kidapawan City</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
                            <img src="/src/images/phone-removebg-preview.jpg" alt="Phone" className="w-20 h-20" />
                            <div>
                                <h3 className="text-pink-500 font-bold text-2xl">Phone</h3>
                                <p className="text-gray-700 text-lg">(63+) 9918272387</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
                            <img src="/src/images/email.png" alt="Email" className="w-20 h-20" />
                            <div>
                                <h3 className="text-pink-500 font-bold text-2xl">Email</h3>
                                <p className="text-gray-700 text-lg">info@pointneedsclinic.ph</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white bg-opacity-70 mx-auto p-10 w-full max-w-md border rounded-xl shadow-xl">
                        <h3 className="text-3xl font-bold mb-6 text-gray-800">Send Message</h3>
                        <form>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800 text-lg"
                                    placeholder="Full name"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800 text-lg"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-6">
                                <textarea
                                    id="message"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800 text-lg"
                                    placeholder="Type your Message..."
                                    rows="4"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-pink-500 text-white rounded-md focus:outline-none hover:bg-pink-600 transition duration-300"
                            >
                                SEND
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

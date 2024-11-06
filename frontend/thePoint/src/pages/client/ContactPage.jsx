import { Link } from "react-router-dom";

export default function ContactPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
            <div className="max-w-4xl w-full mx-auto px-5">

                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Contact Us</h2>

                <div className="bg-white p-8 rounded-lg shadow-xl">

                    {/* Contact Information */}
                    <div className="space-y-8 mb-10">
                        <div className="flex items-center space-x-4">
                            <img src="/src/images/location2.jpg" alt="Address" className="w-12 h-12 rounded-full" />
                            <div>
                                <h3 className="font-semibold text-gray-700 text-xl">Address</h3>
                                <p className="text-gray-600 text-md">11023 Street, Barangay Uno Kidapawan City</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src="/src/images/phone-removebg-preview.jpg" alt="Phone" className="w-12 h-12 rounded-full" />
                            <div>
                                <h3 className="font-semibold text-gray-700 text-xl">Phone</h3>
                                <p className="text-gray-600 text-md">(63+) 9918272387</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src="/src/images/email.png" alt="Email" className="w-12 h-12 rounded-full" />
                            <div>
                                <h3 className="font-semibold text-gray-700 text-xl">Email</h3>
                                <p className="text-gray-600 text-md">info@pointneedsclinic.ph</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Send a Message</h3>
                        <form>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    id="message"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800"
                                    placeholder="Type your message..."
                                    rows="4"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-pink-500 text-white rounded-md focus:outline-none hover:bg-pink-600 transition duration-300"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

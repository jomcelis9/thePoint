import { Link } from "react-router-dom";

export default function ContactPage() {  
    return (
        <div className="px-0 overflow-x-hidden">

            <nav className="bg-gray-800 p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="text-white text-xl font-bold">The Point</Link>
                    <div className="space-x-4">
                        <Link to="/" className="text-white">Home</Link>
                        <Link to="/about" className="text-white">About</Link>
                        <Link to="/contact" className="text-white">Contact</Link>
                    </div>
                </div>
            </nav>

            {/* Contact Page Content */}
            <div className="max-w-6xl mx-auto py-16 px-4">
                <h2 className="text-5xl font-bold text-center mb-8">Contact Us</h2>
                <div className="flex flex-col md:flex-row justify-between">
                    
                    <div className="space-y-8 mb-8 md:mb-0 md:mr-16">
                        <div className="flex items-center space-x-4">
                            <img src="/src/images/location2.jpg" alt="Address" className="w-16 h-16" />
                            <div>
                                <h3 className="text-pink-500 font-bold text-xl">Address</h3>
                                <p className="text-gray-700">11023 Street, Barangay Uno Kidapawan City</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src="/src/images/phone-removebg-preview.jpg" alt="Phone" className="w-16 h-16" />
                            <div>
                                <h3 className="text-pink-500 font-bold text-xl">Phone</h3>
                                <p className="text-gray-700">(63+) 9918272387</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img src="/src/images/email.png" alt="Email" className="w-17 h-20" />
                            <div>
                                <h3 className="text-pink-500 font-bold text-xl">Email</h3>
                                <p className="text-gray-700">info@pointneedsclinic.ph</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-transparent mx-auto p-8 w-full max-w-md border rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-black">Send Message</h3>
                        <form>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
                                    placeholder="Full name"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    id="message"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
                                    placeholder="Type your Message.."
                                    rows="4"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
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

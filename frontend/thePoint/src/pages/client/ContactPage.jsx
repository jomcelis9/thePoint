import { Link } from "react-router-dom";

export default function ContactPage() {
    return (
        <div className="px-0 overflow-x-hidden">
            <div className="relative flex justify-center items-center h-screen w-screen overflow-x-hidden"
                    style={{
                        backgroundImage: "url('/src/images/Sample.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>

                {/* Container for Contact Sections */}
                <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col sm:flex-row justify-between gap-6">

                    {/* Contact Us Section */}
                    <div className="flex flex-col items-center text-center space-y-4 sm:pr-8 sm:w-1/2">
                        <img src="/src/images/phone-icon.jpg" alt="Phone Icon" className="w-8 h-8" />
                        <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
                        <p className="text-gray-600">
                            Interested in our services? Just pick up the phone to chat with a member of our team.
                        </p>
                        <p className="text-pink-500 font-semibold">+1 857 829 5060</p>
                        <Link to="/global-numbers" className="text-pink-500 hover:underline">
                            View all global numbers
                        </Link>
                    </div>

                    {/* Send a Message Form Section */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md sm:w-1/2">
                        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Send Us a Message</h3>
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

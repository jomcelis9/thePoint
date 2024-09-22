import { Link } from "react-router-dom";
import Header from "../Header.jsx";

export default function IndexPage() {
    return (
        <div className="px-4">
            {/* Main Background Section */}
            <div className="relative flex justify-center items-center h-screen"
                style={{
                    backgroundImage: `url('/src/images/sample2.jpg')`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>

                <div className="absolute inset-0 bg-black opacity-40"></div> 

                <div className="relative z-10 text-center flex flex-col justify-center items-center">
                    <h1 className="text-white text-8xl font-bold mb-8">
                        Your Healing Journey 
                    </h1>
                    <h1 className="text-white text-8xl font-bold mb-8">
                        Starts Today
                    </h1>
                    <Link to={'/booking'}>
                        <button type="button" className="bg-gradient-to-r from-thePointRed to-thePointPink text-white focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-2xl text-sm px-10 py-2.5 text-center 
                            transform active:scale-x-100 transition-transform transition ease-in delay-100 hover:-translate-y-1 hover:drop-shadow-xl duration-300 button-with-bg">
                            Book
                        </button>
                    </Link>
                </div>
            </div>

            <main>
                {/* About Section */}
                <section className="about max-w-6xl mx-auto py-16 px-4">
                    <h2 className="text-3xl font-bold italic text-center mb-8">About The Point</h2>
                    <div className="md:flex md:items-center md:space-x-8">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <p>
                                Point Needs Awareness Clinic is a specialized therapy center dedicated to serving individuals with diverse needs, 
                                including children with special needs, persons with disabilities (PWD), and those requiring physical rehabilitation. 
                                Our clinic offers a wide range of therapy services tailored to each client’s unique requirements, promoting holistic well-being and independence.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <img src="/src/images/Sample.jpg" alt="About 1" className="w-90 h-100 rounded-lg shadow-md" />
                        </div>
                    </div>
                </section>

                {/* History Section */}
                <section className="history max-w-6xl mx-auto py-16 px-4">
                    <h2 className="text-3xl font-bold italic text-center mb-8">History</h2>
                    <div className="md:flex md:items-center md:space-x-8">
                        {/* First Image with Text */}
                        <div className="md:w-1/2 flex flex-col items-center">
                            <img src="/src/images/icon.jpg" alt="Image 1" className="w-90 h-100 rounded-lg shadow-md" />
                            <p className="mt-4 text-center">
                                Point Needs Awareness Clinic was established in 2018 with the vision of providing accessible and high-quality therapy services to children with special needs and persons with disabilities (PWD).
                            </p>
                        </div>

                        {/* Second Image with Text */}
                        <div className="md:w-1/2 flex flex-col items-center">
                            <img src="/src/images/icon.jpg" alt="Image 2" className="w-90 h-100 rounded-lg shadow-md" />
                            <p className="mt-4 text-center">
                                Over the years, the clinic expanded its services to include occupational therapy, physical therapy, and speech therapy, ensuring that each client received comprehensive and customized care.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Special Offer Section */}
                <section className="special-offer max-w-6xl mx-auto py-9 px-4 relative">
                    <div className="text-center p-6 rounded-lg shadow-md w-full h-48 md:h-64 lg:h-80 flex justify-center items-center relative overflow-hidden">
                        {/* Background Image */}
                        <div className="absolute inset-0"
                            style={{
                                backgroundImage: `url('/src/images/sample2.jpg')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                opacity: 0.5,
                            }}>
                        </div>

                        {/* Overlay for dimming effect */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Text Content */}
                        <p className="text-5xl font-bold italic text-white relative z-10">
                            Special Offer this weekend! Get 50% off for new users
                        </p>
                    </div>
                </section>

                 {/* History Section */}
                 <section className="history max-w-6xl mx-auto py-16 px-4">
                    <h2 className="text-3xl font-bold italic text-center mb-8">Meet Our Clinical Staff</h2>
                    <div className="md:flex md:items-center md:space-x-8">
                        {/* First Image with Text */}
                        <div className="md:w-1/2 flex flex-col items-center">
                            <img src="/src/images/icon.jpg" alt="Image 1" className="w-90 h-100 md:h-96 rounded-lg shadow-md" />
                        </div>

                        {/* Second Image with Text */}
                        <div className="md:w-1/2 flex flex-col items-center">
                            <img src="/src/images/icon.jpg" alt="Image 2" className="w-90 h-100 md:h-96 rounded-lg shadow-md" />
                        </div>

                        {/* Second Image with Text */}
                        <div className="md:w-1/2 flex flex-col items-center">
                            <img src="/src/images/icon.jpg" alt="Image 2" className="w-90 h-100 md:h-96 rounded-lg shadow-md" />
                        </div>
                    </div>
                </section>

                {/* Location Section */}
                <section className="location max-w-6xl mx-auto py-16 px-3">
                    <h2 className="text-3xl font-bold italic text-center mb-8">Our Location</h2>
                    <div className="md:flex md:items-center md:space-x-8">
                        <div className="md:w-1/2 flex justify-center">
                            <img src="/src/images/Map.png" alt="Our Location" className="w-90 h-100 rounded-lg shadow-md" />
                        </div>
                        <div className="md:w-1/2">
                            <p>
                                The Point Special Needs Awareness Clinic is conveniently located in Kidapawan City, surrounded by easily accessible landmarks like The Warehauz Gym and Cloud Express Vape Lounge.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
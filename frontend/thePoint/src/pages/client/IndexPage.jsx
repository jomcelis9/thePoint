import { Link } from "react-router-dom";

export default function IndexPage() {
    return (
        <div className="px-0 overflow-x-hidden"> 
            {/* Main Background Section */}
            <div className="relative flex justify-center items-center h-screen w-screen overflow-x-hidden" 
                style={{
                    backgroundImage: `url('/src/images/sample2.jpg')`, // Use the image as background
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            > 
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional: overlay for better text visibility */}

                <div className="relative z-10 text-center flex flex-col justify-center items-center">
                    {/* Main Heading */}
                    <h1 className="text-white text-6xl font-bold ">
                        Your Healing Journey
                    </h1>
                    <h2 className="text-white text-6xl font-bold mb-8">
                        Starts Today
                    </h2>

                    {/* Subheading */}
                    <p className="text-white font-bold italic text-2xl mb-20 max-w-lg mx-auto">
                        Embrace a Healthier, Happier You with Our Personalized Therapy Services, Designed to Support Your Unique Needs Every Step of the Way.
                    </p>

                        <Link to={'/booking'}>
                        <button
                        type="button"
                         className="bg-thePointRed hover:bg-thePointRedDark text-white focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-2xl text-lg px-8 py-3 text-center transition-all duration-300">
                        Book Now
                            </button>
                                </Link>
                            </div>
                        </div>


            {/* About Section */}
            <main>
                <section className="about max-w-6xl mx-auto py-16 px-4">
                    <h2 className="text-5xl font-bold text-center mb-8">About The Point</h2>
                    <div className="md:flex md:items-center md:space-x-8">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <p>
                                Point Needs Awareness Clinic is a specialized therapy center dedicated to serving individuals with diverse needs, including children with special needs, persons with disabilities (PWD), and those requiring physical rehabilitation.
                                Our clinic offers a wide range of therapy services tailored to each client’s unique requirements, promoting holistic well-being and independence.
                                With a team of certified therapists, we provide speech therapy, occupational therapy, physical therapy, and more, utilizing evidence-based practices to deliver personalized care.
                                Our mission is to create an inclusive and supportive environment where every individual can thrive and achieve their full potential.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <img src="/src/images/Sample.jpg" alt="About The Clinic" className="w-90 h-100 rounded-lg shadow-md" />
                        </div>
                    </div>
                </section>

                {/* History Section */}
                <section className="history max-w-6xl mx-auto py-16 px-4">
                    <h2 className="text-5xl font-bold text-center mb-8">History</h2>
                    <div className="md:flex md:items-center md:space-x-8">
                        {/* First Image with Text */}
                        <div className="md:w-1/2 flex flex-col items-center">
                            <img src="/src/images/icon.jpg" alt="Image 1" className="w-90 h-100 rounded-lg shadow-md" />
                            <p className="mt-4 text-center">
                                Point Needs Awareness Clinic was established in 2018 with the vision of providing accessible and high-quality therapy services to children with special needs and persons with disabilities (PWD). What began as a small therapy center with a handful of dedicated therapists quickly grew into a trusted clinic, recognized for its personalized approach to care. The founders, inspired by their experiences in the healthcare field, sought to create a welcoming space where families could find support and hope for their loved ones' developmental and rehabilitative needs.
                            </p>
                        </div>

                        {/* Second Image with Text */}
                        <div className="md:w-1/2 flex flex-col items-center">
                            <img src="/src/images/History.jpg" alt="Image 2" className="w-90 h-100 rounded-lg shadow-md" />
                            <p className="mt-4 text-center">
                                Over the years, the clinic expanded its services to include occupational therapy, physical therapy, and speech therapy, ensuring that each client received comprehensive and customized care. The clinic’s growth was driven by the increasing demand for specialized therapies in the community and the commitment of its professional staff. Through continuous learning and adopting evidence-based practices, Point Needs Awareness Clinic built a reputation for excellence, attracting clients from nearby towns and cities seeking a more inclusive and understanding approach to therapy.
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

                {/* Location Section */}
                <section className="location max-w-6xl mx-auto py-16 px-3">
                    <h2 className="text-5xl font-bold text-center mb-8">Our Location</h2>
                    <div className="md:flex md:items-center md:space-x-8">
                        {/* Google Map iframe on the left */}
                        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                            <div className="rounded-[20px] overflow-hidden"> {/* Added a wrapper div with border radius */}
                                <iframe
                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123087121675!2d125.07596397475764!3d6.994781793006338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8f9d3af1e21bb%3A0xe2e6d0c24cffe138!2sThe%20Point%20Special%20Needs%20Awareness!5e0!3m2!1sen!2sph!4v1727246673645!5m2!1sen!2sph"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>


                        {/* Text content on the right */}
                        <div className="md:w-1/2">
                            <p className="text-lg leading-relaxed">
                                The Point Special Needs Awareness Clinic is conveniently located in Kidapawan City, surrounded by easily accessible landmarks like The Warehauz Gym and Cloud Express Vape Lounge. Situated in a quiet and peaceful area, the clinic provides a comfortable and welcoming environment for clients seeking specialized therapy services. With nearby local amenities and ample space around, the clinic is ideal for clients who prefer a serene and focused atmosphere. This prime location ensures that families from surrounding neighborhoods can easily reach the clinic for consultations, assessments, and therapy sessions.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

import { Link } from "react-router-dom";
import tourVideo from '../../Videos/Tour.mp4'
import React, { useState } from 'react';
export default function IndexPage(user) {
    const [isGalleryVisible, setGalleryVisible] = useState(false);

    const toggleGallery = () => {
        setGalleryVisible(!isGalleryVisible);
    };

    console.log
    return (
        <div id="Home" className="px-0 overflow-x-hidden">
            {/* Main Background Section */}
            <div className="relative flex justify-center items-center h-screen w-screen overflow-x-hidden"
            >
                <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover" 
                src={tourVideo} // Use the imported video variable here
            ></video>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 flex flex-col items-start px-4 md:px-32">
                    {/* Overlay Image */}

                    {/* Main Heading */}
                    <h1 className="text-white font-bold" style={{ marginLeft: '-550px', fontSize: '4rem', marginBottom: '0.5rem', marginTop: '-50px' }}>
                        Your Healing Journey
                    </h1>
                    <h2 className="text-white font-bold" style={{ marginLeft: '-550px', fontSize: '4rem', marginTop: '-30px' }}>
                        Starts Today
                    </h2>

                    {/* Subheading Paragraph */}
                    <p className="text-white font-normal italic text-lg md:text-1xl mb-30 md:mb-3 max-w-lg" style={{ marginLeft: '-550px', marginTop: '13px' }}>
                        Embrace a Healthier, Happier You with Our Personalized Therapy Services, Designed to Support Your Unique Needs Every Step of the Way.
                    </p>

                    <Link to={'/bookchoice'}>
                        <button
                            type="button"
                            className="bg-thePointRed hover:bg-thePointRedDark 
                            text-white focus:ring-2 focus:outline-none focus:ring-purple-300 
                            font-medium rounded-2xl text-lg px-8 py-3 text-center transition-all duration-300 animate-pulse"
                            style={{ marginLeft: '-550px', marginTop: '13px' }}
                        >
                            Book Now
                        </button>
                    </Link>
                </div>
            </div>

            {/* About Section */}
            <main>
                <section id="about" className="about max-w-7xl mx-auto py-20 px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">About The Point {user.email}</h2>

                    <div className="md:flex md:items-center md:space-x-8">
                        <div className="relative md:w-1/2 flex justify-center mb-8 md:mb-0">
                            <div className="relative rounded-lg overflow-hidden shadow-md">
                                {/* Main Image */}
                                <img 
                                    src="https://imgur.com/VEo7qMK.jpg" 
                                    alt="About The Clinic" 
                                    style={{ width: '100%', height: 'auto', maxWidth: '600px' }} 
                                />

                                {/* White Fade Box */}
                                <div 
                                    className="absolute bottom-0 left-0 w-full h-1/3" 
                                    style={{
                                        background: 'linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent)',
                                    }}
                                />
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <p className="text-2xl leading-relaxed">
                                Point Needs Awareness Clinic is a specialized therapy center dedicated to serving individuals with diverse needs, including children with special needs, persons with disabilities (PWD), and those requiring physical rehabilitation.
                                Our clinic offers a wide range of therapy services tailored to each client’s unique requirements, promoting holistic well-being and independence.
                                With a team of certified therapists, we provide speech therapy, occupational therapy, physical therapy, and more, utilizing evidence-based practices to deliver personalized care.
                                Our mission is to create an inclusive and supportive environment where every individual can thrive and achieve their full potential.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="history max-w-8xl mx-auto py-16 px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">History</h2>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {/* Clinic Establishment */}
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                            <div className="h-96 w-full">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src="https://imgur.com/k5duTGP.png"
                                    alt="History Image 1"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">Clinic Establishment</h1>
                                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    Point Needs Awareness Clinic was established in 2018 with the vision of providing accessible and high-quality therapy services to children with special needs and persons with disabilities (PWD).
                                </p>
                            </div>
                        </div>
                
                        {/* Service Expansion */}
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                            <div className="h-96 w-full">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src="https://imgur.com/N54gbN9.jpg"
                                    alt="History Image 2"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">Service Expansion</h1>
                                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    Over the years, the clinic expanded its services to include occupational therapy, physical therapy, and speech therapy, ensuring that each client received comprehensive and customized care.
                                </p>
                            </div>
                        </div>

                        {/* Community Engagement */}
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                            <div className="h-96 w-full">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src="https://imgur.com/qIB8IBB.jpg"
                                    alt="History Image 2"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">Community Engagement</h1>
                                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    The clinic actively engages with the community through workshops and outreach programs, raising awareness about the needs of individuals with disabilities and promoting inclusivity.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div>
            {/* Gallery Button */}
            <div className="text-center py-4">
                <button
                    onClick={toggleGallery}
                    className="bg-thePointRed hover:bg-thePointRedDark text-white font-medium rounded-full py-2 px-4 text-xl transition-all duration-300"
                >
                    {isGalleryVisible ? 'View Less' : 'View More'}{' '}
                    <span className={`transform ${isGalleryVisible ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}>
                        ▼
                    </span>
                </button>
            </div>

            {/* Gallery Section */}
            {isGalleryVisible && (
                <section className="gallery max-w-8xl mx-auto py-16 px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Gallery</h2>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
                        {/* Image 1 */}
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                            <div className="h-96 w-full">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src="https://media.istockphoto.com/id/1400106238/photo/child-psychotherapy.jpg?s=612x612&w=0&k=20&c=1dcvLgqg5ckxSNLQ2FT82o_yKRReS5C_Qy1aGF77h8Y="
                                    alt="Gallery Image 1"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        </div>

                        {/* Image 2 */}
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                            <div className="h-96 w-full">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src="https://media.istockphoto.com/id/1387958415/photo/assessment-of-kids-mental-development-professional-woman-psychologist-watching-little-boy.jpg?s=612x612&w=0&k=20&c=I6yp0JerQImRVaKeLmY58mnFG1tJ41SKzmzfaHXC6tk="
                                    alt="Gallery Image 2"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        </div>

                        {/* Image 3 */}
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                            <div className="h-96 w-full">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src="https://img.freepik.com/free-photo/kid-doing-occupational-therapy-session_23-2149091533.jpg?semt=ais_hybrid"
                                    alt="Gallery Image 3"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        </div>

                        {/* Image 4 */}
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                            <div className="h-96 w-full">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src="https://bloomingwords.in/images/Special-Education-in-Delhi3.jpg"
                                    alt="Gallery Image 4"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        </div>

                        {/* Image 5 */}
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                            <div className="h-96 w-full">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqtF8FIl3uGOp_LXpU6YwYp2iAfg_jt1fXgg&s"
                                    alt="Gallery Image 5"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        </div>

                        {/* Image 6 */}
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                            <div className="h-96 w-full">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src="https://www.understood.org/_next/image?url=https%3A%2F%2Fcdn-images.understood.org%2Fp0qf7j048i0q%2F6PmlFnyu98xQLILwtw07uS%2F594889168b76fba58fc1b8636ea381da%2FG607499308.png&w=3840&q=75&dpl=dpl_64R2spNwgW9B4EXiKNVgrZVFc1Dz"
                                    alt="Gallery Image 6"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        </div>
                    </div>
                </section>
            )}
        </div>

                <section id="about" className="max-w-7xl mx-auto py-20 px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Location</h2>
                    <div className="md:flex md:items-center md:space-x-8">
                        <div className="md:w-1/2 rounded-[20px] overflow-hidden w-full h-96 md:h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.3199326973763!2d125.07617524430502!3d6.994764509052299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8f9d3af1e21bb%3A0xe2e6d0c24cffe138!2sThe%20Point%20Special%20Needs%20Awareness!5e0!3m2!1sen!2sph!4v1730910582652!5m2!1sen!2sph"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            />
                        </div>

                        <div className="md:w-1/2 mt-0 md:mt-0">
                            <p className="text-2xl text-gray-700 mb-4">
                                We are located in 46 Riverpark Subdivision, Kidapawan City, 9400 Cotabato. Our center provides support, education, and awareness for people with special needs in the local community. We aim to create a more inclusive environment and offer resources to help individuals and families.
                            </p>
                                <p className="text-gray-900">
                                Address: The Point Special Needs Awareness, 46 Riverpark Subdivision, Kidapawan City, 9400 Cotabato
                             </p>
                         </div>
                     </div>
                </section>
            </main>
        </div>
    );
}

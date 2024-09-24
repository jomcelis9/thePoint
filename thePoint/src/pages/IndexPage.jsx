import { Link } from "react-router-dom";

export default function IndexPage(){
    return(
        <div className="px-4">
            <div className="relative flex justify-center items-center h-screen" style={{
                backgroundImage: `url('/src/images/sample2.jpg')`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                {/* Overlay for text/button */}
                <div className="absolute inset-0 bg-black opacity-40"></div> {/* Optional overlay to darken background */}

                <div className="relative z-10 text-center">
                    <h1 className="text-white text-5xl font-bold mb-8">
                        Your Healing Journey Starts Today
                    </h1>
                    <Link to={'/booking'}>
                        <button type="button" className="bg-gradient-to-r from-thePointRed to-thePointPink text-white bg-primary-600 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-3xl text-sm px-5 py-2.5 text-center 
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
                            With a team of certified therapists, we provide speech therapy, occupational therapy, physical therapy, and more, utilizing evidence-based practices to deliver personalized care. 
                            Our mission is to create an inclusive and supportive environment where every individual can thrive and achieve their full potential.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center space-x-4">
                        <img src="src/images/Sample.jpg" alt="About 1" className="w-90 h-100 rounded-lg shadow-md" /> {/* Adjust size here */}
                        </div>
                    </div>
                </section>

                {/* HISTORY*/}
                <section className="location max-w-9xl mx-auto py-20 px-5">
    <h2 className="text-3xl font-bold italic text-center mb-8">HISTORY</h2>
    <div className="md:flex md:items-center md:space-x-8">
        {/* First Image with Text */}
        <div className="md:w-1/2 flex flex-col items-center space-x-4"> 
            <img src="src\images\icon.jpg" alt="Image 1" className="w-90 h-100 rounded-lg shadow-md" />
            <p className="mt-4 text-center"> 
                Point Needs Awareness Clinic was established in 2018 with the vision of providing accessible and high-quality therapy services to children with special needs and persons with disabilities (PWD). What began as a small therapy center with a handful of dedicated therapists quickly grew into a trusted clinic, recognized for its personalized approach to care.
            </p>
        </div>

        {/* Second Image with Text */}
        <div className="md:w-1/2 flex flex-col items-center space-x-4"> 
            <img src="src\images\icon.jpg" alt="Image 2" className="w-90 h-100 rounded-lg shadow-md" />
            <p className="mt-4 text-center">
                Over the years, the clinic expanded its services to include occupational therapy, physical therapy, and speech therapy, ensuring that each client received comprehensive and customized care. Through continuous learning and adopting evidence-based practices, Point Needs Awareness Clinic built a reputation for excellence.
            </p>
        </div>
    </div>
    </section>


{/* Special Offer Section */}
<section className="special-offer max-w-6xl mx-auto py-9 px-4 relative">
    <div
        className="text-center p-6 rounded-lg shadow-md w-full h-48 md:h-64 lg:h-80 flex justify-center items-center relative overflow-hidden"
    >
        {/* Background Image */}
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: `url('src/images/sample2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.5 // Adjust the opacity level here
            }}
        ></div>

        {/* Overlay for dimming effect */}
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay with darker opacity */}

        {/* Text Content */}
        <p className="text-5xl font-bold text-white relative z-10">
            Special Offer this weekend! Get 50% off for new users
        </p>
    </div>
</section>






                {/* Location Section */}
                <section className="location max-w-6xl mx-auto py-16 px-3">
                <h2 className="text-3xl font-bold italic text-center mb-8">Our Location</h2>
                    <div className="md:flex md:items-center md:space-x-8">
                    <div className="md:w-1/2 flex justify-center space-x-4">
                    <img src="src\images\Map.png" alt="About 1" className="w-90 h-100 rounded-lg shadow-md" /> {/* Adjust size here */}
                    </div>
                        <div className="md:w-1/2">
                            <p>
                            The Point Special Needs Awareness Clinic is conveniently located in Kidapawan City, surrounded by easily accessible landmarks like The Warehauz Gym and Cloud Express Vape Lounge. 
                            Situated in a quiet and peaceful area, the clinic provides a comfortable and welcoming environment for clients seeking specialized therapy services. 
                            With nearby local amenities and ample space around, the clinic is ideal for clients who prefer a serene and focused atmosphere. 
                            This prime location ensures that families from surrounding neighborhoods can easily reach the clinic for consultations, assessments, and therapy sessions.
                            </p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}

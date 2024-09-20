
import { Link } from "react-router-dom"
import Header from "../Header.jsx"



export default function IndexPage(){
    return(
        <div className="px-4">Index page here NEW HI JMAR
            <div className="flex justify-center">
            <Link to={'/booking'}>
                <button type="button" className="bg-gradient-to-r from-thePointRed to-thePointPink text-white bg-primary-600 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-3xl text-sm px-5 py-2.5 text-center 
                transform active:scale-x-100 transition-transform transition ease-in delay-100 hover:-translate-y-1 hover:drop-shadow-xl duration-300 "> Booking Appointment </button>
            </Link>
            </div>
            <main>


                {/* About Section */}
                <section className="about max-w-6xl mx-auto py-16 px-4"> {/* Tailwind container */}
                    <h2 className="text-3xl font-bold text-center mb-8">About The Point</h2>
                    <div className="md:flex md:items-center md:space-x-8"> {/* Flexbox for layout */}
                        <div className="md:w-1/2 mb-8 md:mb-0"> {/* Half-width column for text */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center space-x-4"> 
                            <img src="src\images\Sample.jpg" alt="About 1" className="w-1/2 rounded-lg shadow-md" /> 
                        </div>
                    </div>
                </section>

                {/* Location Section */}
                <section className="location max-w-6xl mx-auto py-16 px-4"> {/* Tailwind container */}
                    <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
                    <div className="md:flex md:items-center md:space-x-8"> {/* Flexbox for layout */}
                        <div className="md:w-1/2 mb-8 md:mb-0"> {/* Half-width column for the map */}
                            <img src="map.png" alt="Map" className="w-full rounded-lg shadow-md" /> {/* Replace with your map */}
                        </div>
                        <div className="md:w-1/2"> {/* Half-width column for text */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
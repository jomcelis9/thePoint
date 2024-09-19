import { Link } from "react-router-dom"
import Header from "../Header.jsx"

export default function IndexPage(){
    return(
        <main>
                {/* Hero Section */}
                <section className="hero bg-cover bg-center h-[60vh] flex items-center justify-center text-white"> {/* Tailwind classes for full-width background */}
                    <div className="text-center"> {/* Center the content */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Healing Journey Starts Today</h1>
                        <Link to={'/booking'}>
                            <button className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Book</button>
                        </Link>
                    </div>
                </section>

                {/* About Section */}
                <section className="about max-w-6xl mx-auto py-16 px-4"> {/* Tailwind container */}
                    <h2 className="text-3xl font-bold text-center mb-8">About The Point</h2>
                    <div className="md:flex md:items-center md:space-x-8"> {/* Flexbox for layout */}
                        <div className="md:w-1/2 mb-8 md:mb-0"> {/* Half-width column for text */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center space-x-4"> {/* Half-width column for images */}
                            <img src="about1.jpg" alt="About 1" className="w-1/2 rounded-lg shadow-md" /> {/* Replace with your images */}
                            <img src="about2.jpg" alt="About 2" className="w-1/2 rounded-lg shadow-md" /> {/* Replace with your images */}
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
    )
}
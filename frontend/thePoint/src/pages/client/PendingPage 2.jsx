export default function PendingPage() {
    return (
        <div id="Home" className="px-0 overflow-x-hidden"> 
            {/* Main Background Section */}
            <div className="relative flex justify-center items-center h-screen w-screen overflow-x-hidden" 
                style={{
                    backgroundImage: `url('/src/images/sample2.jpg')`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            > 
                <div className="absolute inset-0 bg-black opacity-50"></div> 

                <div className="relative z-10 text-center flex flex-col justify-center items-center">
                    {/* Transparent Radiant Blur Background */}
                    <div className="absolute w-full h-full top-1/2 transform -translate-y-1/2">
                        <div className="bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-indigo-500/30 opacity-30 w-64 h-64 rounded-full filter blur-3xl mx-auto"></div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-2xl relative z-20">
                        BOOKING PENDING!
                    </h1>
                    {/* Subheading */}
                    <p className="text-white font-light text-lg md:text-2xl max-w-lg mx-auto drop-shadow-2xl relative z-20">
                        Your appointment request has been received.
                        We'll review and confirm your booking shortly.
                        Thank you for your patience.
                    </p>
                </div>
            </div>
        </div>
    )
}

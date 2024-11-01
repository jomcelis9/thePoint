import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const sidebarRef = useRef(null); // Reference for the sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggles modal visibility
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logged out");
    setIsModalOpen(false); // Close modal after logout
  };

  // Detect clicks outside of sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false); // Close sidebar if clicked outside
      }
    };

    // Add event listener when sidebar is open
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="border-thePointRed">
      <nav className="flex-no-wrap fixed max-w-[95rem] w-full mx-auto sm:flex sm:items-center sm:justify-between bg-white border-x-0 border-b">
        <div className="flex items-center justify-between">
          <div className="ml-6">
            <Link to={"/"}>
              <img src="src/images/THE POINT LOGO tp 2.png" className="w-36" alt="Logo" />
            </Link>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 
              rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm 
              hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              id="hs-navbar-example-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-example"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-example"
          className="inline-block align-middle"
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link
              to="/"
              className="font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
            >
              Contact
            </Link>
            <Link
              to="/book"
              className="font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
            >
              Book
            </Link>

            {/* Profile Icon to Toggle Sidebar */}
            <img 
              src="/src/images/icons.png"
              className="w-11 mr-7 cursor-pointer"
              alt="User Profile"
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          ref={sidebarRef} // Assign sidebar ref here
          className="fixed right-0 top-0 w-[313px] h-[313px] bg-gradient-to-b from-[#9053DE] to-[#4E2D78] rounded-bl-[50px] rounded-tr-0 rounded-tl-0 rounded-br-0 shadow-lg z-50 transition-transform duration-300 ease-in-out"
        >
          <div className="flex flex-col items-center p-5">
            {/* Profile Icon */}
            <img 
              src="/src/images/icons.png" 
              className="w-16 mb-2" 
              alt="User Profile" 
            />
            {/* User Name */}
            <h2 className="text-white text-xl font-bold mb-1">Jomari Resonable Celis</h2> {/* Reduce mb to bring it closer */}
            <h2 className="text-white text-base font-bold opacity-75">jmardolorito@pogi.com</h2> {/* Reduced font size */}

            <ul className="mt-4 w-full text-left">
              <li className="flex items-center text-white hover:text-gray-200 mb-2 ml-0">
                <img 
                  src="/src/images/profile.png" 
                  alt="Profile Icon" 
                  className="w-6 h-6 mr-3"
                />
                <Link to="/accountdetails">Account Details</Link>
              </li>
              <li className="flex items-center text-white hover:text-gray-200 mb-2 ml-0">
                <img 
                  src="/src/images/statuss.png" 
                  alt="Status Icon" 
                  className="w-6 h-6 mr-3"
                  style={{ marginTop: "5px" }}  
                />
                <Link to="/booking-status">Booking Status</Link>
              </li>
              <li className="flex items-center text-white hover:text-gray-200 mb-2 ml-0">
                <img 
                  src="/src/images/emaill.png" 
                  alt="Email Icon" 
                  className="w-6 h-6 mr-3"
                  style={{ marginTop: "0px" }}  
                />
                <Link to="/contact">Contact Us</Link> {/* Use Link to navigate to the Contact page */}
              </li>
              <li className="flex items-center text-white hover:text-gray-200 mb-2 ml-0">
                <img 
                  src="/src/images/logout.png" 
                  alt="Logout Icon" 
                  className="w-6 h-6 mr-3"
                  onClick={toggleModal} // Toggle the modal on logout click
                />
                <span className="cursor-pointer" onClick={toggleModal}>
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <h3 className="mb-4 text-lg font-bold">Are you sure you want to log out?</h3>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleLogout}
            >
              Yes, Log Out
            </button>
            <button
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


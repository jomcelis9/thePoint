import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const sidebarRef = useRef(null);
  const lastScrollY = useRef(0);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const handleLogout = () => {
    console.log("Logged out");
    setIsModalOpen(false);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <style>
        {`
          .sidebar {
            transition: transform 0.3s ease, opacity 0.3s ease;
            transform: translateX(100%);
            opacity: 0;
            visibility: hidden;
          }
          .sidebar.open {
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
          }
          .header-link {
             color: rgb(169, 169, 169);
            font-weight: bold;
            transition: color 0.3s ease, transform 0.3s ease;
            text-shadow: 2px 2px px rgba(0, 0, 0, 0.5);
          }
          .header-link:hover {
            color: rgb(255, 0, 255); /* Header link hover color */
            transform: scale(1.2); 
          }
          .sidebar-link {
            transition: color 0.3s ease, transform 0.3s ease;
            color: black; /* Sidebar link color */
            display: flex;
            align-items: center;
          }
          .sidebar-link:hover {
            color: rgb(255, 0, 255); /* Sidebar link hover color */
            transform: scale(1.1);
          }
          .header {
            height: 60px; /* Reduced height */
            background-color: rgba(196,196,196, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            margin-top: 10px;
            transition: opacity 0.3s ease, transform 0.3s ease; /* Smooth transition for visibility */
          }
          .header.hidden {
            opacity: 0; /* Hide header */
            transform: translateY(-100%); /* Move header out of view */
          }
          .header img.logo {
            width: 120px; 
          }
          .header img.icon {
            width: 45px; 
            margin-right: 10px;
          }
        `}
      </style>
      <nav className={`flex-no-wrap fixed max-w-[800rem] w-full mx-auto sm:flex sm:items-center sm:justify-between header ${!isHeaderVisible ? 'hidden' : ''}`}>
        <div className="flex items-center justify-between">
          <div className="ml-6">
            <Link to={"/"}>
              <img src="https://imgur.com/u0PL0MA.png" className="w-28 logo" alt="Logo" />
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
          <Link to="/" className="header-link hover:text-gray-400 focus:outline-none"onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Home
          </Link>
            <Link to="/" onClick={scrollToAbout} className="header-link hover:text-gray-400 focus:outline-none">
              About Us
            </Link>
            <Link to="/contact" className="header-link hover:text-gray-400 focus:outline-none">
              Contact
            </Link>
            <Link to="/bookchoice" className="header-link hover:text-gray-400 focus:outline-none">
              Book
            </Link>

            {/* Profile Icon to Toggle Sidebar */}
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed right-5 w-[300px] h-72 bg-white rounded-lg shadow-lg z-50 sidebar ${
          isSidebarOpen ? "open" : ""
        }`}
        style={{ top: "80px" }}
      >
        <div className="flex flex-col items-start p-6"> {/* Increased padding for more space */}
          <div className="flex items-center">
            <img 
              src="/src/images/icon.png" 
              className="w-12 h-12 mr-3" // Increased image size
              alt="User Profile" 
            />
            <h2 className="text-gray-900 text-xl font-semibold">Jomari R. Luengas</h2> {/* Increased font size */}
          </div>
          <hr className="w-full border-t border-black my-2" />
          <ul className="mt-4 w-full text-left">
            <li className="flex items-center justify-between text-gray-700 mb-2 sidebar-link">
              <span className="flex items-center">
              <img 
                  src="/src/images/Faccount.png" 
                  alt="Profile Icon" 
                  className="w-6 h-6 mr-2" // Increased icon size
                />
                <Link to="/accountdetails" className="text-lg">Account Details</Link> {/* Increased font size */}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </li>
            <li className="flex items-center justify-between text-gray-700 mb-2 sidebar-link">
              <span className="flex items-center">
                <img 
                  src="/src/images/Fstatus.png" 
                  alt="Status Icon" 
                  className="w-6 h-6 mr-2" // Increased icon size
                />
                <Link to="/booking-status" className="text-lg">Booking Status</Link> {/* Increased font size */}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </li>
            <li className="flex items-center justify-between text-gray-700 mb-2 sidebar-link">
              <span className="flex items-center">
                <img 
                  src="/src/images/Fcontacts.png" 
                  alt="History Icon" 
                  className="w-6 h-6 mr-2" // Increased icon size
                />
                <Link to="/contact" className="text-lg">Contact Us</Link> {/* Increased font size */}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </li>
            <li className="flex items-center justify-between text-gray-700 mb-2 sidebar-link" onClick={handleLogout}>
              <span className="flex items-center">
                <img 
                  src="/src/images/Flogout.png" 
                  alt="Logout Icon" 
                  className="w-6 h-6 mr-2" // Increased icon size
                />
                <Link to="/" className="text-lg">Logout</Link> {/* Increased font size */}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

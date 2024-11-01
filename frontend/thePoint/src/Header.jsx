import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    console.log("Logged out");
    setIsModalOpen(false);
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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="border-thePointRed">
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
          .sidebar-link {
            transition: color 0.3s ease, transform 0.3s ease;
            color: gray; /* Default color */
            display: flex;
            align-items: center; /* Align icons and text */
          }
          .sidebar-link:hover {
            color: rgb(255, 0, 255); /* Purple with a hint of pink */
            transform: scale(1.1); /* Scale effect */
          }
          .sidebar-link img {
            transition: transform 0.3s ease; /* Scale for icons */
          }
          .sidebar-link:hover img {
            transform: scale(1.2); /* Scale effect for icons */
          }
        `}
      </style>
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
              className="font-bold sidebar-link hover:text-gray-400 focus:outline-none"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-bold sidebar-link hover:text-gray-400 focus:outline-none"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="font-bold sidebar-link hover:text-gray-400 focus:outline-none"
            >
              Contact
            </Link>
            <Link
              to="/booking"
              className="font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
            >
              Book
            </Link>

            {/* Profile Icon to Toggle Sidebar */}
            <img 
              src="/src/images/icon.png"
              className="w-11 mr-7 cursor-pointer"
              alt="User Profile"
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed right-5 w-[300px] h-72 bg-white rounded-lg shadow-lg z-50 sidebar ${
          isSidebarOpen ? "open" : ""
        }`}
        style={{ top: "115px" }}
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
                  alt="Email Icon" 
                  className="w-6 h-6 mr-2" // Increased icon size
                />
                <Link to="/contacts" className="text-lg">Contacts</Link> {/* Increased font size */}
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
            <li className="flex items-center justify-between text-gray-700 mb-2 sidebar-link" onClick={toggleModal}>
              <span className="flex items-center">
                <img 
                  src="/src/images/Flogout.png" 
                  alt="Logout Icon" 
                  className="w-6 h-6 mr-2" // Increased icon size
                />
                <span className="text-lg">Log Out</span> {/* Increased font size */}
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
          </ul>
        </div>
      </div>

      {/* Modal for Logout Confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-60">
          <div className="bg-white rounded-lg p-5 shadow-lg">
            <h3 className="text-lg font-semibold">Are you sure you want to log out?</h3>
            <div className="mt-4 flex justify-between">
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleLogout}>
                Yes
              </button>
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded" onClick={toggleModal}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

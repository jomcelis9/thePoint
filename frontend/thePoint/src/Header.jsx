import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="border-thePointRed">
      <nav className="flex-no-wrap fixed max-w-[95rem] w-full mx-auto sm:flex sm:items-center sm:justify-between bg-white border-x-0 border-b">
        <div className="flex items-center justify-between">
          <div className="ml-6">
            <Link to={"/index"}>
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
          <a
              className="font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
              href="#"
            >
              <Link
              to="/"
              className="font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
              >
              Home
              </Link>        
            </a>
            <a className="font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
            href="#about">
             About Us
            </a>

            <a
              className="font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
              href="#"
            >
              <Link
              to="/contact"
              className="font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
              >
              Contact
              </Link>        
            </a>

            <a
              className="font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
            >
               <Link
              to="/booking"
              className="font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
            >

              Book
            </Link>
            </a>

            <Link to={"/login"}>
              <button
                type="button"
                className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 
                shadow-md bg-gradient-to-r from-thePointRed to-thePointPink text-white font-bold rounded-full text-sm px-4 py-2 
                text-center mr-7"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

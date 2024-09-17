import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="border-thePointPink">
      <nav class="max-w-[95rem] w-full mx-auto sm:flex sm:items-center sm:justify-between ">
      <div class="flex items-center justify-between">
        <div className="-ml-6">
          <img src="src/images/THE POINT LOGO tp 2.png" className="w-36"></img>
        </div>
        <div class="sm:hidden">
          <button
            type="button"
            class="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 
            rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm 
            hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            id="hs-navbar-example-collapse"
            aria-expanded="false"
            aria-controls="hs-navbar-example"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-navbar-example"
          >
            <svg
              class="hs-collapse-open:hidden shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              class="hs-collapse-open:block hidden shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span class="sr-only">Toggle navigation</span>
          </button>
        </div>
      </div>
      <div
        id="hs-navbar-example"
        class=" inline-block align-middle"
        aria-labelledby="hs-navbar-example-collapse"
      >
        <div class="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          <a
            class="font-medium from-thePointRed to-thePointPink to-orange-500 bg-clip-text text-transparent focus:outline-none"
            href="#"
            aria-current="page"
          >
            Home
          </a>
          <a
            class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            href="#"
          >
            About Us
          </a>
          <a
            class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            href="#"
          >
            Contact
          </a>

          <a
            class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            href="#"
          >
            Book
          </a>

          <Link to={"/login"}>
            <button
              type="button"
              class="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 
              shadow-md bg-gradient-to-r from-thePointRed to-thePointPink text-white bg-blue-700 font-medium rounded-full text-sm px-4 py-2 
              text-center me-2"
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

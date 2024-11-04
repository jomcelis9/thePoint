import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function TherapistLayout() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Session", src: "house-solid", onClick: "patients" },
    { title: "View Appointments", src: "appointment", onClick: "view" },
    { title: "Reports and Data", src: "chart-simple-solid-white", onClick: "report" },
    { title: "Client Management", src: "person-solid-white", onClick: "clientManagement" },
    { title: "Settings", src: "gear-solid-white", onClick: "settings" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div
          className={`${open ? "w-60" : "w-24"} flex-shrink-0 duration-300 h-screen bg-gradient-to-r from-thePointRed to-thePointPink relative p-5 pt-7`}
        >
          <svg
            id="foldmenu"
            className={`absolute cursor-pointer ${!open && "rotate-[180deg]"}`}
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 512 512"
            onClick={() => setOpen(!open)} // Toggle open state
          >
            <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L392 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-214.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z" />
          </svg>

          <div className="origin-left">
            <h1 className={`text-2xl mt-5 mx-3 text-white ${!open && "scale-0"}`}>Therapist The Point</h1>
          </div>

          <ul className="pt-6">
            {Menus.map((menu, index) => (
              <li
                key={index}
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 my-10 relative flex-shrink-0 hover:drop-shadow-white ${
                  menu.gap ? "mt-9" : "mt-2"
                } flex-shrink-0`}
              >
                <img className="w-8 h-8 flex-shrink-0" src={`./src/images/admin/${menu.src}.svg`} alt={menu.title} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
                <Link to={`${menu.onClick}`} className="absolute inset-0">
                  <button type="button" className="w-full h-full focus:border"></button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <div className={`ml-0 mr-4 ${open ? "ml-64" : "ml-24"} transition-all duration-300 w-full`}>
        <Outlet context={{ open }} />
      </div>
    </div>
  );
}

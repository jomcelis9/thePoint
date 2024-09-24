import { useState } from "react";
import { Outlet } from "react-router-dom";


export default function AdminLayout(){

const [open,setOpen] = useState(true);

    return(
        <div className="flex">
            <div className={` ${open ? "w-60" : "w-20"}  duration-300 h-screen bg-gradient-to-r from-thePointRed to-thePointPink relative p-5 pt-7`} >
                
            <svg className="absolute cursor-pointer" 
            xmlns="http://www.w3.org/2000/svg" 
            height="20" width="20" 
            viewBox="0 0 512 512"
            onClick={() => setOpen(!open)}
            >
                <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L392 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-214.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z"/>
            
            </svg>

            <div className="origin-left">
                <h1 className= {`text-2xl mt-5 mx-3 text-white ${!open &&"scale-0"}`}>Admin The Point</h1>
            </div>

            </div>

                <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                    <h1>Home Page</h1>

                </div>
            <Outlet />
        </div>
    )
}
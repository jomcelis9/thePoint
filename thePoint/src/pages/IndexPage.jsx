import { Link } from "react-router-dom"
import Header from "../Header.jsx"

export default function IndexPage(){
    return(
        <div className="px-4">Index page here NEW HI JMAR
            <div className="flex justify-center">
            <Link to={'/booking'}>
                <button type="button" className="bg-gradient-to-r from-thePointRed to-thePointPink text-white bg-primary-600 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-3xl text-sm px-5 py-2.5 text-center 
                transform active:scale-x-100 transition-transform transition ease-in delay-100 hover:-translate-y-1 hover:drop-shadow-xl duration-300 "> JOM'S BRANCH </button>
            </Link>
            </div>
            <div>Jap is so gwapo</div>
        </div>
    )
}
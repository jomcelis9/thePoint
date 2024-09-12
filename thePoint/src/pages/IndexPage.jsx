import { Link } from "react-router-dom"
import Header from "../Header.jsx"

export default function IndexPage(){
    return(
        <div className="px-4">Index page here
            <div className="container min-vh-25 d-flex justify-content-center align-items-center ">
            <Link to={'/booking'}>
                <button className="btn btn-outline-primary fs-5"> Book an Appointment</button>
            </Link>
            </div>
        </div>
    )
}
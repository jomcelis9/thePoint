import { Link } from "react-router-dom";

export default function Header(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-2 px-4 fs-5">
        <a class="navbar-brand" href="#">
          <img class="p-2" src="images/THE POINT LOGO.png" alt="" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
            </li>
            <li class="nav-item ms-3">
              <a class="nav-link" href="#">Service</a>
            </li>
            <li class="nav-item ms-3">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item ms-3">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item ms-3">
            <Link to={'/login'}>
                <button class="btn btn-outline-primary fs-5" type="submit">Login</button>
            </Link>   
            </li>
            
            {/* <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li> */}
          </ul>
        </div>
      </nav>
    )
}
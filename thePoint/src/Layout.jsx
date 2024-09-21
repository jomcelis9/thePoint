import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout(){
    return(
        <div className="">
            <header class="sticky top-0 z-50">
                <Header />
            </header>
                <Outlet />
        </div>
    )
}
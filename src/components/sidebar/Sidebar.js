import "./sidebar.css";
import {Link} from "react-router-dom"


export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Temple</span>
                <img src="https://png.pngitem.com/pimgs/s/123-1232711_vijayawada-maa-durga-temple-hd-png-download.png" alt=""/>
                <p>
                On this mountain, goddess Durga had been glowing with the lighting of cores of sun, with golden color.
                </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <Link to="/history">History</Link>
                </li>
                <li className="sidebarListItem">
                <Link to="/trusts">Trusts</Link>
                </li>
                <li className="sidebarListItem">
                <Link to="/gallery">Gallery</Link>
                </li>
                <li className="sidebarListItem">
                <Link to="/calendar">Calendar</Link>
                </li>
                <li className="sidebarListItem">
                <Link to="/festivals">Festivals</Link>
                </li>
                <li className="sidebarListItem">
                <Link to="/events">Events</Link>
                </li>
                <li className="sidebarListItem">
                <Link to="/temples">Adopted-temples</Link>
                </li>
                <li className="sidebarListItem">
                <Link to="/magazines">Magazines</Link>
                </li>
            </ul>       
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>  
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>     
            </div>
            </div>
        </div>
    )
}
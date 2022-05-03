import "./kalyanakatta.css"
import { Link } from "react-router-dom"

export default function Kalyanakatta(){
    return(
        <div className="slot3">
            <img className="slot3Img" src="/images/katta.jpg" alt=""></img>
        <div className="slot3Info">
            <span className="slot3Title">
            <li className="sidebarItem">
                <Link to="/kalyanakatta">Kalyana Katta</Link>
                </li>
            </span>
            <hr/>
        </div>
        <p className="slot3Desc">Opposite Durga Ghat, the Devasthanam maintains Kesakandanasalas.</p>
        </div>
        
    )
}
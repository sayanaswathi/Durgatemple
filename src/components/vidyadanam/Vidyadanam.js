import "./vidyadanam.css"
import { Link } from "react-router-dom"
export default function Vidyadanam(){
    return(
        <div className="slot4">
            <img className="slot4Img" src="/images/vidyadanam.jpg" alt=""></img>
        <div className="slot4Info">
            <span className="slot4Title">
            <li className="sidebarItem">
                <Link to="/vidyadanam">Vidyadanam</Link>
                </li>
            </span>
            <hr/>
        </div>
        <p className="slot4Desc">In 2005 smart pathashala was inaugurated in the premises of Sri Durga Malleswarawara Temple.</p>
        </div>
        
    )
}
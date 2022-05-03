import "./slots.css"
import { Link } from "react-router-dom"
export default function Slots(){
    return(
        <div className="slot">
            <img className="slotImg" src="/images/prasadam.gif" alt=""></img>
        <div className="slotInfo">
            <span className="slotTitle">
            <li className="sidebarItem">
                <Link to="/annaprasadam">AnnaPrasadam</Link>
                </li>
            </span>
            <hr/>
        </div>
        <p className="slotDesc">Food is the basic need of all living beings. Such food is bestowed by goddess Annapurna.</p>
        </div>
        
    )
}
import "./post.css"
import {Link} from "react-router-dom"

export default function Post(){
    return(
        <div className="post">
            <img className="postImg" src="./images/darshanas.jpg" alt=""></img>
        <div className="postInfo">
            <span className="postTitle">
            <li className="sidebarItem">
                <Link to="/darshanas">Darshanas</Link>
                </li>
            </span>
            <hr/>
        </div>
        <p className="postDesc">All devotees can now avail online booking for various darshanams for all temples.</p>
        </div>
        
    )
}
import "./posts.css"
import Post from "../post/Post"
import Slots from "../slots/Slots"
import Vidyadanam from "../vidyadanam/Vidyadanam"
import Kalyanakatta from "../kalyanakatta/Kalyanakatta"

export default function Posts(){
    return(
        <div className="posts">
            <Post/>
            <Vidyadanam/>
            <Slots/>
            <Kalyanakatta/>
            
        </div>
    )
}
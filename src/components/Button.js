import './button.css'
import {Link} from 'react-router-dom'
function Button(){
    return(
        <div>
        <Link to='sign-up'>
            <button className='btn'>Sign Up</button>
        </Link>
        </div>
    )
}
export default Button;
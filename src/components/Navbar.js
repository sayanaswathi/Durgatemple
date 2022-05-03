/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './navbar.css'
import Dropdown from './Dropdown';


function Navbar(){

    const[click,setClick]=useState(false);
    const[dropdown,setDropdown]=useState(false);
    const handleClick = () =>setClick(!click);
    const closeMobileMenu = ()=>setClick(false);
    const onMouseEnter = () =>{
        if(window.innerWidth < 960){
            setDropdown(false)
        }else{
            setDropdown(true);
        }
    }


    const onMouseLeave = () =>{
        if(window.innerWidth < 960){
            setDropdown(false)
        }else{
            setDropdown(false);
        }
    }
    return(
        <>
        <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
         DURGA
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu.active' :'nav-menu'}>
            <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
             Temple
            </Link>  
            </li>
            <li className='nav-item'
            
            onMouseEnter ={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
            <Link to='/piligrimservices' className='nav-links' onClick={closeMobileMenu}>
             Piligrim Services<i className='fas fa-caret-down'></i>
            </Link> 
            {dropdown && <Dropdown/>} 
            </li>

            <li className='nav-item'>
            <Link to='/management' className='nav-links' onClick={closeMobileMenu}>
             Management
            </Link>  
            </li>
            
            <li className='nav-item'>
            <Link to='/alankaras' className='nav-links' onClick={closeMobileMenu}>
             Alankaras
            </Link>  
            </li>
            <li className='nav-item'>
            <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>
             ContactUs
            </Link>  
            </li>
            
        </ul>
        </nav>
        </>
    );
}
export default Navbar;
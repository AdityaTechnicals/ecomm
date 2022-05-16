import React from 'react'
import logo from "../images/logo.png"
import { NavLink } from 'react-router-dom'
// import { useSelector} from 'react-redux'

const Navbar = () => {
  // const custumer=useSelector( state=>state.intialState);
  console.log("reached navbar")
  return (
    <div>
    <div className="container-fluid">
                <header className="navbar">
    <div className="logoimg "> <NavLink to="/">   <a href="/"><img src={logo} alt="logo" height="60" /></a></NavLink>  </div>
        <nav>
         <ul className="navtag">
             <li className="navio"><NavLink to="/"><a  className="nav-links">Home</a></NavLink></li>
             <li className="navio"><NavLink to="/about">   <a  className="nav-links">about</a></NavLink></li>
             <li className="navio"><NavLink to="/contact" ><a  className="nav-links">Contact us</a></NavLink></li>
             <li className="navio"><NavLink to= "/signin" ><a  className="nav-links" id ="signbutton">SignIn</a></NavLink></li>
         </ul>
        </nav>
    </header>
    </div>


        
    </div>
  )
}

export default Navbar;
//HEADER
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
 const [loggingIn, useLoggingIn] = useState('Login');

 return (
  <div className='header'>
   <div className='logo'>
    <img src='https://static.vecteezy.com/system/resources/thumbnails/011/405/724/small/call-food-logo-design-food-delivery-service-logo-concept-free-vector.jpg' alt='logo' />
   </div>

   <div className='nav-links'>
    <ul className='list'>
     <li><Link to={"/"}>Home</Link></li>
     <li><Link to={"/about"}>About us</Link></li>
     <li><Link to={"/contact"}>Contact us</Link></li>
     <li>Cart</li>
     <button className="login" onClick={() => {
      loggingIn === 'Login' ? useLoggingIn('Logout') : useLoggingIn('Login');
     }}>{loggingIn}</button>
    </ul>
   </div>

  </div>
 )
}


export default Header;
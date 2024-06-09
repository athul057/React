//HEADER
import { useState } from "react";
const Header = () => {
 const [loggingIn, useLoggingIn] = useState('Login');

 return (
  <div className='header'>
   <div className='logo'>
    <img src='https://static.vecteezy.com/system/resources/thumbnails/011/405/724/small/call-food-logo-design-food-delivery-service-logo-concept-free-vector.jpg' alt='logo' />
   </div>

   <div className='nav-links'>
    <ul className='list'>
     <li>Home</li>
     <li>About us</li>
     <li>Contact us</li>
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
//HEADER
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";

const Header = () => {
 const [loggingIn, useLoggingIn] = useState('Login');

 const onLine = useOnlineStatus();
 const data = useContext(UserContext);

 //For reading useSelector();

 //Subscribing to the store using a selector.
 const { items } = useSelector((store) => store.cart);
 const temp = useSelector((store) => store.cart);

 const dispatch = useDispatch();
 const handleClear = () => {
  dispatch(clearItem())
 }



 return (
  <div className='flex justify-between items-center bg-pink-300'>
   <div className='w-28 h-28'>
    <img src="https://e7.pngegg.com/pngimages/716/758/png-clipart-graphics-restaurant-logo-restaurant-thumbnail.png" className="text-pink-200" alt="logo" />

   </div>

   <div className="mr-14 ">
    <ul className='flex justify-between items-center text-lg '>
     <li className="px-6 ">
      Online: {
       onLine ? "🟢" : "🔴"
      }
     </li>
     <li className="px-4 font-medium hover:text-pink-900"><Link to={"/"}>Home</Link></li>
     <li className="px-4 font-medium hover:text-pink-900"><Link to={"/about"}>About us</Link></li>
     <li className="px-4 font-medium hover:text-pink-900"><Link to={"/contact"}>Contact us</Link></li>
     <li className="px-4 font-medium hover:text-pink-900"><Link to={"/cart"}>Cart- {items.length}</Link></li>
     <li className="px-4 font-medium hover:text-pink-900">{data.logInUser}</li>
     <li className="px-4 font-medium hover:text-pink-900 cursor-pointer" onClick={handleClear}>Clear</li>




     <button className="px-4 font-medium hover:text-pink-900" onClick={() => {
      loggingIn === 'Login' ? useLoggingIn('Logout') : useLoggingIn('Login');
     }}>{loggingIn}</button>

    </ul>
   </div>

  </div>
 )
}


export default Header;
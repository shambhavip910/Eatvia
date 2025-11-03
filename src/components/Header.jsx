import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  
  const {loggedinUser}=useContext(UserContext) 
// subscribing to our store
const CartItems=useSelector((store)=>store.cart.items)
  console.log(CartItems)                                       
  // console.log(loggedinUser)                                       
  return (
    <div className="flex justify-evenly items-center bg-pink-300 lg:bg-linear-to-r from-red-400 to-orange-400 text-white gap-35 ">

      <div className="logo-container">
        <img className="w-30" src={LOGO_URL} alt="logo" />
      </div>

      <div className="title font-serif font-bold text-4xl text-gray-800 leading-tight ">Taste Without The Wait</div>

      <div className="flex justify-evenly  ">
        <ul className="flex items-center  gap-6 flex-wrap">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Groceries</Link></li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="font-bold">
            <Link to="/cart">Cart({CartItems.length})</Link></li>
          <li className="font-bold">{loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

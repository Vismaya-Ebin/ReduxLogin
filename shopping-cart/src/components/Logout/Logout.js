import React from "react";
import { loginSelector } from "../Redux/userSlice";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/userSlice";
import { useSelector } from "react-redux";
import "./Logout.css";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";

export default function Welcome() {
  console.log('Logout');
  const user = useSelector(loginSelector);
  const dispatch = useDispatch();
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  console.log("USER", user);
  return (
    <>
    <div className="container">
      <div className="logout">
        
           <span className="spanClass"> Welcome {user.username} to Online Shopping</span>
        
        <button className="logoutBtn" onClick={(e) => handleLogOut(e)}>LogOut</button>
        <br />
        <Navbar />
      
      </div>
      <Product/>
    </div>
    </>
  );
}

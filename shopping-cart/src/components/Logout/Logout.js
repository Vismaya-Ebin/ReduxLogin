import React from "react";
import { loginSelector } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { logout } from "./../../components/features/userSlice";
import { useSelector } from "react-redux";
import './Logout.css';

export default function Welcome() {
  const user = useSelector(loginSelector);
  const dispatch = useDispatch()
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  console.log("USER", user);
  return (
    <div className="container">
    <div className="logout">
      <h2>Welcome <span>{user.username}</span></h2>
      <button onClick={(e) => handleLogOut(e)}>LogOut</button>
    </div>
    <div></div>
    </div>
  );
}

import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./../../components/features/userSlice";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [details,setDetails] = useState({username: username, email: email, password: password});
  

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        username: details.username,
        email: details.email,
        password: details.password,
        loggedIn: true,
      })
    );
  };


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log({ name: name, value: value });
    //if we didni added preve State it will nont remember prev state only take currentv state hence ...prev is important
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="login">
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here </h1>
        <input
          type="text"
          placeholder="Name"
          value={details.username}
          id="username"
          name="username"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={details.email}
          id="email"
          name="email"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={details.password}
          id="password"
          name="password"
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

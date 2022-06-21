import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./../../components/features/userSlice";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
  console.log('Login');
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [details,setDetails] = useState({username: "", email: "", password: ""});
  

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
        <TextField
          type="text"
          placeholder="Name"
          value={details.username}
          id="username"
          name="username"
          className="textField"
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          type="email"
          placeholder="Email"
          value={details.email}
          id="email"
          name="email"
          className="textField"
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          type="password"
          placeholder="Password"
          value={details.password}
          id="password"
          name="password"
          className="textField"
          onChange={handleChange}
          required
        />
        <br />
        {/* <button type="submit" className="submitBtn">
          Submit
        </button> */}
        <Button variant="contained" type="submit" className="submitBtn" size="large">Submit</Button>
      </form>
    </div>
  );
}

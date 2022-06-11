import "./App.css";
import Login from "./components/Login/Login";
import { loginSelector } from "./components/features/userSlice";
import { useSelector } from "react-redux";
import Logout from "./components/Logout/Logout";
import {Routes,Route} from 'react-router-dom';

function App() {
  const user = useSelector(loginSelector);
 
  return <div className="App">{user && user.username && user.password && user.email? <Logout /> : <Login />}</div>;
}

export default App;

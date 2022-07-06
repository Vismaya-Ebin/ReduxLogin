import "./App.css";
import Login from "./components/Login/Login";
import { loginSelector } from "./components/Redux/userSlice";
import { useSelector } from "react-redux";
import Logout from "./components/Logout/Logout";
import {Routes,Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Cart from "./components/Cart/cart";
import NotFound from "./components/NotFound/NotFound";


function App() {
  const user = useSelector(loginSelector);
 
  return <div className="App">
  
    <Routes>
    {/* <Route path="/"  exact element={ <Logout />}/> */}
    <Route path="/"  exact element= {user && user.username && user.password && user.email? <Logout /> : <Login />}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/*" element={<NotFound/>}/>
    </Routes>
    </div>;
}

export default App;



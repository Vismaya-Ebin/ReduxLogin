import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "././components/Redux/store";
import {BrowserRouter} from 'react-router-dom';



import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   
    <Provider store={store}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
// https://www.youtube.com/watch?v=0T7P6Mb2XNE&list=PL63c_Ws9ecIRnNHCSqmIzfsMAYZrN71L6&index=8
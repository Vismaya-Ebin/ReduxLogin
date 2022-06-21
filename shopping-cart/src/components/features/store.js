import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/userSlice.js";
import productReducer from "../features/productSlice.js";

export default configureStore({
    //we can combine multiple reducers
    reducer:{
        user:userReducer,
        product:productReducer, 
    }
});
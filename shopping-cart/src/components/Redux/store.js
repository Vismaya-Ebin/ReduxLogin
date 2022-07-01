import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../Redux/userSlice.js";
import productReducer,{productFetch }from "../Redux/productSlice.js";

const store =  configureStore({
    //we can combine multiple reducers
    reducer:{
        user:userReducer,
        product:productReducer, 
    }
});
store.dispatch(productFetch());
export default store;
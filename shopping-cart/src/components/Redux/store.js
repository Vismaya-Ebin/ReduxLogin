import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux/userSlice.js";
import productReducer,{productFetch }from "../Redux/productSlice.js";
import { productApi } from "../Redux/productApi";
const store =  configureStore({
    //we can combine multiple reducers
    reducer:{
        user:userReducer,
        product:productReducer, 
        [productApi.reducerPath]:productApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
      return  getDefaultMiddleware().concat(productApi.middleware)

    }
});
store.dispatch(productFetch());
export default store;
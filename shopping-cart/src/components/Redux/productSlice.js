import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productFetch = createAsyncThunk('product/fetch', 
async({rejectWithValue})=>{
    try{
    const response = await axios.get('http://localhost:5000/products')
    return response?.data;
    }
    catch(error){
         return rejectWithValue("An error occured")
    }
})

//data from responses check uncheck of check boxes get data from payload
export const productSlice = createSlice({
    name: "product",
    initialState: {
        items:[],
        status:null,
        error:null
    },
    reducers:{},
    extraReducers:{
        [productFetch.pending]:(state,action) => {
            console.log("ACTIONS: " + action);
            state.status = "pending"
            state.items = action.payload;
            
        },
        [productFetch.fulfilled]:(state,action) => {
            state.status = "success"
            state.items = action.payload;
        },
        [productFetch.rejected]:(state,action) => {
            state.status = "rejected"
            state.error = action.error
        },
       
    },
});
export const productSelector = (state) =>{ 
    console.log(state);
    return state.product.items;
}

export default productSlice.reducer;
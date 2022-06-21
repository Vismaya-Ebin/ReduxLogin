import { createSlice  } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        items:[],
        status:null,
    },
    reducers:{}
});

export default productSlice.reducer;
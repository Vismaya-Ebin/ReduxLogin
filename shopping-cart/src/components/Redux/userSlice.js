import { createSlice } from "@reduxjs/toolkit";
// A SLICE IS THE COMBINATION OF REDUCERS AND ACTIONS
// A SLICE IS A () WHERE WE CAN PASS ARGUMENTS

export const userSlice = createSlice({
  //name of the store  is user
  name: "store_name",
  initialState: {
    //name of the reducer
    user: null,
  },
  //reducers are used to update redux State
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// we have to export actions like login ,logout,state , reducer etc to get it access in other components

//These are actions
export const { login, logout } = userSlice.actions;

//To export a state of the store we should name it

export const loginSelector = (state) => state.user.user;

export default userSlice.reducer;

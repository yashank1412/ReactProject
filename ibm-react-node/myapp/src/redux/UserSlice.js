import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        userDetails: {},
        loginStatus: false
    },
    reducers: {
        userLogin: (state, action) => {
            console.log(action.payload);
            state.userDetails = action.payload;
            state.loginStatus = true;
        },
        userLogout: (state, action) => {
            console.log(action.payload);
            state.userDetails = '';
            state.loginStatus = false;
        }
    }
});

export default UserSlice.reducer;

export const { userLogin, userLogout } = UserSlice.actions;
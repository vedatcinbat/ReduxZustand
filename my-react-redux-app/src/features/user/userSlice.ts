import { createSlice } from "@reduxjs/toolkit";
import { User, UsersState } from "./userTypes";


const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
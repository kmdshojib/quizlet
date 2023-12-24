import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
    user: {
        fullName: string | null;
        email: string | null;
        role: string | null;
    } | null;
}

const initialState: IUser = {
    user: {
        fullName: null,
        email: null,
        role: null,
    } || null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload.user;
        },
        logoutUser: (state) => {
            state.user = null;
        },
    },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
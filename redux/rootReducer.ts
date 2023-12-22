import { combineReducers } from "@reduxjs/toolkit";
import { apiService } from "./api/api";
import authReducer from "./features/authSlice";


export const rootReducer = combineReducers({
    [apiService.reducerPath]: apiService.reducer,
    auth: authReducer
});
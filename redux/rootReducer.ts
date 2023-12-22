import { combineReducers } from "@reduxjs/toolkit";
import { apiService } from "./api/api";


export const rootReducer = combineReducers({
    [apiService.reducerPath]: apiService.reducer,
});
import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../features/messagebox/messageSlice";

export const Store = configureStore({
    reducer: {
        message: messageReducer
    }
});
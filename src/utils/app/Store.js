import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../features/messagebox/messageSlice";
import notiReducer from "../features/notification/notificationSlice";
import authReducer from "../features/auth/authSlice";

export const Store = configureStore({
    reducer: {
        message: messageReducer,
        noti: notiReducer,
        auth: authReducer
    }
});
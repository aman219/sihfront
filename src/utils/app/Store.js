import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../features/messagebox/messageSlice";
import notiReducer from "../features/notification/notificationSlice";

export const Store = configureStore({
    reducer: {
        message: messageReducer,
        noti: notiReducer
    }
});
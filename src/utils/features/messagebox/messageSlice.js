import { createSlice} from '@reduxjs/toolkit';

const message = {
    display: "display",
    message: ""
}

export const messageSlice = createSlice({
    name: 'message',
    initialState: message,
    reducers: {
        setMessage: (state, action) => {
            state.display = action.payload.display;
            state.message = action.payload.message;
        }
    }
});

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
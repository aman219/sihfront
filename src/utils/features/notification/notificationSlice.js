import { createSlice} from '@reduxjs/toolkit';

const noti = {
    display: "hidden",
}

export const notiSlice = createSlice({
    name: 'noti',
    initialState: noti,
    reducers: {
        setNoti: (state, action) => {
            state.display = action.payload.display;
        }
    }
});

export const { setNoti } = notiSlice.actions;

export default notiSlice.reducer;
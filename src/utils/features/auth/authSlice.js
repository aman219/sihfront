import { createSlice} from '@reduxjs/toolkit';

const auth = {
    user: {},
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: auth,
    reducers: {
        setAuth: (state, action) => {
            state.user = action.payload.user;
        }
    }
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
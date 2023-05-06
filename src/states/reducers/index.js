import { createSlice } from '@reduxjs/toolkit'

export const newuserSlice = createSlice({
    name:'newuser',
    initialState: false,
    reducers: {
        New: (state,action)=>{
            return !(state);
        },
    }
})
export const {New} = newuserSlice.actions;
export default newuserSlice.reducer;
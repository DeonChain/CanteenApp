import { createSlice } from '@reduxjs/toolkit'

export const userDetailsSlice = createSlice({
    name:'userDetails',
    initialState: [],
    reducers: {
        Update: (state,action,payload)=>{
            state.push(action.payload)
        },
    }
})
export const {Update} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
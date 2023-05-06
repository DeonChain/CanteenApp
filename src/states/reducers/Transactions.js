import { createSlice } from '@reduxjs/toolkit'

export const transactionSlice = createSlice({
    name:'transaction',
    initialState: ['Hi I am Manish', 'Welcome to my dapp'],
    reducers: {
        Add: (state,action)=>{
            state.push(action.payload);
            return (state);
        },
    }
})
export const {Add} = transactionSlice.actions;
export default transactionSlice.reducer;
import { configureStore } from '@reduxjs/toolkit'
import newuserReducer from './reducers/index'
import transactionReducer from './reducers/Transactions'
import userDetailsReducer from './reducers/userDetails'


export default configureStore({
    reducer:{
        user: newuserReducer,
        transactions: transactionReducer,
        userDetails: userDetailsReducer,
    }
})


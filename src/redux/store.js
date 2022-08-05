import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './features/userSlice'
export default configureStore({
    reducer:{
        auth:AuthReducer
    }
})
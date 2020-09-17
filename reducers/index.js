// import { combineReducers } from "redux"
import AuthReducer from "./authReducer"
import dataReducer from "./userDataReducer"

// const allReducers = combineReducers({
//     auth : AuthReducer
// })

export default {auth: AuthReducer, data: dataReducer}
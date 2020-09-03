import { combineReducers } from "redux"
import LoginReducer from "./loginCheck"
import studentsDataReducer from "./studentsData"

const allReducers = combineReducers({
    login: LoginReducer,
    setData: studentsDataReducer,
})

export default allReducers
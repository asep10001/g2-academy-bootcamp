// import { combineReducers } from "redux"
import AuthReducer from "./authReducer"
import dataReducer from "./userDataReducer"
import dataAlbumReducer from "./dataAlbumReducer"
import urlCameraReducer from "./cameraData"

// const allReducers = combineReducers({
//     auth : AuthReducer
// })

const allReducers = {auth: AuthReducer, data: dataReducer, dataAlbum: dataAlbumReducer, cameraUrl: urlCameraReducer}

export default allReducers
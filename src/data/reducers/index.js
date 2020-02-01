import { combineReducers } from "redux"
import account from "./accountReducer"
import category from "./categoryReducer"

export default combineReducers({account, category})
import { legacy_createStore } from "redux";
import { reducerBookFunction } from "./reducer";
import { singleReducer } from "./profile/singleReducer";



export const reduxStore=legacy_createStore(singleReducer)


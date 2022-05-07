import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {StoreType} from "./store";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
})

export const store:StoreType = legacy_createStore(reducers)
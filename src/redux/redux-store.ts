import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: usersReducer
})





export type AppStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)


// @ts-ignore
window.store = store
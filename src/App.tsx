import React, {FC} from 'react';
import './App.css';
import {Profile} from "./Components/Pages/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import {Layout} from "./Components/Layout/Layout";
import {Dialogs} from "./Components/Pages/Dialogs/Dialogs";
import {Music} from "./Components/Pages/Music/Music";
import {News} from "./Components/Pages/News/News";
import {Settings} from "./Components/Pages/Settings/Settings";
import {StoreType} from "./redux/state";

export type StatePropsType = {
  store: StoreType
}

export const App: FC<StatePropsType> = props => {
  const {store} = props
  const state = store.getState()

  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="profile" element={<Profile
            message={state.profilePage.newPostText}
            dispatch={store.dispatch.bind(store)}
            profileState={state.profilePage}
          />}/>
          <Route path="dialogs/*" element={<Dialogs
            dialogsState={state.messagesPage}
          />}/>
          <Route path="news" element={<News/>}/>
          <Route path="music" element={<Music/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

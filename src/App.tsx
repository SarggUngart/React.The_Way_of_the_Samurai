import React from 'react';
import './App.css';
import {Profile} from "./Components/Pages/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import {Layout} from "./Components/Layout/Layout";
import {Dialogs} from "./Components/Pages/Dialogs/Dialogs";
import {Music} from "./Components/Pages/Music/Music";
import {News} from "./Components/Pages/News/News";
import {Settings} from "./Components/Pages/Settings/Settings";
import {store} from "./redux/redux-store";


export const App = () => {

  const state = store.getState()

  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="profile" element={<Profile
            profileState={state.profilePage}
            newPost={state.profilePage.newPostText}
            dispatch={store.dispatch}
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

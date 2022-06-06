import React from 'react';
import './App.css';
import {Profile} from "./Components/Pages/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import {Layout} from "./Components/Layout/Layout";
import {Music} from "./Components/Pages/Music/Music";
import {News} from "./Components/Pages/News/News";
import {Settings} from "./Components/Pages/Settings/Settings";
import {DialogsContainer} from "./Components/Pages/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Pages/Users/UsersContainer";



export const App = () => {

  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="profile" element={<Profile/>}/>
          <Route path="dialogs/*" element={<DialogsContainer />}/>
          <Route path="users/" element={<UsersContainer />}/>
          <Route path="news" element={<News/>}/>
          <Route path="music" element={<Music/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

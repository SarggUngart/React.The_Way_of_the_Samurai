import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Layout} from "./Components/Layout/Layout";
import {Music} from "./Components/Pages/Music/Music";
import {News} from "./Components/Pages/News/News";
import {Settings} from "./Components/Pages/Settings/Settings";
import {DialogsContainer} from "./Components/Pages/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Pages/Users/UsersContainer";
import ProfileContainer from "./Components/Pages/Profile/ProfileContainer";



export const App = () => {

  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="profile/*" element={<ProfileContainer/>}/>
          <Route path="profile/:userId" element={<ProfileContainer/>}/>
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

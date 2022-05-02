import React, {FC} from 'react';
import './App.css';
import {Profile} from "./Components/Pages/Profile/Profile";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Layout} from "./Components/Layout/Layout";
import {Dialogs} from "./Components/Pages/Dialogs/Dialogs";
import {Music} from "./Components/Pages/Music/Music";
import {News} from "./Components/Pages/News/News";
import {Settings} from "./Components/Pages/Settings/Settings";
import {RootStateType} from "./redux/state";

export type StatePropsType = {
  state: RootStateType
}

export const App:FC<StatePropsType> = props => {

  const{state} = props

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="profile" element={<Profile
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
    </BrowserRouter>
  );
}

export default App;

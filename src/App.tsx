import React from 'react';
import './App.css';

import {Profile} from "./Components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import {Layout} from "./Components/Layout/Layout";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";


function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/profile' element={<Profile/>}/>
          <Route path="/dialogs" element={<Dialogs/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/settings" element={<Settings/>}/>

        </Route>

      </Routes>
    </div>
  );
}

export default App;

import React, {FC} from 'react';
import './App.css';

import {Profile} from "./Components/Pages/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import {Layout} from "./Components/Layout/Layout";
import {Dialogs} from "./Components/Pages/Dialogs/Dialogs";
import {Music} from "./Components/Pages/Music/Music";
import {News} from "./Components/Pages/News/News";
import {Settings} from "./Components/Pages/Settings/Settings";
import {DialogsDataPropsType, MessagesDataPropsType, PostsDataPropsType} from "./index";


type AllDataPropsType = {
  dialogsData: DialogsDataPropsType[]
  messagesData: MessagesDataPropsType[]
  postsData:PostsDataPropsType[]
}

export const App: FC<AllDataPropsType> = props => {

  const {dialogsData, messagesData, postsData} = props

  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="profile" element={<Profile
            postsData={postsData}
          />}/>
          <Route path="dialogs/*" element={<Dialogs
            dialogsData={dialogsData}
            messagesData={messagesData}

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

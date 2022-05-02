import React from "react"
import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

export type DialogsDataPropsType = {
  id: number
  name: string
}

export type MessagesDataPropsType = {
  id: number
  message: string
}

export type PostsDataPropsType = {
  id:number
  likeCount:number
  postText:string
}

const dialogsData = [
  {id: 1, name: 'Sergei'},
  {id: 2, name: 'Bob'},
  {id: 3, name: 'Andrey'},
  {id: 4, name: 'Igor'},
]

const messagesData = [
  {id: 1, message: 'Hello world'},
  {id: 2, message: 'Dude, where is my car?'},
  {id: 3, message: 'The roof is on fire'},
  {id: 4, message: 'Ready steady go'},
]

const postsData = [
  {id: 1, likeCount: 2, postText: 'Hello world'},
  {id: 2, likeCount: 5, postText: 'Whats up'}
]



root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App dialogsData={dialogsData}
           messagesData={messagesData}
           postsData={postsData}
      />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
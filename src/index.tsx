import React from "react"
import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./App"
import {state, subscribe} from './redux/state'
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

export const reRenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}/>
      </BrowserRouter>
    </React.StrictMode>
  )
}

subscribe(reRenderEntireTree)
reRenderEntireTree()
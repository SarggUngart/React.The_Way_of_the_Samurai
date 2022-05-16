import React from "react"
import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./App"
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {Provider} from "./StoreContext";


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

export const reRenderEntireTree = () => {

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App store={store}/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

store.subscribe(reRenderEntireTree)
reRenderEntireTree()
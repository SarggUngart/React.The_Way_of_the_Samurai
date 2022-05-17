import React from "react"
import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./App"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

// export const reRenderEntireTree = (state: AppStateType) => {

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
// }
//
// store.subscribe(() => {
//   let state = store.getState()
//   reRenderEntireTree(state)
// })
//
// reRenderEntireTree(store.getState())
import React, {FC, ReactNode} from "react";
import {StoreType} from "./redux/store";


export const StoreContext = React.createContext({} as StoreType)

export type ProviderType = {
  store: StoreType
  children: ReactNode
}

export const Provider: FC<ProviderType> = props => {
  const {store, children} = props

  return (

    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>

  )
}




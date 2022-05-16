import React from 'react';
import {addMessageAC, updateMessageAC} from "../../../../../redux/dialogs-reducer";
import {NewMessage} from "./NewMessage";
import {StoreContext} from "../../../../../StoreContext";

export const NewMessageContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState()

          const addMessageCallBack = () => {
            store.dispatch(addMessageAC(state.messagesPage.newMessageText))
          }

          const onChangeMessageCallBack = (newMessage: string) => {
            store.dispatch(updateMessageAC(newMessage))
          }

          return <NewMessage newMessage={state.messagesPage.newMessageText}
                             addMessageCallBack={addMessageCallBack}
                             onChangeMessageCallBack={onChangeMessageCallBack}/>
        }
      }
    </StoreContext.Consumer>


  )
    ;
};


import React,  {FC} from 'react';
import {ActionsTypes,} from "../../../../../redux/store";
import {addMessageAC, updateMessageAC} from "../../../../../redux/dialogs-reducer";
import {NewMessage} from "./NewMessage";

type NewMessagePostContainerType = {
  newMessage: string
  dispatch: (action: ActionsTypes) => void
}

export const NewMessageContainer: FC<NewMessagePostContainerType> = props => {
  const {newMessage, dispatch} = props

  const addMessageCallBack = () => {
    dispatch(addMessageAC(newMessage))
  }

  const onChangeMessageCallBack = (newMessage: string) => {
    dispatch(updateMessageAC(newMessage))
  }

  return <NewMessage newMessage={newMessage}
                     addMessageCallBack={addMessageCallBack}
                     onChangeMessageCallBack={onChangeMessageCallBack}/>
    ;
};


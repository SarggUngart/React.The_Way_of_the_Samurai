import React from 'react';
import {addMessageAC, updateMessageAC} from "../../../../../redux/dialogs-reducer";
import {NewMessage} from "./NewMessage";
import {connect} from "react-redux";
import {AppStateType} from "../../../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
  newMessage: string
}

type DialogsDispatchPropsType = {
  onChangeMessageCallBack: (newMessage: string) => void
  addMessageCallBack: (newMessage: string) => void
}

export type NewMessageType = MapStatePropsType & DialogsDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    newMessage: state.messagesPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DialogsDispatchPropsType => {
  return {
    onChangeMessageCallBack: (newMessage: string) => {
      dispatch(updateMessageAC(newMessage))
    },
    addMessageCallBack: (newMessage: string) => {
      dispatch(addMessageAC(newMessage))
    }
  }
}

export const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)




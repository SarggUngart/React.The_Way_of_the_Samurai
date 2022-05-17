import React from "react";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addMessageAC, DialogsType, MessagesType, updateMessageAC} from "../../../redux/dialogs-reducer";


type MapStatePropsType = {
  messages: MessagesType[],
  dialogs: DialogsType[],
  newMessage:string
}

type MapDispatchPropsType = {
  updateNewMessageText: (newMessageText: string) => void,
  addNewMessage: (newMessage: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType):MapStatePropsType => {
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    newMessage: state.messagesPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
  return {
    updateNewMessageText: (newMessageText: string) => {
      dispatch(updateMessageAC(newMessageText))
    },
    addNewMessage: (newMessage: string) => {
      dispatch(addMessageAC(newMessage))
    }
  }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)













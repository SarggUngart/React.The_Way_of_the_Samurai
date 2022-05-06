import {ActionsTypes, DialogPageType, MessagesType} from "./state";

export const dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {
  switch (action.type) {
    case "ADD-MESSAGE":
      const newMessage: MessagesType = {
        id: new Date().getTime(),
        message: action.messageText
      }
      state.messages.push(newMessage)
      state.newMessageText = ''
      return state
    case "UPDATE-MESSAGE-TEXT":
      state.newMessageText = action.newMessageText
      return state
  }
  return state
}

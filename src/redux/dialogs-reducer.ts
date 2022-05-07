import {ActionsTypes, DialogPageType, MessagesType} from "./store";

const initialState = {
  messages: [
    {id: 1, message: 'Hello world'},
    {id: 2, message: 'Dude, where is my car?'},
    {id: 3, message: 'The roof is on fire'},
    {id: 4, message: 'Ready steady go'},
  ],
  newMessageText: '',
  dialogs: [
    {id: 1, name: 'Sergei'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Igor'},
  ],
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {
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
    default:
      return state
  }
}

export const addMessageAC = (messageText: string) => {
  return {
    type: 'ADD-MESSAGE',
    messageText
  } as const
}

export const updateMessageAC = (newMessageText: string) => {
  return {
    type: 'UPDATE-MESSAGE-TEXT',
    newMessageText
  } as const
}
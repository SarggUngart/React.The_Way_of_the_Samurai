import {ActionsTypes} from "./store";

export type MessagesType = {
  id: number
  message: string
}

export type DialogsType = {
  id: number
  name: string
}

export type InitialStateType = typeof initialState

const initialState = {
  messages: [
    {id: 1, message: 'Hello world'},
    {id: 2, message: 'Dude, where is my car?'},
    {id: 3, message: 'The roof is on fire'},
    {id: 4, message: 'Ready steady go'},
  ] as MessagesType[],
  newMessageText: '',
  dialogs: [
    {id: 1, name: 'Sergei'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Igor'},
  ] as DialogsType[],
}


export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "ADD-MESSAGE":
      const newMessage: MessagesType = {
        id: new Date().getTime(),
        message: action.messageText
      }
      return {...state, newMessageText: '' ,messages: [...state.messages, newMessage]}

    case "UPDATE-MESSAGE-TEXT":
      return {...state, newMessageText: action.newMessageText}

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
const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, postText: 'Hello world', likeCount: 2},
        {id: 2, postText: 'Whats up', likeCount: 5}
      ],
      newPostText: ''
    },
    messagesPage: {
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

    },
    sidebar: {}

  },
  _onChange() {
    console.log('render')
  },

  dispatch(action) {
    switch (action.type) {
      case "ADD-POST":
        const newPost: PostsType = {
          id: new Date().getTime(),
          postText: action.postText,
          likeCount: 0
        }
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this._onChange();
        break
      case "UPDATE-POST-TEXT":
        this._state.profilePage.newPostText = action.newPostText
        this._onChange()
        break
      case "ADD-MESSAGE":
        const newMessage: MessagesType = {
          id: new Date().getTime(),
          message: action.messageText
        }
        this._state.messagesPage.messages.push(newMessage)
        this._state.messagesPage.newMessageText = ''
        this._onChange()
        break
      case "UPDATE-MESSAGE-TEXT":
        this._state.messagesPage.newMessageText = action.newMessageText
        this._onChange()
        break
    }
  },
  subscribe(observer) {
    this._onChange = observer
  },
  getState() {
    return this._state
  }
}

//========= AC ======
export const addPostAC = (postText: string) => {
  return {
    type: 'ADD-POST',
    postText
  } as const
}

export const updatePostAC = (newPostText: string) => {
  return {
    type: 'UPDATE-POST-TEXT',
    newPostText
  } as const
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

//========= AC ======


//========= TYPES ======

export type ActionsTypes =
  ReturnType<typeof addPostAC>
  | ReturnType<typeof updatePostAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof updateMessageAC>

export type StoreType = {
  _state: RootStateType,
  _onChange: () => void,
  subscribe: (observer: () => void) => void,
  getState: () => RootStateType
  dispatch: (action: ActionsTypes) => void
}

export type PostsType = {
  id: number
  postText: string
  likeCount: number
}

export type MessagesType = {
  id: number
  message: string
}

export type DialogsType = {
  id: number
  name: string
}

export type ProfilePageType = {
  posts: PostsType[]
  newPostText: string
}

export type DialogPageType = {
  messages: MessagesType[]
  newMessageText: string
  dialogs: DialogsType[]
}

type SidebarPropsType = {}

export type RootStateType = {
  profilePage: ProfilePageType
  messagesPage: DialogPageType
  sidebar: SidebarPropsType
}

export default store



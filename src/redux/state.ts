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
      dialogs: [
        {id: 1, name: 'Sergei'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Igor'},
      ]
    },
    sidebar: {}

  },
  _onChange() {
    console.log('render')
  },
  addPost() {
    const newPost: PostsType = {
      id: new Date().getTime(),
      postText: this._state.profilePage.newPostText,
      likeCount: 0
    }
    this._state.profilePage.posts.unshift(newPost)
    this._state.profilePage.newPostText = ''
    this._onChange()
  },
  updatePostText(newPostText: string) {
    this._state.profilePage.newPostText = newPostText
    this._onChange()
  },
  subscribe(observer) {
    this._onChange = observer
  },
  getState() {
    return this._state
  }
}

export type StoreType = {
  _state: RootStateType,
  addPost: () => void,
  _onChange: () => void,
  updatePostText: (newPostText: string) => void,
  subscribe: (observer: () => void) => void,
  getState: () => RootStateType
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
  messages: MessagesType[],
  dialogs: DialogsType[]
}

type SidebarPropsType = {}

export type RootStateType = {
  profilePage: ProfilePageType
  messagesPage: DialogPageType
  sidebar: SidebarPropsType

}

export default store



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
    }

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
  _onChange: () => void,
  // addPost: () => void,
  // updatePostText: (newPostText: string) => void,
  subscribe: (observer: () => void) => void,
  getState: () => RootStateType
  dispatch: (action: ActionsTypes) => void
}

type AddPostActionType = {
  type: 'ADD-POST'
  postText: string
}

type UpdatePostActionType = {
  type: 'UPDATE-POST-TEXT'
  newPostText: string
}

export type ActionsTypes = AddPostActionType | UpdatePostActionType

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



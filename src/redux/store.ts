import {addPost, profileReducer, ProfileType, setUserProfile, updatePost} from "./profile-reducer";
import {addMessageAC, dialogsReducer, updateMessageAC} from "./dialogs-reducer";
import {
  follow,
  setCurrentPage,
  toggleIsFetching,
  setTotalUsersCount,
  setUsers,
  unfollow
} from "./users-reducer";

const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, postText: 'Hello world', likeCount: 2},
        {id: 2, postText: 'Whats up', likeCount: 5}
      ],
      newPostText: '',
      profile: null,
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
  subscribe(observer) {
    this._onChange = observer
  },
  getState() {
    return this._state
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
    this._onChange()
  },
}

//========= TYPES ======

export type ActionsTypes =
  ReturnType<typeof addPost>
  | ReturnType<typeof updatePost>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof updateMessageAC>
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>


type StoreType = {
  _state: RootStateType,
  _onChange: () => void,
  subscribe: (observer: () => void) => void,
  getState: () => RootStateType
  dispatch: (action: ActionsTypes) => void
}

type PostsType = {
  id: number
  postText: string
  likeCount: number
}

type MessagesType = {
  id: number
  message: string
}

type DialogsType = {
  id: number
  name: string
}

type ProfilePageType = {
  posts: PostsType[]
  newPostText: string
  profile: null | ProfileType
}

type DialogPageType = {
  messages: MessagesType[]
  newMessageText: string
  dialogs: DialogsType[]
}

type SidebarPropsType = {}

type RootStateType = {
  profilePage: ProfilePageType
  messagesPage: DialogPageType
  sidebar: SidebarPropsType
}

export default store



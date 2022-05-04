let onChange = () => {
  console.log('render')
}

export const subscribe = (observer: () => void) => {
  onChange = observer
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


export const state: RootStateType = {
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

}


export const addPost = () => {
  const newPost: PostsType = {
    id: new Date().getTime(),
    postText: state.profilePage.newPostText,
    likeCount: 0
  }
  state.profilePage.posts.unshift(newPost)
  state.profilePage.newPostText = ''
  onChange()
}

export const updatePostText = (newPostText: string) => {
  state.profilePage.newPostText = newPostText
  onChange()
}

export type PostsType = {
  id: number
  likeCount: number
  postText: string
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


export const state:RootStateType  = {
  profilePage: {
    posts: [
      {id: 1, likeCount: 2, postText: 'Hello world'},
      {id: 2, likeCount: 5, postText: 'Whats up'}
    ],
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


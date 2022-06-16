import {ActionsTypes} from "./store";

export type PostsType = {
  id: number
  postText: string
  likeCount: number
}

export type ProfileType = {
  aboutMe: string
  contacts: ContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: PhotosType
}

type PhotosType = {
  small: string
  large: string
}

type ContactsType = {
  facebook: string
  website: null
  vk: string
  twitter: string
  instagram: string
  youtube: null
  github: string
  mainLink: null
}

export type  ProfilePageType = {
  posts: PostsType[]
  newPostText: string
  profile: ProfileType | null
}

export type InitialStateType = typeof initialState

const initialState = {
  posts: [
    {id: 1, postText: 'Hello world', likeCount: 2},
    {id: 2, postText: 'Whats up', likeCount: 5},
  ] as PostsType[],
  newPostText: '',
  profile: null
} as ProfilePageType

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "ADD-POST":
      const newPost: PostsType = {
        id: new Date().getTime(),
        postText: action.postText,
        likeCount: 0
      }
      return {...state, newPostText: '', posts: [newPost, ...state.posts]}

    case "UPDATE-POST-TEXT":
      return {...state, newPostText: action.newPostText}

    case "SET-USER-PROFILE":
      return {...state, profile: action.profile}
    default:
      return state
  }

}

//========= AC ======
export const addPost = (postText: string) => {
  return {
    type: 'ADD-POST',
    postText
  } as const
}

export const updatePost = (newPostText: string) => {
  return {
    type: 'UPDATE-POST-TEXT',
    newPostText
  } as const
}

export const setUserProfile = (profile: ProfileType) => {
  return {
    type: 'SET-USER-PROFILE',
    profile
  } as const
}





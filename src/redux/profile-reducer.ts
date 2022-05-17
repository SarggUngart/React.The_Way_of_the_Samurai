import {ActionsTypes} from "./store";

export type PostsType = {
  id: number
  postText: string
  likeCount: number
}

export type InitialStateType = typeof initialState


const initialState = {
  posts: [
    {id: 1, postText: 'Hello world', likeCount: 2},
    {id: 2, postText: 'Whats up', likeCount: 5},
  ] as PostsType[],
  newPostText: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "ADD-POST": {

      const newPost: PostsType = {
        id: new Date().getTime(),
        postText: action.postText,
        likeCount: 0
      }
      state.newPostText = ''
      return {...state, posts: [newPost, ...state.posts]}
    }
    case "UPDATE-POST-TEXT": {
      const stateCopy = {...state}
      stateCopy.newPostText = action.newPostText
      return stateCopy
    }
    default:
      return state
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






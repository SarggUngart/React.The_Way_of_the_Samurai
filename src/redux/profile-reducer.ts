import {ActionsTypes, PostsType, ProfilePageType} from "./store";

const initialState = {
  posts: [
    {id: 1, postText: 'Hello world', likeCount: 2},
    {id: 2, postText: 'Whats up', likeCount: 5}
  ],
  newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case "ADD-POST":
      const newPost: PostsType = {
        id: new Date().getTime(),
        postText: action.postText,
        likeCount: 0
      }
      state.posts.unshift(newPost)
      state.newPostText = ''
      return state
    case "UPDATE-POST-TEXT":
      state.newPostText = action.newPostText
      return state
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






import {ActionsTypes, PostsType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
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
  }
  return state
}








import React from 'react';
import {addPost, PostsType, updatePost} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type MapStatePropsType = {
  postsState: PostsType[],
  newPostText: string
}

type MapDispatchPropsType = {
  updateNewPostText: (newPostText: string) => void
  addPost: (postText: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    postsState: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    updateNewPostText: (newPostText: string) => {dispatch(updatePost(newPostText))},
    addPost: (postText: string) => {dispatch(addPost(postText))}
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
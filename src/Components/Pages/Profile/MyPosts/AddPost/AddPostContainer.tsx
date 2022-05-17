import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../../../redux/redux-store";
import {AddPost} from "./AddPost";
import {Dispatch} from "redux";
import {addPostAC, updatePostAC} from "../../../../../redux/profile-reducer";


type MapStatePropsType = {
  newPostText: string
}

type PostsDispatchPropsType = {
  onChangePostTextCallBack: (newPostText: string) => void
  addPostCallBack: (newPost: string) => void
}

export type AddPostsType = MapStatePropsType & PostsDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch: Dispatch): PostsDispatchPropsType => {
  return {
    onChangePostTextCallBack: (newPostText: string) => {
      dispatch(updatePostAC(newPostText))
    },
    addPostCallBack: (newPost: string) => {
      dispatch(addPostAC(newPost))
    }
  }
}


export const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

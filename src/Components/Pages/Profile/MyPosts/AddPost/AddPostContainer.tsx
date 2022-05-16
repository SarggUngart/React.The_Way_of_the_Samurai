import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../../../redux/redux-store";
import {addMessageAC, updateMessageAC} from "../../../../../redux/dialogs-reducer";
import {AddPost} from "./AddPost";
import {Dispatch} from "redux";


type MapStatePropsType = {
  newPostText: string
}

type PostsDispatchPropsType = {
  onChangePostTextCallBack: (newPost: string) => void
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
    onChangePostTextCallBack: (newPost: string) => {
      dispatch(updateMessageAC(newPost))
    },
    addPostCallBack: (newPost: string) => {
      dispatch(addMessageAC(newPost))
    }
  }
}


export const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

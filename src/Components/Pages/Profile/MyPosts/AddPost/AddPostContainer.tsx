import React, {FC} from 'react';
import {ActionsTypes} from "../../../../../redux/store";
import {addPostAC, updatePostAC} from "../../../../../redux/profile-reducer";
import {AddPost} from "./AddPost";

type AddPostPropsContainerType = {
  newPost: string
  dispatch: (action: ActionsTypes) => void
}

export const AddPostContainer: FC<AddPostPropsContainerType> = props => {
  const {newPost, dispatch} = props

  const addPostCallBack = () => {
    dispatch(addPostAC(newPost))
  }

  const onChangePostTextCallBack = (newPost: string) => {
    dispatch(updatePostAC(newPost))
  }

  return <AddPost newPost={newPost}
                  addPostCallBack={addPostCallBack}
                  onChangePostTextCallBack={onChangePostTextCallBack}/>

};


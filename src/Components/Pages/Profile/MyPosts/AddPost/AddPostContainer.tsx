import React from 'react';
import {StoreContext} from "../../../../../StoreContext";
import {addPostAC, updatePostAC} from "../../../../../redux/profile-reducer";
import {AddPost} from "./AddPost";


export const AddPostContainer = () => {


  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState()

          const addPostCallBack = () => {
            store.dispatch(addPostAC(state.profilePage.newPostText))
          }

          const onChangePostTextCallBack = (newPost: string) => {
            store.dispatch(updatePostAC(newPost))
          }

          return <AddPost newPost={state.profilePage.newPostText}
                          addPostCallBack={addPostCallBack}
                          onChangePostTextCallBack={onChangePostTextCallBack}/>
        }}
    </StoreContext.Consumer>
  )


};


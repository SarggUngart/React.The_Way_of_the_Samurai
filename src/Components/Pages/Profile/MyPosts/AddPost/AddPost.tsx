import React, {ChangeEvent, FC} from 'react';
import styles from './AddPost.module.scss'
import {ActionsTypes} from "../../../../../redux/store";
import {addPostAC, updatePostAC} from "../../../../../redux/profile-reducer";

type AddPostPropsType = {
  newPost: string
  dispatch: (action: ActionsTypes) => void
}

export const AddPost: FC<AddPostPropsType> = props => {
  const {newPost, dispatch} = props

  const addPostHandler = () => {
    dispatch(addPostAC(newPost))
  }

  const onChangePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newPostText = e.currentTarget.value
    dispatch(updatePostAC(newPostText))
  }

  return (
    <div className={styles.addPostWrapper}>
      <textarea value={newPost} onChange={onChangePostTextHandler} className={styles.textArea}/>
      <button onClick={addPostHandler} className={styles.btn}>Add post</button>
    </div>
  );
};


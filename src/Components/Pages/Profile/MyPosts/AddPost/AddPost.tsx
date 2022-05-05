import React, {ChangeEvent, FC} from 'react';
import styles from './AddPost.module.scss'
import {ActionsTypes, addPostAC, updatePostAC} from "../../../../../redux/state";

type AddPostPropsType = {
  message: string
  dispatch: (action: ActionsTypes) => void
}

export const AddPost: FC<AddPostPropsType> = props => {
  const {message, dispatch} = props

  const addPostHandler = () => {
    dispatch(addPostAC(message))
  }

  const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newPostText = e.currentTarget.value
    dispatch(updatePostAC(newPostText))
  }

  return (
    <div className={styles.addPostWrapper}>
      <textarea value={message} onChange={onChangeTextHandler} className={styles.textArea}/>
      <button onClick={addPostHandler} className={styles.btn}>Add post</button>
    </div>
  );
};


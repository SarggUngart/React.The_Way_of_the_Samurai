import React, {ChangeEvent, FC} from 'react';
import styles from './AddPost.module.scss'
import {ActionsTypes} from "../../../../../redux/state";

type AddPostPropsType = {
  message: string
  dispatch: (action: ActionsTypes) => void
}


export const AddPost: FC<AddPostPropsType> = props => {
  const { message,dispatch} = props


  const addPostHandler = () => {
    // alert(newPostEl.current && newPostEl.current.value)
    // addPostCallback(message)
    dispatch({type:'ADD-POST', postText:message})
  }

  const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({type:'UPDATE-POST-TEXT', newPostText:e.currentTarget.value})
  }

  return (
    <div className={styles.addPostWrapper}>
      <textarea value={message} onChange={onChangeTextHandler} className={styles.textArea}/>
      <button onClick={addPostHandler} className={styles.btn}>Add post</button>
    </div>
  );
};


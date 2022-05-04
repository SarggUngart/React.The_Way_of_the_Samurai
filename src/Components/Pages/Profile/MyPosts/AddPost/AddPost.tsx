import React, {ChangeEvent, FC} from 'react';
import styles from './AddPost.module.scss'

type AddPostPropsType = {
  addPostCallback: (message: string) => void
  newPostTextCallBack: (newPostText: string) => void
  message: string
}


export const AddPost: FC<AddPostPropsType> = props => {
  const {addPostCallback, newPostTextCallBack, message} = props


  const addPostHandler = () => {
    // alert(newPostEl.current && newPostEl.current.value)
    addPostCallback(message)

  }

  const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    newPostTextCallBack(e.currentTarget.value)
  }

  return (
    <div className={styles.addPostWrapper}>
      <textarea value={message} onChange={onChangeTextHandler} className={styles.textArea}/>
      <button onClick={addPostHandler} className={styles.btn}>Add post</button>
    </div>
  );
};


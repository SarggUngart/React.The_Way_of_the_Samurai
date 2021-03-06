import React, {ChangeEvent, FC} from 'react';
import styles from './AddPost.module.scss'

type AddPostsType = {
  newPostText:string,
  addPostCallBack:(newPost:string)=>void
  onChangePostTextCallBack:(newPostText:string)=>void
}


export const AddPost: FC<AddPostsType> = props => {
  const {newPostText, addPostCallBack, onChangePostTextCallBack} = props

  const addPostHandler = () => {
    addPostCallBack(newPostText)
  }

  const onChangePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newPostText = e.currentTarget.value
    onChangePostTextCallBack(newPostText)
  }

  return (
    <div className={styles.addPostWrapper}>
      <textarea value={newPostText} onChange={onChangePostTextHandler} className={styles.textArea}/>
      <button onClick={addPostHandler} className={styles.btn}>Add post</button>
    </div>
  );
};


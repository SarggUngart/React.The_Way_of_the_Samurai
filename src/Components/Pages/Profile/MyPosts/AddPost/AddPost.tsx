import React, {ChangeEvent, FC} from 'react';
import styles from './AddPost.module.scss'


type AddPostPropsType = {
  newPost: string
  addPostCallBack:(newPost: string)=>void
  onChangePostTextCallBack:(newPost: string)=>void
}

export const AddPost: FC<AddPostPropsType> = props => {
  const {newPost, addPostCallBack, onChangePostTextCallBack} = props

  const addPostHandler = () => {
    addPostCallBack(newPost)
  }

  const onChangePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newPostText = e.currentTarget.value
    onChangePostTextCallBack(newPostText)
  }

  return (
    <div className={styles.addPostWrapper}>
      <textarea value={newPost} onChange={onChangePostTextHandler} className={styles.textArea}/>
      <button onClick={addPostHandler} className={styles.btn}>Add post</button>
    </div>
  );
};


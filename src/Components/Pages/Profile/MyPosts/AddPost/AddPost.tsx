import React, {createRef} from 'react';
import styles from './AddPost.module.scss'

export const AddPost = () => {
  
  const newPostEl:any = createRef()
  
  const addPostHandler = () => {
      const text = newPostEl.current.value

  }
  
  
  return (
    <div className={styles.addPostWrapper}>
      <textarea className={styles.textArea} ref={newPostEl}/>
      <button onClick={addPostHandler} className={styles.btn}>Add post</button>
    </div>
  );
};


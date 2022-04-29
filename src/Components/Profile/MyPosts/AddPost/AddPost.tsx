import React from 'react';
import styles from './AddPost.module.scss'

export const AddPost = () => {
  return (
    <div className={styles.addPostWrapper}>
      <textarea className={styles.textArea}/>
      <button className={styles.btn}>Add post</button>
    </div>
  );
};


import React from 'react';
import {Post} from "./Post/Post";
import {AddPost} from "./AddPost/AddPost";
import styles from './Myposts.module.scss'

export const MyPosts = () => {
  return (
    <div className={styles.postsWrapper}>

        <AddPost/>


        <Post message={'hello'} likeCount={2}/>
        <Post message={'Whats up'}likeCount={5}/>

    </div>
  );
};


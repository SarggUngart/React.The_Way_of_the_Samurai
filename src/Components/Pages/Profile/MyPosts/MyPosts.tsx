import React, {FC} from 'react';
import {Post} from "./Post/Post";
import styles from './Myposts.module.scss'
import {AddPost} from "./AddPost/AddPost";
import {MyPostsPropsType} from "./MyPostsContainer";


export const MyPosts: FC<MyPostsPropsType> = props => {
  const {postsState, newPostText, addPost, updateNewPostText}: MyPostsPropsType = props

  const postEl = postsState.map(p => <div key={p.id}><Post message={p.postText} likeCount={p.likeCount}/>
  </div>)

  return (

    <div className={styles.postsWrapper}>

      <AddPost newPostText={newPostText} addPostCallBack={addPost} onChangePostTextCallBack={updateNewPostText}/>

      {postEl}

    </div>
  );
};


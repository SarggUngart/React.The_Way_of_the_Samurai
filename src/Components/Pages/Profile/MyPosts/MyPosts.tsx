import React, {FC} from 'react';
import {Post} from "./Post/Post";
import {AddPost} from "./AddPost/AddPost";
import styles from './Myposts.module.scss'
import {PostsType} from "../../../../redux/state";

type MyPostsPropsType = {
  postsState: PostsType[]
}

export const MyPosts: FC<MyPostsPropsType> = props => {
  const {postsState}: MyPostsPropsType = props

  const postEl = postsState.map(p => <div key={p.id}><Post message={p.postText} likeCount={p.likeCount}/>
  </div>)

  return (
    <div className={styles.postsWrapper}>

      <AddPost/>

      {postEl}

    </div>
  );
};


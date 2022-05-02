import React, {FC} from 'react';
import {Post} from "./Post/Post";
import {AddPost} from "./AddPost/AddPost";
import styles from './Myposts.module.scss'
import {PostsDataPropsType} from "../../../../index";


type MyPostsPropsType = {
  postsData: PostsDataPropsType[]
}

export const MyPosts: FC<MyPostsPropsType> = props => {
  const {postsData} = props

  const postEl = postsData.map(p => <div key={p.id}><Post message={p.postText} likeCount={p.likeCount}/>
  </div>)

  return (
    <div className={styles.postsWrapper}>

      <AddPost/>

      {postEl}

    </div>
  );
};


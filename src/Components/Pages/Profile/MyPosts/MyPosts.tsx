import React, {FC} from 'react';
import {Post} from "./Post/Post";
import styles from './Myposts.module.scss'
import {ActionsTypes} from "../../../../redux/store";
import {AddPostContainer} from "./AddPost/AddPostContainer";
import {PostsType} from "../../../../redux/profile-reducer";

type MyPostsPropsType = {
  postsState: PostsType[]
  newPost: string
  dispatch: (action: ActionsTypes) => void
}

export const MyPosts: FC<MyPostsPropsType> = props => {
  const {postsState}: MyPostsPropsType = props
  console.log(postsState)
  const postEl = postsState.map(p => <div key={p.id}><Post message={p.postText} likeCount={p.likeCount}/>
  </div>)

  return (

    <div className={styles.postsWrapper}>

      <AddPostContainer/>

      {postEl}

    </div>
  );
};


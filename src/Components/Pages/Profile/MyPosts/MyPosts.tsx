import React, {FC} from 'react';
import {Post} from "./Post/Post";
import {AddPost} from "./AddPost/AddPost";
import styles from './Myposts.module.scss'
import {ActionsTypes, PostsType} from "../../../../redux/store";

type MyPostsPropsType = {
  postsState: PostsType[]
  newPost:string
  dispatch: (action: ActionsTypes) => void
}

export const MyPosts: FC<MyPostsPropsType> = props => {
  const {newPost, postsState, dispatch}: MyPostsPropsType = props

  const postEl = postsState.map(p => <div key={p.id}><Post message={p.postText} likeCount={p.likeCount}/>
  </div>)

  return (
    <div className={styles.postsWrapper}>

      <AddPost newPost={newPost} dispatch={dispatch}/>

      {postEl}

    </div>
  );
};


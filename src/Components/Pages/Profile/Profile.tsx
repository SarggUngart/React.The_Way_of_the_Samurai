import React, {FC} from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../redux/state";

type ProfileStateType = {
  profileState: ProfilePageType
  addPostCallback:()=>void
  newPostTextCallBack:(newPostText: string)=>void
  message:string
}

export const Profile: FC<ProfileStateType> = props => {
  const {message, profileState, addPostCallback, newPostTextCallBack} = props

  return (
    <main className={'profile'}>
      <ProfileInfo/>
      <MyPosts message={message} postsState={profileState.posts} addPostCallback={addPostCallback} newPostTextCallBack={newPostTextCallBack} />
    </main>
  );
};


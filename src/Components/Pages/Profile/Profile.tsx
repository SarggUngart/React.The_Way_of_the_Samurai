import React, {FC} from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../../redux/store";

type ProfileStateType = {
  profileState: ProfilePageType
  newPost:string
  dispatch: (action: ActionsTypes) => void
}

export const Profile: FC<ProfileStateType> = props => {
  const {newPost, profileState,  dispatch} = props

  return (
    <main className={'profile'}>
      <ProfileInfo/>
      <MyPosts newPost={newPost} postsState={profileState.posts} dispatch={dispatch} />
    </main>
  );
};


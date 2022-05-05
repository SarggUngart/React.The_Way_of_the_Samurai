import React, {FC} from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../../redux/state";

type ProfileStateType = {
  profileState: ProfilePageType
  message:string
  dispatch: (action: ActionsTypes) => void
}

export const Profile: FC<ProfileStateType> = props => {
  const {message, profileState,  dispatch} = props

  return (
    <main className={'profile'}>
      <ProfileInfo/>
      <MyPosts message={message} postsState={profileState.posts} dispatch={dispatch} />
    </main>
  );
};


import React, {FC} from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../redux/state";

type ProfileStateType = {
  profileState: ProfilePageType
}

export const Profile: FC<ProfileStateType> = props => {
  const {profileState} = props

  return (
    <main className={'profile'}>
      <ProfileInfo/>
      <MyPosts postsState={profileState.posts}/>
    </main>
  );
};


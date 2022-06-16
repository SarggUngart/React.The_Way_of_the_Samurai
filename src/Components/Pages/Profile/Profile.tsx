import React, {FC} from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import styles from "./Profile.module.scss";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfilePropsType = {
  profile: ProfileType | null
}

export const Profile:FC <ProfilePropsType> = props => {
  const {profile} = props

  return (
    <main className={styles.profile}>
      <ProfileInfo profile={profile}/>
      <MyPostsContainer/>
    </main>
  );

};


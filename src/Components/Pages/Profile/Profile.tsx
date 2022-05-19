import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import styles from "./Profile.module.scss";


export const Profile = () => {
  return (
    <main className={styles.profile}>
      <ProfileInfo/>
      <MyPostsContainer/>
    </main>
  );

};


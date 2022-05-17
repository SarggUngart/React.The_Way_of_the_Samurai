import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile = () => {
  return (
    <main className={'profile'}>
      <ProfileInfo/>
      <MyPostsContainer/>
    </main>
  );

};


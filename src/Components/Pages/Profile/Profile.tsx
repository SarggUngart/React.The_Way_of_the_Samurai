import React, {FC} from 'react';

import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDataPropsType} from "../../../index";

type ProfilePropsType = {
  postsData:PostsDataPropsType[]
  }



export const Profile:FC<ProfilePropsType> = props => {
const {postsData} = props

  return (
    <main className={'profile'}>
      <ProfileInfo/>
      <MyPosts  postsData={postsData}/>
    </main>
  );
};


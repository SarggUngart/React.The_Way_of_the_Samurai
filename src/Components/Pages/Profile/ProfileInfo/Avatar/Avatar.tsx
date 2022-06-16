import React, {FC} from 'react';
import styles from "../../ProfileInfo/Avatar/Avatar.module.scss";
import {ProfileType} from "../../../../../redux/profile-reducer";
import {Preloader} from "../../../../../common/preloader/Preloader";

type ProfileAvatarPropsType = {
  profile: ProfileType | null
}


export const Avatar: FC<ProfileAvatarPropsType> = props => {
  const {profile} = props

  if (!profile) {
    return <Preloader/>
  }

  return (
    <img className={styles.avatar}
         src={profile.photos.large}
         alt="avatar"/>
  );
};

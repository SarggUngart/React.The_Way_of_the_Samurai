import React, {FC} from 'react';
import styles from "../../ProfileInfo/Avatar/Avatar.module.scss";
import {ProfileType} from "../../../../../redux/profile-reducer";
import {Preloader} from "../../../../../common/preloader/Preloader";
import userPhoto from "../../../../../assets/images/default_user_img.png"


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
         src={profile.photos.large || userPhoto}
         alt="avatar"/>
  );
};

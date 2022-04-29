import React, {FC} from 'react';
import styles from './Post.module.scss'

type PostPropsType = {
  message: string
  likeCount: number
}

export const Post: FC<PostPropsType> = props => {

  const {
    message,
    likeCount
  } = props

  return (
    <div className={styles.postWrapper}>
      <img className={styles.avatar}
           src="https://main-cdn.sbermegamarket.ru/hlr-system/449/328/079/813/202/6/600004299610b0.jpeg"
           alt="avatar_post"/>

      <div className={styles.PostContent}>
        <div>{message}</div>
        <div className={styles.likeWrapper}>
          <img className={styles.like}
               src="https://s.clipartkey.com/mpngs/s/236-2366795_buy-instagram-likes-hearts-instagram-live-png.png"
               alt="like"/>
          <span className={styles.likeCount}>{likeCount}</span></div>
      </div>

    </div>
  );
};

import React, {FC} from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.scss'
import axios from "axios";
import userPhoto from '../../../assets/images/default_user_img.png'

const Users_FC: FC<UsersPropsType> = props => {
    const {users, follow, unfollow, setUsers} = props

    if (users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          setUsers(response.data.items)
        })
    }

    const onClickFollowHandler = (id: number) => {
      follow(id)
    }
    const onClickUnfollowHandler = (id: number) => {
      unfollow(id)
    }

    return (
      <div className={styles.wrapper}>
        {users.map(u =>
          <div className={styles.users} key={u.id}>
            <div className={styles.avatarWrapper}><img src={u.photos.small || userPhoto} className={styles.avatar}
                                                       alt="user_photo"/>
            </div>
            <div className={styles.infoWrapper}>
              <div className={styles.userName}>{u.name}</div>
              <div className={styles.location}>
                <span>{'u.location.country'} </span>
                <span>{'u.location.city'}</span>
              </div>
              <div className={styles.status}>{u.status}</div>
              <div>{u.followed
                ? <button className={styles.btn} onClick={() => onClickFollowHandler(u.id)}>Follow</button>
                : <button className={styles.btn} onClick={() => onClickUnfollowHandler(u.id)}>Unfollow</button>
              }
              </div>
            </div>
          </div>)}
      </div>
    );
  }
;


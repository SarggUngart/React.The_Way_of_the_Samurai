import React, {FC} from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.scss'


export const Users: FC<UsersPropsType> = props => {
  const {users, follow, unfollow, setUsers} = props

  if (users.length === 0) {
    setUsers([{
      id: 1,
      photoURL: 'https://avatars.mds.yandex.net/i?id=298eccd59e7843f24abb612f007a1114-5232807-images-thumbs&n=13&exp=1',
      followed: true,
      fullName: 'Dmitry',
      status: 'Where am I?',
      location: {city: 'Minsk', country: 'Belarus'}
    },
      {
        id: 2,
        photoURL: 'https://avatars.mds.yandex.net/i?id=298eccd59e7843f24abb612f007a1114-5232807-images-thumbs&n=13&exp=1',
        followed: true,
        fullName: 'Sergei',
        status: 'yo?',
        location: {city: 'Berlin', country: 'Germany'}
      },
      {
        id: 3,
        photoURL: 'https://avatars.mds.yandex.net/i?id=298eccd59e7843f24abb612f007a1114-5232807-images-thumbs&n=13&exp=1',
        followed: false,
        fullName: 'Maria',
        status: 'bla-bla',
        location: {city: 'Moscow', country: 'Russia'}
      },
      {
        id: 4,
        photoURL: 'https://avatars.mds.yandex.net/i?id=298eccd59e7843f24abb612f007a1114-5232807-images-thumbs&n=13&exp=1',
        followed: false,
        fullName: 'Dylan',
        status: 'Looking for a job',
        location: {city: 'NY', country: 'USA'}
      }])
  }

  const onClickFollowHandler = (id: number) => {
    follow(id)
  }
  const onClickUnfollowHandler = (id: number) => {
    unfollow(id)
  }

  return (
    <div className={styles.wrapper}>

      {users.map(u => <div key={u.id}>

        <div><img src={u.photoURL} className={styles.avatar} alt="user_photo"/></div>
        <div>{u.fullName}</div>
        <div>{u.status}</div>
        <div>{u.followed
          ? <button onClick={() => onClickFollowHandler(u.id)}>Follow</button>
          : <button onClick={() => onClickUnfollowHandler(u.id)}>Unfollow</button>
        }
        </div>


        <div>{u.location.country}</div>
        <div>{u.location.city}</div>

      </div>)}

    </div>
  );
};


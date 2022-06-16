import React, {FC} from 'react';
import styles from "./Users.module.scss";
import userPhoto from "../../../assets/images/default_user_img.png";
import {UserType} from "../../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
  users: UserType[],
  onClickFollowHandler: (id: number) => void
  onClickUnfollowHandler: (id: number) => void
  selectPageHandler: (pageNumber: number) => void
  currentPage: number
  pageSize: number
  totalUsersCount: null | number
  preloader: boolean
}

const Users: FC<UsersPropsType> = props => {
  const {
    onClickFollowHandler, onClickUnfollowHandler, selectPageHandler, users,
    currentPage, pageSize, totalUsersCount, preloader
  } = props

  let PagesCount
  if (typeof totalUsersCount === "number") {
    PagesCount = Math.ceil(totalUsersCount / pageSize)
  }

  const pages = []
  if (PagesCount) {
    for (let i = 1; i < PagesCount; i++) {
      pages.push(i)
    }
  }

  const curP = currentPage;
  const curPF = ((curP - 5) < 0) ? 0 : curP - 5;
  const curPL = curP + 4;
  const slicedPages = pages.slice(curPF, curPL);

  return (
    <>
      <div className={preloader ? styles.wrapperNone : styles.wrapperFlex}>
        <div className={styles.pagesWrapper}>
          {slicedPages.map((p,index) => {
            return (
              <span key={index} className={`${styles.pages} ${curP === p ? styles.selectedPage : ''}`}
                    onClick={() => selectPageHandler(p)}>{p}</span>
            )
          })}
        </div>
        {users.map(u =>
          <div className={styles.users} key={u.id}>
            <div className={styles.avatarWrapper}>
              <NavLink to={'./../profile/' + u.id}>
                <img src={u.photos.small || userPhoto} className={styles.avatar}
                     alt='user_photo'/>
              </NavLink>

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
    </>
  );
};

export default Users;
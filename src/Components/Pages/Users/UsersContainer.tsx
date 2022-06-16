import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleIsFetching,
  unfollow,
  UserType
} from "../../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../../../common/preloader/Preloader";


type MapStatePropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: null | number
  currentPage: number
  isFetching: boolean
}

type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//   return {
//     follow: (userId: number) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId: number) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users: UserType[]) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (currentPage: number) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalCount: number) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching: boolean) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }

class UsersContainer extends React.Component<UsersPropsType> {

  componentDidMount(): void {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onClickFollowHandler = (id: number) => {
    this.props.follow(id)
  }

  onClickUnfollowHandler = (id: number) => {
    this.props.unfollow(id)
  }

  selectPageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.toggleIsFetching(false)
      })
  }

  render() {
    return <>
      {
        this.props.isFetching
          ? <Preloader/>
          : null
      }
      <Users onClickFollowHandler={this.onClickFollowHandler} onClickUnfollowHandler={this.onClickUnfollowHandler}
             selectPageHandler={this.selectPageHandler} currentPage={this.props.currentPage}
             pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount}
             users={this.props.users}
             preloader={this.props.isFetching}
      />
    </>

  }
}

export default connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
})(UsersContainer)
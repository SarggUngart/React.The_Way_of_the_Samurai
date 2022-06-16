import {ActionsTypes} from "./store";

export type UserType = {
  name: string
  id: number
  photos: {
    small: null
    large: null
  }
  status: string
  followed: boolean
  location: {
    city: string
    country: string
  }
}

type InitialStateType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: null | number
  currentPage: number
  isFetching: boolean
}

const initialState: InitialStateType = {
  users: [] as UserType[],
  pageSize: 10,
  totalUsersCount: null,
  currentPage: 1,
  isFetching: true
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "FOLLOW": {
      return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
    }
    case "UNFOLLOW": {
      return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
    }
    case "SET_USERS" : {
      return {...state, users: [...action.users]}
    }
    case "SET_CURRENT_PAGE": {
      return {...state, currentPage: action.currentPage}
    }
    case "SET_TOTAL_USER_COUNT": {
      return {...state, totalUsersCount: action.totalCount}
    }
    case "TOGGLE_IS_FETCHING": {
      return {...state, isFetching: action.isFetching}
    }
    default:
      return state
  }

}

//========= AC ======

export const follow = (userId: number) => {
  return {
    type: 'FOLLOW',
    userId
  } as const
}

export const unfollow = (userId: number) => {
  return {
    type: 'UNFOLLOW',
    userId
  } as const
}

export const setUsers = (users: UserType[]) => {
  return {
    type: 'SET_USERS',
    users
  } as const
}

export const setCurrentPage = (currentPage: number) => {
  return {
    type: 'SET_CURRENT_PAGE',
    currentPage
  } as const
}

export const setTotalUsersCount = (totalCount: number) => {
  return {
    type: 'SET_TOTAL_USER_COUNT',
    totalCount
  } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: 'TOGGLE_IS_FETCHING',
    isFetching
  } as const
}
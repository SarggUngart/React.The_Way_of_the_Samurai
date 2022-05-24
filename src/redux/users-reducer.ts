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
}

const initialState: InitialStateType = {
  users: [] as UserType[]
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
    default:
      return state
  }

}

//========= AC ======

export const followAC = (userId: number) => {
  return {
    type: 'FOLLOW',
    userId
  } as const
}


export const unfollowAC = (userId: number) => {
  return {
    type: 'UNFOLLOW',
    userId
  } as const
}

export const setUsersAC = (users: UserType[]) => {
  return {
    type: 'SET_USERS',
    users
  } as const
}
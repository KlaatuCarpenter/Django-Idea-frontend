import React, { createContext, ReactNode, useReducer } from "react"
import { RouteComponentProps } from "@reach/router"
import { reducer } from "./reducer"
import { IAction } from "./actions"

interface IUserProvider extends RouteComponentProps {
  children?: ReactNode
}

export interface IUser {
  pk?: number
  email?: string
  first_name?: string
  last_name?: string
}

export interface IState {
  isAuthenticated?: boolean
  user?: IUser | null
  errMessage?: string
  detail?: string
}

const storedUser = localStorage.getItem("currentUser")
const currentUser = typeof(storedUser) === "string" ? JSON.parse(JSON.stringify(storedUser)) : null
const isCurrentUserAuthenticated = currentUser ? true : false

const initialState = {
  isAuthenticated: isCurrentUserAuthenticated,
  user: currentUser,
}

export const UserContext = createContext<{
  state: IState
  dispatch: React.Dispatch<IAction>
}>({ state: initialState, dispatch: () => null })

export const UserProvider = (props: IUserProvider) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  )
}

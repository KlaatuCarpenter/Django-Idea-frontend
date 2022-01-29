import { Action, IAction } from "./actions"
import { IState } from "./UserContext"

export const reducer = (state: IState, action: IAction) => {
  const { payload } = action
  switch (action.type) {
    case Action.AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      }
    case Action.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      }
    case Action.REGISTRATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      }
    case Action.USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload?.user,
      }
    case Action.AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      }
    case Action.USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      }
    case Action.LOGIN_FAIL:
    case Action.REGISTRATION_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        errMessage: payload?.errMessage
      }
    case Action.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }
    case Action.PASSWORD_RESET_SUCCESS:
    case Action.PASSWORD_RESET_FAIL:
    case Action.PASSWORD_RESET_CONFIRM_SUCCESS:
    case Action.PASSWORD_RESET_CONFIRM_FAIL:
    case Action.ACTIVATION_SUCCESS:
    case Action.ACTIVATION_FAIL:
      return {
        ...state,
        detail: payload?.detail,
        errMessage: payload?.errMessage,
      }
    default:
      return state
  }
}

import { Action, IAction } from "../context/actions"

export async function logout(dispatch: React.Dispatch<IAction>) {
  localStorage.removeItem("currentUser")
  dispatch({ type: Action.LOGOUT })
}

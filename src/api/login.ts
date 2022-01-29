import { Action, IAction } from "../context/actions"

export const login = async (
  dispatch: React.Dispatch<IAction>,
  email: string,
  password: string
) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/dj-rest-auth/login/`,
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      }
    )

    const json = await response.json()

    if (response.ok) {
      dispatch({ type: Action.LOGIN_SUCCESS })
      dispatch({
        type: Action.USER_LOADED_SUCCESS,
        payload: { user: json.user },
      })
      localStorage.setItem("currentUser", json.user)
    } else {
      const errMessage = json.non_field_errors ? json.non_field_errors[0] : "Sorry, an error occured. Try again later."

      dispatch({
        type: Action.LOGIN_FAIL,
        payload: { errMessage },
      })
    }
  } catch (err) {
    console.error(err)
  }
}

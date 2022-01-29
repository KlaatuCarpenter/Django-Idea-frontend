import { Action, IAction } from "../context/actions"

export const passwordReset = async (
  dispatch: React.Dispatch<IAction>,
  email: string,
) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/dj-rest-auth/password/reset/`,
      {
        method: "POST",
        body: JSON.stringify({ email}),
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      }
    )

    const json = await response.json()

    if (response.ok) {
      dispatch({ type: Action.PASSWORD_RESET_SUCCESS })
    } else {
      const errMessage = json.non_field_errors ? json.non_field_errors[0] : "Sorry, an error occured. Try again later."

      dispatch({
        type: Action.PASSWORD_RESET_FAIL,
        payload: { errMessage },
      })
    }
  } catch (err) {
    console.error(err)
  }
}

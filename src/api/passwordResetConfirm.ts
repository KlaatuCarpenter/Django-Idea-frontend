import { Action, IAction } from "../context/actions"

export const passwordResetConfirm = async (
  dispatch: React.Dispatch<IAction>,
  new_password1: string,
  new_password2: string,
  uid?: string,
  token?: string
) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/dj-rest-auth/password/reset/confirm/`,
      {
        method: "POST",
        body: JSON.stringify({ uid, token, new_password1, new_password2 }),
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      }
    )

    const json = await response.json()

    if (response.ok) {
      const detail = json.detail
        ? json.detail
        : "Details not known."
      dispatch({
        type: Action.PASSWORD_RESET_CONFIRM_SUCCESS,
        payload: { detail },
      })
    } else {
      const errMessage = json.non_field_errors
        ? json.non_field_errors[0]
        : "Sorry, an error occured. Try again later."

      dispatch({
        type: Action.PASSWORD_RESET_CONFIRM_FAIL,
        payload: { errMessage },
      })
    }
  } catch (err) {
    console.error(err)
  }
}

import { Action, IAction } from "../context/actions"

export const verifyEmail = async (
  dispatch: React.Dispatch<IAction>,
  key?: string
) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/dj-rest-auth/registration/verify-email/`,
      {
        method: "POST",
        body: JSON.stringify({ key }),
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
        : undefined
      dispatch({
        type: Action.ACTIVATION_SUCCESS,
        payload: { detail },
      })
    } else {
      const errMessage = json.non_field_errors
        ? json.non_field_errors[0]
        : "Sorry, an error occured. Try again later."

      dispatch({
        type: Action.ACTIVATION_FAIL,
        payload: { errMessage },
      })
    }
  } catch (err) {
    console.error(err)
  }
}

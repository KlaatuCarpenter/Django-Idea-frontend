import { Action, IAction } from "../context/actions"

export const register = async (
  dispatch: React.Dispatch<IAction>,
  first_name: string,
  last_name: string,
  email: string,
  password1: string,
  password2: string
) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/dj-rest-auth/registration/`,
      {
        method: "POST",
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password1,
          password2,
        }),
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      }
    )

    const json = await response.json()
    console.log(response)
    console.log(json)

    if (response.ok) {
      dispatch({ type: Action.REGISTRATION_SUCCESS })
    } else {
      let errMessage = "Sorry, an error occured."
      if (json.non_field_errors) {
        errMessage = json.non_field_errors[0]
      } else if (json.password) {
        errMessage = "Password: " + json.password[0]
      } else if (json.email) {
        errMessage = "Email: " + json.email[0]
      }

      dispatch({
        type: Action.REGISTRATION_FAIL,
        payload: { errMessage },
      })
    }
  } catch (err) {
    console.error(err)
  }
}

import { ChangeEvent, useState } from "react"

export interface IAuthFormError {
  email?: string | null
  password?: string | null
  password1?: string | null
  password2?: string | null
  first_name?: string | null
  last_name?: string | null
}

export const useAuthFormValidation = (
  initialFormData: any,
  apiFunction: Function
) => {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({} as IAuthFormError)

  const validate = (fieldValues = formData) => {
    let temp = { ...errors }

    let required = "This field is required"

    /// This assumes that every field is required
    for (const property in fieldValues) {
      if (property in fieldValues) {
        temp[property as keyof IAuthFormError] = fieldValues[property]
          ? null
          : required
        if (fieldValues.email)
          temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
            ? null
            : "Email is not valid."
      }
    }

    if (("password1" && "password2") in fieldValues) {
      temp.password2 =
        fieldValues.password1 === fieldValues.password2
          ? null
          : "Passwords do not match."
    }

    setErrors({
      ...temp,
    })
  }

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value,
    })

  // const onBlur = (
  //   event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   validate({ [event.currentTarget.name]: event.currentTarget.value })
  // }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    validate()
    const isValid = Object.values(errors).every((x) => x === null)
    if (isValid) {
      await apiFunction()
    }
  }

  return {
    formData,
    errors,
    onChange,
    handleSubmit,
    // onBlur,
  }
}

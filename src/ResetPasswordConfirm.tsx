import { RouteComponentProps } from "@reach/router"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"
import { passwordResetConfirm } from "./api/passwordResetConfirm"
import { useAuthFormValidation } from "./hooks/useAuthFormValidation"
import { IAuthFormError } from "./hooks/useAuthFormValidation"

import Copyright from "./modules/components/Copyright"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Alert from "@mui/material/Alert"

const inputFields = [
  {
    name: "password1",
    label: "New password",
    type: "password",
    id: "password1",
    autoComplete: "new-password",
    autoFocus: true,
  },
  {
    name: "password2",
    label: "Retype new password",
    type: "password",
    id: "password2",
    autoComplete: "retype-new-password",
  },
]

interface ResetPasswordConfirmProps extends RouteComponentProps {
  uid?: string
  token?: string
}

const ResetPasswordConfirm = (props: ResetPasswordConfirmProps) => {
  const { state, dispatch } = useContext(UserContext)
  const onResetConfirmSubmit = () =>
    passwordResetConfirm(dispatch, password1, password2, uid, token)

  const { formData, errors, onChange, handleSubmit } = useAuthFormValidation(
    {
      password1: "",
      password2: "",
    },
    onResetConfirmSubmit
  )

  const { password1, password2 } = formData
  const { uid, token } = props

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box className="user-auth-form">
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Confirm Reset Password
        </Typography>
        {state.errMessage && <Alert severity="error">{state.errMessage}</Alert>}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {inputFields.map((inputField, index) => (
            <TextField
              key={index}
              margin="normal"
              required
              fullWidth
              id={inputField.id}
              label={inputField.label}
              name={inputField.name}
              autoComplete={inputField.autoComplete}
              autoFocus={inputField.autoFocus ?? false}
              type={inputField.type ?? undefined}
              onChange={(e) => onChange(e)}
              // onBlur={(e) => onBlur(e)}
              error={Boolean(errors[inputField.name as keyof IAuthFormError])}
              helperText={errors[inputField.name as keyof IAuthFormError]}
            />
          ))}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Confirm Reset Password
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}
export default ResetPasswordConfirm

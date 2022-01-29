import { RouteComponentProps } from "@reach/router"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"
import { register } from "./api/register"
import { useAuthFormValidation } from "./hooks/useAuthFormValidation"
import { IAuthFormError } from "./hooks/useAuthFormValidation"

import Copyright from "./modules/components/Copyright"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Alert from "@mui/material/Alert"

const inputFields = [
  {
    autoComplete: "given-name",
    name: "first_name",
    id: "first_name",
    label: "First Name",
    autoFocus: true,
  },
  {
    id: "last_name",
    label: "Last Name",
    name: "last_name",
    autoComplete: "family-name",
  },
  {
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
  },
  {
    name: "password1",
    label: "Password",
    type: "password",
    id: "password1",
    autoComplete: "new-password",
  },
  {
    name: "password2",
    label: "Retype password",
    type: "password",
    id: "password2",
    autoComplete: "retype-password",
  },
]

const Register = (props: RouteComponentProps) => {
  const { state, dispatch } = useContext(UserContext)
  const onRegisterSubmit = () =>
    register(dispatch, first_name, last_name, email, password1, password2)

  const { formData, errors, onChange, handleSubmit } =
    useAuthFormValidation(
      {
        first_name: "",
        last_name: "",
        email: "",
        password1: "",
        password2: "",
      },
      onRegisterSubmit
    )

  const { first_name, last_name, email, password1, password2 } = formData

  console.log(errors)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box className="user-auth-form">
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        {state.errMessage && <Alert severity="error">{state.errMessage}</Alert>}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {inputFields.map((inputField, index) => (
              <Grid item xs={12} key={index}>
                <TextField
                  autoComplete={inputField.autoComplete}
                  name={inputField.name}
                  required
                  fullWidth
                  id={inputField.id}
                  label={inputField.label}
                  autoFocus={inputField.autoFocus ?? false} 
                  onChange={(e) => onChange(e)}
                  // onBlur={(e) => onBlur(e)}
                  error={Boolean(
                    errors[inputField.name as keyof IAuthFormError]
                  )}
                  helperText={errors[inputField.name as keyof IAuthFormError]}
                />
              </Grid>
            ))}

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  )
}

export default Register

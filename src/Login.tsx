import { RouteComponentProps, useNavigate } from "@reach/router"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"
import { login } from "./api/login"
import { IAuthFormError } from "./hooks/useAuthFormValidation"
import "./styles.css"
import { useAuthFormValidation } from "./hooks/useAuthFormValidation"

import Copyright from "./modules/components/Copyright"
import Alert from "@mui/material/Alert"
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

const inputFields = [
  {
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    autoFocus: true,
  },
  {
    id: "password",
    label: "Password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
  },
]

const Login = (props: RouteComponentProps) => {
  const { state, dispatch } = useContext(UserContext)
  const onLoginSubmit = () => login(dispatch, email, password)
  const navigate = useNavigate()

  const { formData, errors, onChange, handleSubmit } = useAuthFormValidation(
    {
      email: "",
      password: "",
    },
    onLoginSubmit
  )

  const { email, password } = formData

  if (state.isAuthenticated) {
    navigate("/")
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box className="user-auth-form">
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/reset_password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}
export default Login

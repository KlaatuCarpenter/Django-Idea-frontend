import { RouteComponentProps } from "@reach/router"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"
import { passwordReset } from "./api/passwordReset"
import "./styles.css"
import { useAuthFormValidation } from "./hooks/useAuthFormValidation"

import Copyright from "./modules/components/Copyright"
import Alert from "@mui/material/Alert"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

const ResetPassword = (props: RouteComponentProps) => {
  const { state, dispatch } = useContext(UserContext)
  const onPasswordResetSubmit = () => passwordReset(dispatch, email)

  const { formData, errors, onChange, handleSubmit } = useAuthFormValidation(
    {
      email: "",
    },
    onPasswordResetSubmit
  )

  const { email } = formData

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box className="user-auth-form">
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Password Reset
        </Typography>
        <Typography component="h1" variant="h6">
          {"Input the email address,"}
          <br></br>
          {" which you use to login."}
        </Typography>
        {state.errMessage && <Alert severity="error">{state.errMessage}</Alert>}
        {state.detail && <Alert severity="success">{state.detail}</Alert>}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="email"
            onChange={(e) => onChange(e)}
            // onBlur={(e) => onBlur(e)}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Reset password
          </Button>
          <Grid container>
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
export default ResetPassword

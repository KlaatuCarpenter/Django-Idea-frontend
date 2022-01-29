import { RouteComponentProps } from "@reach/router"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"
import { verifyEmail } from "./api/verifyEmail"

import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Alert from "@mui/material/Alert"

interface ActivateProps extends RouteComponentProps {
  key?: string
}

const Activate = (props: ActivateProps) => {
  const { state, dispatch } = useContext(UserContext)
  const { key } = props
  verifyEmail(dispatch, key)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box className="user-auth-form">
        {!state.errMessage && (
          <Alert severity="info">
            {state.detail ? state.detail : "Waiting for activation..."}
          </Alert>
        )}
        {state.errMessage && <Alert severity="error">{state.errMessage}</Alert>}
      </Box>
    </Container>
  )
}
export default Activate

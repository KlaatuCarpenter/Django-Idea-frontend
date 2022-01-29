import { Router } from "@reach/router"
import { UserProvider } from "./context/UserContext"

import Layout from "./hocs/Layout"
import Home from "./Home"
import Activate from "./Activate"
import Login from "./Login"
import Register from "./Register"
import ResetPassword from "./ResetPassword"
import ResetPasswordConfirm from "./ResetPasswordConfirm"

import Privacy from "./modules/views/Privacy"
import Terms from './modules/views/Terms'


function App() {
  
  return (
    <UserProvider>
      <Layout>
        <Router>
          <Home path="/" />
          <Activate path="/dj-rest-auth/registration/account-confirm-email/:key/" />
          <Login path="/login" />
          <Register path="/register" />
          <ResetPassword path="/reset_password" />
          <ResetPasswordConfirm path="/password-reset/confirm/:uid/:token/" />
          <Privacy path="/privacy" />
          <Terms path="/terms" />
        </Router>
      </Layout>
    </UserProvider>
  )
}

export default App

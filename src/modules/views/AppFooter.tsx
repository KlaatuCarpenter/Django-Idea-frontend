import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import appFooterFacebook from "../../static/appFooterFacebook.png"
import appFooterTwitter from "../../static/appFooterTwitter.png"
import Copyright from "../components/Copyright"

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mr: 1,
  "&:hover": {
    bgcolor: "warning.dark",
  },
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex", flexWrap: "wrap"}} justifyContent="center">
                <Box component="a" href="#" sx={iconStyle}>
                  <img src={appFooterFacebook} alt="Facebook" />
                </Box>
                <Box component="a" href="#" sx={iconStyle}>
                  <img src={appFooterTwitter} alt="Twitter" />
                </Box>
              </Grid>
              <Copyright />
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/terms">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/privacy">Privacy</Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  )
}

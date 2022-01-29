import * as React from "react"
import { Theme } from "@mui/material/styles"
import { SxProps } from "@mui/system"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Button from "../components/Button"
import Typography from "@mui/material/Typography"
import { howItWorks } from "../../content/content"

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
}

const stepTitle = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
}

const image = {
  height: 55,
  my: 4,
}

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "secondary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
          {howItWorks.title}
        </Typography>
        <Typography variant="h5" align="center" sx={{ mb: 10 }}>
          {howItWorks.description}
        </Typography>
        <div>
          <Grid container spacing={5}>
            {howItWorks.steps.map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={item}>
                  <Box sx={stepTitle}>{step.title}</Box>
                  <Box
                    component="img"
                    src={step.imgSrc}
                    alt={step.imgAlt}
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/register"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  )
}

export default ProductHowItWorks

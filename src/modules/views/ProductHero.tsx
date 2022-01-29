import * as React from "react"
import Button from "../components/Button"
import Typography from "@mui/material/Typography"
import ProductHeroLayout from "./ProductHeroLayout"
import { productHero } from "../../content/content"

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${productHero.backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={productHero.backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2">
        {productHero.motto}
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        {productHero.callToAction}
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href={productHero.buttonLink}
        sx={{ minWidth: 200 }}
      >
        {productHero.buttonText}
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        {productHero.textUnderButton}
      </Typography>
    </ProductHeroLayout>
  )
}

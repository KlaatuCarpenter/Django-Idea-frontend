import Typography from "@mui/material/Typography"
import React from 'react'
import { copyrightStatement } from "../../content/content"

const Copyright = (props: any) => (
  <React.Fragment>
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {copyrightStatement} {new Date().getFullYear()}
      {"."}
    </Typography>
  </React.Fragment>
)

export default Copyright

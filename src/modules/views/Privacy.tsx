import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import privacy from "../../content/privacy.md"
import { RouteComponentProps } from "@reach/router"
import Markdown from "markdown-to-jsx"
import { useState, useEffect } from 'react'

function Privacy(props: RouteComponentProps) {
    const [privacyMarkdown, setPrivacyMarkdown] = useState("");
    
    useEffect(() => {
        fetch(privacy)
          .then((response) => response.text())
          .then((text) => {
            // Logs a string of Markdown content.
            setPrivacyMarkdown(text);
          });
      }, []);

  return (
    <Container>
      <Box sx={{ mt: 7, mb: 12 }}>
        <Typography variant="h3" gutterBottom align="center">
          Privacy
        </Typography>
        <Markdown>{privacyMarkdown}</Markdown>
      </Box>
    </Container>
  )
}

export default Privacy

import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import terms from "../../content/terms.md"
import { RouteComponentProps } from "@reach/router"
import Markdown from "markdown-to-jsx"
import { useState, useEffect } from 'react'

function Terms(props: RouteComponentProps) {
    const [termsMarkdown, setTermsMarkdown] = useState("");
    
    useEffect(() => {
        fetch(terms)
          .then((response) => response.text())
          .then((text) => {
            // Logs a string of Markdown content.
            setTermsMarkdown(text);
          });
      }, []);

  return (
    <Container>
      <Box sx={{ mt: 7, mb: 12 }}>
        <Typography variant="h3" gutterBottom align="center">
          Terms
        </Typography>
        <Markdown>{termsMarkdown}</Markdown>
      </Box>
    </Container>
  )
}

export default Terms

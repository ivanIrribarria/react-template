import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function SimpleContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ marginTop: 66 }} maxWidth="sm">
        {children}
      </Container>
    </React.Fragment>
  );
}

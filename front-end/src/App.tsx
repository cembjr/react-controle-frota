import React from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";
import GlobalStyle from "./styles/global";
import Menu from "./components/Menu/menu";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div" style={{ height: "100vh" }}>
          <BrowserRouter>
            <Menu />
            <Routes />
          </BrowserRouter>
        </Typography>
      </Container>

      <GlobalStyle />
    </>
  );
}

export default App;

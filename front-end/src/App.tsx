import React from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";
import GlobalStyle from "./Styles/global";
import Menu from "./Components/Menu/Menu";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" style={{ height: "100vh", width: "100vw" }}>
        <Typography component="div">
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

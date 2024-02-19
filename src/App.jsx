import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/MyAppBar";
import Home from "./pages/Home";
import About from "./pages/About";
import {
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  createTheme,
} from "@mui/material";
import SimpleContainer from "./components/SimpleContainer";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Menu />
        <SimpleContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </SimpleContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

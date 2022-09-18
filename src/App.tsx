import { Box, createTheme, ThemeProvider } from "@mui/material";
import React, { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import { darkTheme } from "./theme/dark";
import { lightTheme } from "./theme/light";

export default function App() {
  // This keeps track of the state of the page, if it's in Dark Mode or Light Mode,
  // the setMode function will be passed to the NavBar where the user can
  // toggle the mode of the screen.
  const [mode, setMode] = useState("light");

  //get correct theme from themes folder by using the memorized state
  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );
  // This is the mui function to create your own custom palette of colors.
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar mode={mode} setMode={setMode} />
      </Box>
    </ThemeProvider>
  );
}

import { Box, createTheme, ThemeProvider } from "@mui/material";
import React, { useState, useMemo } from "react";
import Header from "./components/Header";
import VerticalNavbar from "./components/VerticalNavbar";
import { darkTheme } from "./theme/dark";
import { lightTheme } from "./theme/light";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import History from "./pages/History";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import TriviaMenu from "./trivia/components/TriviaMenu";
import TriviaGame from "./trivia/components/TriviaGame";
import TriviaGameOver from "./trivia/components/TriviaGameOver";
import Quotes from "./quotes/Quotes";

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
      <Box bgcolor="background.default" color={"text.primary"}>
        <Router basename="/">
          <VerticalNavbar />
          <Box sx={{ marginLeft: "60px" }}>
            <Header mode={mode} setMode={setMode} />
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="history" element={<History />} />
                <Route path="projects" element={<Projects />} />
                <Route path="trivia-home" element={<TriviaMenu />} />
                <Route path="trivia-game" element={<TriviaGame />} />
                <Route path="trivia-game-over" element={<TriviaGameOver />} />
                <Route path="quotes" element={<Quotes />} />
                {/* <Routse path="galaga" element={<Galaga />} /> */}
              </Route>
            </Routes>
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

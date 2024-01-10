import { Box, createTheme, ThemeProvider } from "@mui/material";
import React, { useState, useMemo, useEffect } from "react";
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
import Footer from "./components/Footer";
import WaterHome from "./water/WaterHome";
import ScrollToTop from "./ScrollToTop";
import BudgetHome from "./budget/BudgetHome";
import RandomHat from "./pages/RandomHat";

export default function App() {
  // This keeps track of the state of the page, if it's in Dark Mode or Light Mode,
  // the setMode function will be passed to the NavBar where the user can
  // toggle the mode of the screen.
  const [mode, setMode] = useState("light");

  const [activeBar, setActiveBar] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  //get correct theme from themes folder by using the memorized state
  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  useEffect(() => {
    let url = window.location.hash;
    console.log(window.location);
    console.log(url);
    if (url.includes("/projects")) {
      setActiveBar([false, false, false, true]);
    } else if (url.includes("/history")) {
      setActiveBar([false, false, true, false]);
    } else if (url.includes("/about")) {
      setActiveBar([false, true, false, false]);
    } else if (url === "#/" || url === "") {
      setActiveBar([true, false, false, false]);
    } else {
      setActiveBar([false, false, false, false]);
    }
  }, []);

  // This is the mui function to create your own custom palette of colors.
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="background.default" color={"text.primary"}>
        <Router basename="/">
          <VerticalNavbar
            mode={mode}
            setMode={setMode}
            activeBar={activeBar}
            setActiveBar={setActiveBar}
          />
          <Box sx={{ marginLeft: { xs: "60px", sm: "0px" } }}>
            <ScrollToTop />
            <Header
              mode={mode}
              setMode={setMode}
              activeBar={activeBar}
              setActiveBar={setActiveBar}
            />
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
                <Route path="water-stats" element={<WaterHome />} />
                <Route path="budget" element={<BudgetHome />} />
                <Route path="random-hat-selection" element={<RandomHat />} />
              </Route>
            </Routes>
            <Footer />
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

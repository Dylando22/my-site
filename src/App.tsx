import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import Header from "./components/Header";
import VerticalNavbar from "./components/VerticalNavbar";
import { darkTheme } from "./theme/dark";
import { lightTheme } from "./theme/light";
import Router from "./Routes";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

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
    const url = window.location.hash;
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
          <Router />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

import { useEffect, useMemo, useState } from "react";
import { Box, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";
import VerticalNavBar from "./components/VerticalNavbar";
import { lightTheme } from "./theme/light";
import { darkTheme } from "./theme/dark";
import ScrollToTop from "./ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Root() {
  // const theme = createTheme(lightTheme);
  const [mode, setMode] = useState("light");

  const [activeBar, setActiveBar] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const url = window.location.hash;
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

  //get correct theme from themes folder by using the memorized state
  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VerticalNavBar
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
        <Outlet />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

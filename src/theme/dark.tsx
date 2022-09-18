import { createTheme } from "@mui/material";
// You can find readable color examples at https://mui.com/material-ui/customization/color/#main-content
import {deepOrange, grey } from "@mui/material/colors";

// This is the mui function to create your own custom palette of colors.
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    common: {
      black: "#fff", //text thats black on light mode
      white: "#fff", //text thats white on light mode
    },
    primary: {
      light: grey[50],
      dark: deepOrange[500],
      main: deepOrange[900], //main color background
    },
    secondary: {
      light: grey[50], //none
      dark: grey[400], //searchBar Background
      main: grey[200], //CardBackground
    },
    // error: {
    //   // light: "",
    //   // dark: "",
    //   // main: grey[400],
    // },
    // warning: {
    //   // light: "",
    //   // dark: "",
    //   // main: grey[400],
    // },
    // info: {
    //   // light: "",
    //   // dark: "",
    //   // main: grey[400],
    // },
    // success: {
    //   // light: "",
    //   // dark: "",
    //   // main: grey[400],
    // },
    // background: {
    //   // paper: "",
    //   // default: "",
    // },
  },
});

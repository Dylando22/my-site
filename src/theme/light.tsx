import { createTheme } from "@mui/material";
// You can find readable color examples at https://mui.com/material-ui/customization/color/#main-content
import { blueGrey, grey, indigo } from "@mui/material/colors";

declare module "@mui/material/styles/createPalette" {
  interface RandomColorOptions {
    activeLink?: string;
    unactiveLink?: string;
    cardBackground?: string;
  }

  interface PaletteOptions {
    random?: RandomColorOptions;
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#000", //text thats black on light mode
      white: "#fff", //text thats white on light mode
    },
    primary: {
      light: indigo[300],
      dark: indigo[900], //none
      main: indigo[700], //main color background
    },
    secondary: {
      light: grey[50], //none
      dark: grey[400], //searchBar Background
      main: grey[300], //CardBackground
    },
    random: {
      activeLink: blueGrey[50],
      unactiveLink: blueGrey[300],
      cardBackground: "white",
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

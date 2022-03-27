/**
 * theme for MUI
 * TODO: create a theme object as per designs
 */
import { createTheme } from "@mui/material/styles";
// import { purple, green, orange, deepOrange } from "@material-ui/core/colors";

// Global styles can be moved to a separate file for ease of maintenance.
// const global = {
//   textRight: {
//     textAlign: "right",
//   },
//   mygrey: "rgba(0, 0, 0, 0.5)",
// };

export const dark = () =>
  createTheme({
    palette: {
      primary: {
        main: "#040f3d",
      },
      secondary: {
        main: "#757575",
      },
    },
    typography: {
      button: {
        // textTransform: "none",   //Using this will stop tranforming all button texts to UPPERCASE
      },
    }, //,
    //common styles.
    //   global
  });

export const light = () =>
  createTheme({
    palette: {
      // type: "light",
      primary: {
        main: "#4bffa5",
      },
      secondary: {
        main: "#040f3d",
      },
    }, //,
    //common styles.
    //   global
  });

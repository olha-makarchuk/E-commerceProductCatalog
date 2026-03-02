import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
      light: "#e3f2fd",
      dark: "#1976d2",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "#ffffff",
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#616161",
    },
  },
});

export default theme;
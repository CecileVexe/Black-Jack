import { createTheme } from "@mui/material";

const { palette } = createTheme();

const theme = createTheme({
  palette: {
    hit: palette.augmentColor({ color: { main: "#5d870e" } }),
    stand: palette.augmentColor({ color: { main: "#c77100" } }),
    doubledown: palette.augmentColor({ color: { main: "#2642e0" } }),
  },
  typography: { allVariants: { color: "#eeeeee" } },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1920,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#11111150",
          padding: "10px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#eeeeee",
          borderColor: "#eee",
          "&:hover": {
            borderColor: "#eeeeee00",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: "#111",
          backgroundColor: "#eee",
        },
        arrow: { color: "#eee" },
      },
    },
  },
});

export default theme;

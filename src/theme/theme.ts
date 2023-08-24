import { createTheme } from "@mui/material";

const { palette } = createTheme();

const theme = createTheme({
  palette: {
    hit: palette.augmentColor({ color: { main: "#5d870e" } }),
    stand: palette.augmentColor({ color: { main: "#c77100" } }),
    doubledown: palette.augmentColor({ color: { main: "#2642e0" } }),
  },
  typography: { allVariants: { color: "#eeeeee" } },
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
  },
});

export default theme;

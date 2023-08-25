import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import { GameContextProvider } from "./GameContext";

interface ProvidersProps {
  children: JSX.Element;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GameContextProvider>{children}</GameContextProvider>
    </ThemeProvider>
  );
};

export default Providers;

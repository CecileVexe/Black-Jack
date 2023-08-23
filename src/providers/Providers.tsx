import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
interface ProvidersProps {
  children: JSX.Element;
}
const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;

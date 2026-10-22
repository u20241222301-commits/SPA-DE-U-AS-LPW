import { FluentProvider } from "@fluentui/react-components";
import { customLuxuryTheme } from "./data/homeData";
import HomePage from "./pages/HomePage";
import "./styles/index.css";

export default function App() {
  return (
    <FluentProvider theme={customLuxuryTheme}>
      <HomePage />
    </FluentProvider>
  );
}

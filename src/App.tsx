import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="app">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

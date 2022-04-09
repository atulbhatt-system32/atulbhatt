import { useState } from "react";

import "./App.css";
import "fontsource-roboto";

import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";
import { ProvideAuth } from "navigation/Auth/ProvideAuth";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { dark, light } from "styles/muiTheme";
import { Navbar } from "components/Navbar/Navbar";

function App() {
  const [darkState, setDarkState] = useState(true);
  // const handleThemeChange = () => {
  //   setDarkState(!darkState);
  //   console.log("theme=", darkState ? "dark" : "light");
  // };

  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={darkState ? dark() : light()}>
          <ProvideAuth>
            <Navbar logoTitle="AtulBhatt" />
            <BrowserRouter>
              <RouterConfig />
            </BrowserRouter>
          </ProvideAuth>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;

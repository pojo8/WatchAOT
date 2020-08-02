import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

// use a theme provider on the top level of our app to allow these declared css-type styles to be accessible from anywhere in the app
//material UI comes with some preset colors and stuff to make the theme of our site easy to change.
// in redeclaring these preset colors below allows us to overwrite them

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#DBDBDB",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

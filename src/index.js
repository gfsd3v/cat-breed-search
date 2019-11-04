import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Style
import "normalize.css";
import "typeface-roboto";

//Page
import HomePage from "pages/HomePage";

// Redux
import { Provider } from "react-redux";
import Store from "state";

ReactDOM.render(
  <Provider store={Store}>
    <HomePage />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();

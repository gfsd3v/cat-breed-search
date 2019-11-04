import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "typeface-roboto";
import HomePage from "pages/HomePage";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<HomePage />, document.getElementById("root"));

serviceWorker.register();

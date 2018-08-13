import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import Store, { initialState } from "./State/Store";

render(
  <Provider store={Store}>
    <App {...initialState} />
  </Provider>,
  document.getElementById("root")
);

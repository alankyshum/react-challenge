import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Checklist from "./Checklist";
import Store, { initialState } from "../State/Store";

render(
  <Provider store={ Store }>
    <Checklist { ...initialState } />
  </Provider>,
  document.getElementById("root")
);

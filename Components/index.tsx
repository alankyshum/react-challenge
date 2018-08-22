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

// reload whole page without module replacement
// parcel has performance issue with HMR
if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload();
    console.log('Windows reloaded on file save');
  })
}

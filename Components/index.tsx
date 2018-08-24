import * as React from 'react';
import { render } from "react-dom";
import DevTools from 'mobx-react-devtools';

import ChecklistState from '../State/Checklist';
import Checklist from "./Checklist";

render(<>
    <Checklist store={ ChecklistState }/>
    <DevTools />
  </>,
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

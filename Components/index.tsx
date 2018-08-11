import Consumer from './State/Consumer';
import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import Provider from './State/Provider';

render(
  <Provider>
    <Consumer>
      <App />
    </Consumer>
  </Provider>
, document.getElementById('root'));

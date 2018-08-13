import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './State/Store';

function reactiveComponent() {
  return render(
    <Provider store={ Store }>
      <App />
    </Provider>
  , document.getElementById('root'));
}

reactiveComponent();
Store.subscribe(reactiveComponent);

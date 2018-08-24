import * as React from 'react';

export default class App extends React.PureComponent {
  render() {
    return <>
      <div>
        <input id="check-all" type="checkbox" />
        <label htmlFor="check-all">Check All</label>
      </div>
      <button>Add</button>
    </>
  }
}

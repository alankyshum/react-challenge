import * as React from 'react';

class Checkbox extends React.Component {
  render() {
    return <div>
      <input type="checkbox" />
      <button>Remove</button>
    </div>;
  }
}

export default class App extends React.Component {
  render() {
    return <>
      <div>
        <input id="check-all" type="checkbox" />
        <label htmlFor="check-all">Check All</label>
      </div>
      <button>Add</button>
      { this.generateChecklist(new Set()) }
    </>
  }

  generateChecklist(items: Set<number>): React.ReactElement<Checkbox>[] {
    return Array.from(items).map(itemID =>
      <Checkbox key={ itemID } />
    );
  }
}

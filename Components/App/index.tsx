import * as React from 'react';

class Checkbox extends React.Component {
  render() {
    return <div>
      <input type="checkbox"/>
      <button>Remove</button>
    </div>;
  }
}

export default class App extends React.Component {
  render() {
    return <>
      <div>
        <input type="checkbox"/>
        <span>Check All</span>
      </div>
      <button>Add</button>
      { this.generateChecklist(10) }
    </>
  }

  generateChecklist(itemsCount: number): React.ReactElement<Checkbox>[] {
    const checklist: React.ReactElement<Checkbox>[] = [];

    for (let i = 0; i < itemsCount; i++) {
      checklist.push(<Checkbox key={ i }/>)
    }

    return checklist;
  }
}

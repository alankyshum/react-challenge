import * as React from 'react';

class Checkbox extends React.Component<{ checklistItemID: number; removeItem: { (): void }, checked: boolean }> {
  render() {
    return <div>
      <input type="checkbox" defaultChecked={ this.props.checked } />
      <span>{ this.props.checklistItemID }</span>
      <button onClick={ this.props.removeItem }>Remove</button>
    </div>;
  }
}

interface AppProps {
  checklistIDs: Set<number>;
  updateChecklist: { (indexToRemove?: number): void; }
  checkAll: { (): void; }
  allChecked: boolean;
}

export default class App extends React.Component<AppProps> {
  render() {
    return <>
      <div>
        <input id="check-all" type="checkbox" onChange={ this.checkAll.bind(this) } defaultChecked={ this.props.allChecked }/>
        <label htmlFor="check-all">Check All</label>
      </div>
      <button onClick={ this.addItem.bind(this) }>Add</button>
      { this.generateChecklist(this.props.checklistIDs, this.props.allChecked) }
    </>
  }

  checkAll() {
    this.props.checkAll();
  }

  addItem() {
    this.props.updateChecklist();
  }

  removeItem(itemIndex: number) {
    this.props.updateChecklist(itemIndex);
  }

  generateChecklist(items: Set<number>, allChecked: boolean): React.ReactElement<Checkbox>[] {
    return Array.from(items).map(itemID =>
      <Checkbox key={ itemID } checklistItemID={ itemID } removeItem={ () => this.removeItem(itemID) } checked={ allChecked }/>
    );
  }
}

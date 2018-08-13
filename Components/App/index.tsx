import * as React from 'react';
import Store from '../State/Store';
import Actions, { updateChecklist } from '../State/Actions';
import { connect } from 'react-redux';

interface CheckboxProps {
  itemID: number;
}

class Checkbox extends React.Component<CheckboxProps> {
  render() {
    return <div>
      <input type="checkbox" />
      <button onClick={ this.removeItem.bind(this) }>Remove</button>
      <span>{ this.props.itemID }</span>
    </div>;
  }

  removeItem() {
    Store.dispatch(updateChecklist(this.props.itemID));
  }
}

class App extends React.Component {
  render() {
    return <>
      <div>
        <input id="check-all" type="checkbox" />
        <label htmlFor="check-all">Check All</label>
      </div>
      <button onClick={ this.addChecklistItem }>Add</button>
      {
        Array.from(Store.getState().checklistIDs).map(itemID =>
          <Checkbox key={ itemID } itemID={ itemID } />
        )
      }
    </>
  }

  addChecklistItem() {
    Store.dispatch(updateChecklist());
  }

  generateChecklist(items: Set<number>): React.ReactElement<Checkbox>[] {
    return Array.from(items).map(itemID =>
      <Checkbox key={ itemID } itemID={ itemID } />
    );
  }
}

export default connect(store => store, Actions)(App);

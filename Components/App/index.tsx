import * as React from 'react';
import Store from '../State/Store';
import Actions, { ReducerAction } from '../State/Actions';
import { connect } from 'react-redux';

class Checkbox extends React.Component {
  render() {
    return <div>
      <input type="checkbox" />
      <button>Remove</button>
    </div>;
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
      { this.generateChecklist(Store.getState().checklistIDs) }
    </>
  }

  addChecklistItem() {
    Store.dispatch({ type: ReducerAction.UPDATE_CHECKLIST, payload: {} });
  }

  generateChecklist(items: Set<number>): React.ReactElement<Checkbox>[] {
    return Array.from(items).map(itemID =>
      <Checkbox key={ itemID } />
    );
  }
}

export default connect(store => store, Actions)(App);

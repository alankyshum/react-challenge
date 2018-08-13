import * as React from 'react';
import { connect } from 'react-redux';

import Checkbox from '../Checkbox';
import Actions, { updateChecklist } from '../State/Actions';
import Store, { ChecklistState } from '../State/Store';

class App extends React.Component<ChecklistState> {
  render() {
    return <>
      <div>
        <input id="check-all" type="checkbox" />
        <label htmlFor="check-all">Check All</label>
      </div>
      <button onClick={ this.addChecklistItem }>Add</button>
      { this.generateChecklist(this.props.checklistIDs) }
    </>
  }

  generateChecklist(checklistIDs: number[]): React.ReactElement<Checkbox>[] {
    // only support array, but not set type
    return checklistIDs.map(itemID =>
      <Checkbox key={ itemID } itemID={ itemID } />
    );
  }

  addChecklistItem() {
    Store.dispatch(updateChecklist());
  }
}

export default connect(store => store, Actions)(App);

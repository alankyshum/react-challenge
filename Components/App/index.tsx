import * as React from 'react';
import { connect } from 'react-redux';

import { Checkbox } from '../Checkbox';
import Actions from '../State/Actions';
import Store, { ChecklistState } from '../State/Store';
import { Dispatch, Action } from 'redux';

interface DispatchProps {
  updateChecklist: { (removedItemKey?: number): Action }
}

class App extends React.Component<ChecklistState & DispatchProps> {
  render() {
    return <>
      <div>
        <input id="check-all" type="checkbox" onChange={ this.toggleCheckAll } checked={ this.props.checkedAll }/>
        <label htmlFor="check-all">Check All</label>
      </div>
      <button onClick={ this.addChecklistItem.bind(this) }>Add</button>
      { this.generateChecklist(this.props.checklistIDs) }
    </>
  }

  toggleCheckAll() {
    Store.dispatch(Actions.toggleChecked());
  }

  generateChecklist(checklistIDs: number[]): React.ReactElement<Checkbox>[] {
    // only support array, but not set type
    return checklistIDs.map(itemID =>
      <Checkbox key={ itemID } itemID={ itemID } />
    );
  }

  addChecklistItem() {
    this.props.updateChecklist();
  }
}

function mapStateToProps(store: ChecklistState) {
  return {
    checklistIDs: store.checklistIDs
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updateChecklist() { dispatch(Actions.updateChecklist()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

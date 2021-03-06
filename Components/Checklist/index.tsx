import * as React from 'react';
import { connect } from 'react-redux';

import Checkbox from '../Checkbox';
import { ChecklistDispatch, ChecklistState, mapStateToProps, mapDispatchToProps } from './state';

class App extends React.PureComponent<ChecklistState & ChecklistDispatch> {
  render() {
    return <>
      <div>
        <input id="check-all" type="checkbox"
          checked={ this.props.checkedAll }
          onChange={ () => this.props.toggleChecklist() }
          />
        <label htmlFor="check-all">Check All</label>
      </div>
      <button onClick={ () => this.props.updateChecklist() }>Add</button>
      { this.generateChecklist(this.props.checklistIDs) }
    </>
  }

  generateChecklist(checklistIDs: number[]): React.ReactNode[] {
    // only support array, but not set type
    return checklistIDs.map(itemID =>
      <Checkbox key={ itemID } itemID={ itemID } />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

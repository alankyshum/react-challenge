import * as React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps, ChecklistDispatch, CheckboxState } from './state';

interface CheckboxProps {
  itemID: number;
}

class Checkbox extends React.Component<CheckboxProps & ChecklistDispatch & CheckboxState> {
  render() {
    return <div>
      <input type="checkbox" checked={ this.isChecked() }/>
      <button onClick={ this.removeItem }>Remove</button>
    </div>;
  }

  removeItem = () => {
    this.props.updateChecklist(this.props.itemID);
  }

  isChecked = (): boolean => {
    return this.props.checkedList.includes(this.props.itemID);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);

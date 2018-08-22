import * as React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps, ChecklistDispatch, CheckboxState } from './state';

interface CheckboxProps {
  itemID: number;
}

class Checkbox extends React.Component<CheckboxProps & ChecklistDispatch & CheckboxState> {
  render() {
    return <div>
      <input type="checkbox" checked={ this.isChecked() } onChange={ () => this.toggleSelf() }/>
      <button onClick={ this.removeItem }>Remove</button>
    </div>;
  }

  removeItem = () => {
    this.props.updateChecklist(this.props.itemID);
  }

  isChecked = (): boolean => {
    return this.props.checkedList.includes(this.props.itemID);
  }

  toggleSelf = () => {
    const selfChecked = this.props.checkedList.includes(this.props.itemID);
    const checkedSet = new Set(this.props.checkedList);


    if (selfChecked) {
      checkedSet.delete(this.props.itemID);
    } else {
      checkedSet.add(this.props.itemID);
    }

    this.props.toggleItem(Array.from(checkedSet));
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);

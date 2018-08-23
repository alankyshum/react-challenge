import * as React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps, CheckboxDispatch, CheckboxState } from './state';

interface CheckboxProps {
  itemID: number;
}

class Checkbox extends React.Component<CheckboxProps & CheckboxDispatch & CheckboxState> {
  render() {
    return <div>
      <input type="checkbox" checked={ this.isChecked } onChange={ () => this.toggleSelf() }/>
      <button onClick={ this.removeItem }>Remove</button>
    </div>;
  }

  get isChecked(): boolean {
    return this.props.checkedList.includes(this.props.itemID);
  }

  removeItem = () => {
    this.props.updateChecklist(this.props.itemID);
  }

  toggleSelf = () => {
    this.props.toggleItem(this.props.itemID);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);

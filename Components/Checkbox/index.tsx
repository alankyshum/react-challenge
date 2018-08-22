import * as React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, ChecklistDispatch } from './state';

interface CheckboxProps {
  itemID: number;
}

class Checkbox extends React.Component<CheckboxProps & ChecklistDispatch> {
  render() {
    return <div>
      <input type="checkbox" />
      <button onClick={ this.removeItem }>Remove</button>
    </div>;
  }

  removeItem = () => {
    this.props.updateChecklist(this.props.itemID);
  }
}

export default connect(null, mapDispatchToProps)(Checkbox);

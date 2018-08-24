import { CheckboxState } from '../../State/Checklist';
import * as React from 'react';

interface CheckboxProps {
  item: CheckboxState;
  checked: boolean;
  removeItem(): void;
  toggleItem(): void;
}

export default class Checkbox extends React.Component<CheckboxProps> {
  render() {
    return <div>
      <input type="checkbox" checked={ this.props.checked } onChange={ this.props.toggleItem }/>
      <button onClick={ this.props.removeItem }>Remove</button>
    </div>;
  }
}

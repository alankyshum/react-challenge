import * as React from 'react';

interface CheckboxProps {
  itemID: number;
  removeItem(): void;
}

export default class Checkbox extends React.Component<CheckboxProps> {
  render() {
    return <div>
      <input type="checkbox"/>
      <button onClick={ this.props.removeItem }>Remove</button>
    </div>;
  }
}

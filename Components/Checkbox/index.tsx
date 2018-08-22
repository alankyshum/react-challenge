import * as React from 'react';

interface CheckboxProps {
  itemID: number;
}

export default class Checkbox extends React.Component<CheckboxProps> {
  render() {
    return <div>
      <input type="checkbox" />
      <button>Remove</button>
    </div>;
  }
}

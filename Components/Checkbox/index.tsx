import * as React from 'react';

import { updateChecklist } from '../State/Actions';
import Store from '../State/Store';

interface CheckboxProps {
  itemID: number;
}

export default class Checkbox extends React.Component<CheckboxProps> {
  render() {
    return <div>
      <input type="checkbox" />
      <button onClick={ this.removeItem.bind(this) }>Remove</button>
    </div>;
  }

  removeItem() {
    Store.dispatch(updateChecklist(this.props.itemID));
  }
}

import Checkbox from '../Checkbox';
import { ChecklistState } from '../../State/Checklist';
import { observer } from 'mobx-react';
import * as React from 'react';

interface ChecklistProps {
  store: ChecklistState;
}

@observer
class Checklist extends React.Component<ChecklistProps> {
  render() {
    return <>
      <div>
        <input id="check-all" type="checkbox" checked={ this.props.store.allChecked } readOnly={ true }/>
        <label htmlFor="check-all" onClick={ this.props.store.toggleAll }>Check All</label>
      </div>
      <button onClick={ this.addItem }>Add</button>
      { this.checklist }
    </>
  }

  private addItem = () => {
    this.props.store.addItem();
  }

  get checklist(): React.ReactNode[] {
    return this.props.store.checkboxes.map(checkbox =>
      <Checkbox key={ checkbox.itemID }
        item={ checkbox }
        checked={ checkbox.checked }
        toggleItem={ () => this.props.store.toggleItem(checkbox.itemID) }
        removeItem={ () => this.props.store.removeItem(checkbox.itemID) }
      ></Checkbox>
    );
  }
}

export default observer(Checklist);

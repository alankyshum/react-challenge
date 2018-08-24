import Checkbox from '../Checkbox';
import { ChecklistState } from '../../State/Checklist';
import { observer } from 'mobx-react';
import * as React from 'react';
import { computed } from 'mobx';

interface ChecklistProps {
  store: ChecklistState;
}

@observer
class Checklist extends React.Component<ChecklistProps> {
  render() {
    return <>
      <div>
        <input id="check-all" type="checkbox" />
        <label htmlFor="check-all">Check All</label>
      </div>
      <button onClick={ this.addItem }>Add</button>
      { this.checklist }
    </>
  }

  private addItem = () => {
    this.props.store.addItem();
  }

  get checklist(): React.ReactNode[] {
    return this.props.store.checklistIDs.map(checklistID =>
      <Checkbox key={ checklistID }
        itemID={ checklistID }
        removeItem={ () => this.props.store.removeItem(checklistID) }
      ></Checkbox>
    );
  }
}

export default observer(Checklist);

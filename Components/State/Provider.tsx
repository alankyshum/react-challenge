import * as React from 'react';

interface State {
  checklistIDs: Set<number>;
  totalCount: number;
  allChecked: boolean;
  [key: string]: any;
}

const DEFAULT_STATE: State = {
  checklistIDs: new Set(),
  allChecked: false,
  totalCount: 0
}

export const ChecklistContext = React.createContext(DEFAULT_STATE);

export default class Provider extends React.Component {
  state = DEFAULT_STATE;

  updateChecklist(indexToRemove?: number) {
    const newChecklistIDs = this.state.checklistIDs;
    if (typeof indexToRemove === 'number') {
      newChecklistIDs.delete(indexToRemove);
      this.setState({ checklistIDs: newChecklistIDs });
    } else {
      const newTotalCount = this.state.totalCount + 1;
      newChecklistIDs.add(newTotalCount);
      this.setState({ checklistIDs: newChecklistIDs, totalCount: newTotalCount });
    }
  }

  checkAll() {
    this.setState({ allChecked: !this.state.allChecked });
  }

  render() {
    return (
      <ChecklistContext.Provider
        value={{
          ...this.state,
          updateChecklist: this.updateChecklist.bind(this),
          checkAll: this.checkAll.bind(this),
        }}
      >
        { this.props.children }
      </ChecklistContext.Provider>
    );
  }
}

import * as React from 'react';
import { ChecklistContext } from './Provider';

export default class Consumer extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ChecklistContext.Consumer>
        {({ checklistIDs, updateChecklist, allChecked, checkAll }) => {
          return React.Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement<any>, {
              checklistIDs,
              updateChecklist,
              allChecked,
              checkAll
            })
          );
        }}
      </ChecklistContext.Consumer>
    )
  }
}

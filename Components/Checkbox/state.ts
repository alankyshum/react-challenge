import { Dispatch } from 'redux';

import { ReducerAction } from '../../State/Actions';

export interface ChecklistDispatch {
  updateChecklist: { (removedItemKey?: number): void }
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updateChecklist(removedItemKey?: number): void {
      dispatch({
        type: ReducerAction.UPDATE_CHECKLIST,
        payload: { removedItemKey }
      });
    }
  };
}

import { Dispatch } from 'redux';

import { StateInterface } from '../../State/Store';
import { ReducerAction } from '../../State/Actions';

export interface ChecklistState {
  checklistIDs: number[];
  totalItemsCreated: number;
  checkedAll: boolean;
}

export interface ChecklistDispatch {
  updateChecklist: { (removedItemKey?: number): void }
}

export function mapStateToProps(state: StateInterface): ChecklistState {
  return state.checklist;
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

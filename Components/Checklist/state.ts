import { Dispatch } from 'redux';

import { StateInterface } from '../../State/Store';
import { ReducerAction } from '../../State/Actions';

export interface ChecklistState {
  checklistIDs: number[];
  totalItemsCreated: number;
  checkedIDs: number[];
  checkedAll: boolean;
}

export interface ChecklistDispatch {
  updateChecklist(removedItemKey?: number): void;
  toggleChecklist(): void;
}

export function mapStateToProps(state: StateInterface): ChecklistState {
  return {
    ...state.checklist,
    checkedAll: isAllChecked(state.checklist.checkedIDs, state.checklist.checklistIDs),
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updateChecklist(removedItemKey?: number): void {
      dispatch({
        type: ReducerAction.UPDATE_CHECKLIST,
        payload: { removedItemKey }
      });
    },
    toggleChecklist: () => {
      dispatch({
        type: ReducerAction.TOGGLE_CHECK_ALL,
        payload: {}
      });
    }
  };
}

export function isAllChecked<T extends any[]>(checklist: T, checkedList: T): boolean {
  return checklist.length === checkedList.length;
}

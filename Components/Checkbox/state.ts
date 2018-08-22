import { Dispatch } from 'redux';

import { ReducerAction } from '../../State/Actions';
import { StateInterface } from '../../State/Store';
import { ChecklistState } from '../Checklist/state';

export interface ChecklistDispatch {
  updateChecklist(removedItemKey?: number): void;
  toggleItem(newChecklist: ChecklistState['checkedIDs']): void;
}

export interface CheckboxState {
  checkedList: number[];
}

export function mapStateToProps(state: StateInterface) {
  return {
    checkedList: state.checklist.checkedIDs
  }
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updateChecklist(removedItemKey?: number): void {
      dispatch({
        type: ReducerAction.UPDATE_CHECKLIST,
        payload: { removedItemKey }
      });
    },
    toggleItem(newChecklist: ChecklistState['checkedIDs']) {
      dispatch({
        type: ReducerAction.TOGGLE_ITEM,
        payload: { newChecklist }
      })
    }
  };
}

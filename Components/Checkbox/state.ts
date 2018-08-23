import { Dispatch } from 'redux';

import { ReducerAction } from '../../State/Actions';
import { StateInterface } from '../../State/Store';

export interface CheckboxDispatch {
  updateChecklist(removedItemKey?: number): void;
  toggleItem(itemID: number): void;
}

export interface CheckboxState {
  checkedList: number[];
}

export function mapStateToProps(state: StateInterface): CheckboxState {
  return {
    checkedList: state.checklist.checkedIDs
  }
}

export function mapDispatchToProps(dispatch: Dispatch): CheckboxDispatch {
  return {
    updateChecklist(removedItemKey?: number) {
      dispatch({
        type: ReducerAction.UPDATE_CHECKLIST,
        payload: { removedItemKey }
      });
    },
    toggleItem(itemID: number) {
      dispatch({
        type: ReducerAction.TOGGLE_ITEM,
        payload: { itemID }
      })
    }
  };
}

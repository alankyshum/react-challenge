import { Action, ReducerAction } from './Actions';
import { StateInterface, initialState } from './Store';
import { isAllChecked } from '../Components/Checklist/state';

export default function checklist(state: StateInterface = initialState, action: Action): StateInterface {
  switch (action.type) {
    case ReducerAction.UPDATE_CHECKLIST: {
      const { removedItemKey } = action.payload;
      let newChecklist = new Set(state.checklist.checklistIDs);
      let totalItemsCreated = state.checklist.totalItemsCreated;

      if (removedItemKey) {
        newChecklist.delete(removedItemKey);
      } else {
        newChecklist.add(++totalItemsCreated);
      }

      return {
        ...state,
        checklist: {
          ...state.checklist,
          totalItemsCreated,
          checklistIDs: Array.from(newChecklist)
        },
      };
    }

    case ReducerAction.TOGGLE_CHECK_ALL: {
      const allChecked = isAllChecked(
        state.checklist.checkedIDs,
        state.checklist.checklistIDs
      );

      return {
        ...state,
        checklist: {
          ...state.checklist,
          checkedIDs: allChecked ? [] : state.checklist.checklistIDs,
        }
      };
    }

    case ReducerAction.TOGGLE_ITEM: {
      const { newChecklist } = action.payload;
      if (!newChecklist) return state;

      return {
        ...state,
        checklist: {
          ...state.checklist,
          checkedIDs: newChecklist,
        }
      };
    }

    default: return state;
  }
}

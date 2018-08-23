import { Action, ReducerAction } from './Actions';
import { StateInterface, initialState } from './Store';
import { isAllChecked } from '../Components/Checklist/state';

export default function checklist(state: StateInterface = initialState, action: Action): StateInterface {
  switch (action.type) {
    case ReducerAction.UPDATE_CHECKLIST: {
      const { removedItemKey } = action.payload;
      let newChecklist = new Set(state.checklist.checklistIDs);
      let checkedIDs = new Set(state.checklist.checkedIDs);
      let totalItemsCreated = state.checklist.totalItemsCreated;

      if (removedItemKey) {
        newChecklist.delete(removedItemKey);
        checkedIDs.delete(removedItemKey);
      } else {
        newChecklist.add(++totalItemsCreated);
      }

      return {
        ...state,
        checklist: {
          ...state.checklist,
          totalItemsCreated,
          checklistIDs: Array.from(newChecklist),
          checkedIDs: Array.from(checkedIDs)
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
      const { itemID } = action.payload;
      if (!itemID) return state;

      const checkedIDs = new Set(state.checklist.checkedIDs);
      const isItemChecked = checkedIDs.has(itemID);
      checkedIDs[isItemChecked ? 'delete' : 'add'](itemID);

      return {
        ...state,
        checklist: {
          ...state.checklist,
          checkedIDs: Array.from(checkedIDs),
        }
      };
    }

    default: return state;
  }
}

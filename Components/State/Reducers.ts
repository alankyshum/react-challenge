import { Action, ReducerAction } from './Actions';
import { ChecklistState, initialState } from './Store';

export default function checklist(state: ChecklistState = initialState, action: Action) {
  switch (action.type) {
    case ReducerAction.UPDATE_CHECKLIST: {
      const { removedItemKey } = action.payload;
      let newChecklist = new Set(state.checklistIDs);
      let totalItemsCreated = state.totalItemsCreated;

      if (removedItemKey) {
        newChecklist.delete(removedItemKey);
      } else {
        newChecklist.add(++totalItemsCreated);
      }

      return {
        ...state,
        checklistIDs: Array.from(newChecklist),
        totalItemsCreated: totalItemsCreated,
      }
    }

    default: return state;
  }
}

import { Action, ReducerAction } from './Actions';
import { ChecklistState, initialState } from './Store';

export default function checklist(state: ChecklistState = initialState, action: Action) {
  switch (action.type) {
    case ReducerAction.UPDATE_CHECKLIST: {
      const { removedItemKey } = action.payload;
      let newChecklist = state.checklistIDs;
      let totalItemsCreated = state.totalItemsCreated;

      if (!removedItemKey) {
        newChecklist.add(++totalItemsCreated);
      } else {
        newChecklist.delete(removedItemKey);
      }

      return {
        ...state,
        checklistIDs: newChecklist,
        totalItemsCreated: totalItemsCreated,
      }
    }

    default: return state;
  }
}

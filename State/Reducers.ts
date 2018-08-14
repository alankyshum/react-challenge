import { Action, ReducerAction } from './Actions';
import { StateInterface, initialState } from './Store';

export default function checklist(state: StateInterface = initialState, action: Action): StateInterface {
  switch (action.type) {
    case ReducerAction.UPDATE_CHECKLIST: {
      const newChecklistState = state.checklist;
      const { removedItemKey } = action.payload;
      let newChecklist = new Set(newChecklistState.checklistIDs);
      let totalItemsCreated = newChecklistState.totalItemsCreated;

      if (removedItemKey) {
        newChecklist.delete(removedItemKey);
      } else {
        newChecklist.add(++totalItemsCreated);
      }

      newChecklistState.checklistIDs = Array.from(newChecklist);

      return {
        ...state,
        checklist: newChecklistState,
      };
    }

    default: return state;
  }
}

import { Action, ReducerAction } from './Actions';
import { StateInterface, initialState } from './Store';

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

      console.log(newChecklist);

      return {
        ...state,
        checklist: {
          ...state.checklist,
          totalItemsCreated,
          checklistIDs: Array.from(newChecklist)
        },
      };
    }

    default: return state;
  }
}

export enum ReducerAction {
  'UPDATE_CHECKLIST',
  'TOGGLE_CHECK_ALL'
}

export interface Action {
  type: ReducerAction;
  payload: { [key: string]: any; }
}

export default {
  updateChecklist(removedItemKey?: number): Action {
    return {
      type: ReducerAction.UPDATE_CHECKLIST,
      payload: { removedItemKey }
    }
  },
  toggleChecked(): Action {
    return {
      type: ReducerAction.TOGGLE_CHECK_ALL,
      payload: {}
    }
  }
};

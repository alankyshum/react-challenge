export enum ReducerAction {
  'UPDATE_CHECKLIST'
}

export interface Action {
  type: ReducerAction;
  payload: { [key: string]: any; }
}

export function updateChecklist(removedItemKey?: number): Action {
  return {
    type: ReducerAction.UPDATE_CHECKLIST,
    payload: { removedItemKey }
  }
}

export default {
  updateChecklist
};

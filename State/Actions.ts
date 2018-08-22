export enum ReducerAction {
  'UPDATE_CHECKLIST',
  'TOGGLE_CHECK_ALL',
  'TOGGLE_ITEM'
}

export interface Action {
  type: ReducerAction;
  payload: { [key: string]: any; }
}

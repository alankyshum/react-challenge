import { createStore } from "redux";
import reducer from './Reducers';

export interface ChecklistState {
  checklistIDs: number[];
  totalItemsCreated: number;
  checkedAll: boolean;
}

export const initialState: ChecklistState = {
  checklistIDs: [],
  totalItemsCreated: 0,
  checkedAll: false
}

export default createStore(reducer);

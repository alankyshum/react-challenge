import { createStore } from "redux";
import reducer from './Reducers';
import { ChecklistState } from '../Components/Checklist/state';

export interface StateInterface {
  checklist: ChecklistState;
}

export const initialState: StateInterface = {
  checklist: {
    checklistIDs: [],
    checkedIDs: [],
    totalItemsCreated: 0,
    checkedAll: false
  }
}

export default createStore(reducer);

import { observable } from 'mobx';

export interface ChecklistState {
  checklistIDs: number[]
  addItem(): void;
}

class ChecklistStore {
  totalCreatedItem: number = 0;
  @observable checklistIDs: number[] = [];

  addItem() {
    this.totalCreatedItem++;
    this.checklistIDs.push(this.totalCreatedItem);
  }
}

export default new ChecklistStore();

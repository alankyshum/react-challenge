import { observable } from 'mobx';

export interface ChecklistState {
  checklistIDs: number[]
  addItem(): void;
  removeItem(itemID: number): void;
}

class ChecklistStore {
  totalCreatedItem: number = 0;
  @observable checklistIDs: number[] = [];

  addItem() {
    this.totalCreatedItem++;
    this.checklistIDs.push(this.totalCreatedItem);
  }

  removeItem(itemID: number) {
    this.checklistIDs.splice(this.checklistIDs.indexOf(itemID), 1);
  }
}

export default new ChecklistStore();

import { observable } from 'mobx';

export interface CheckboxState {
  itemID: number;
  checked: boolean;
}

export interface ChecklistState {
  checkboxes: CheckboxState[]
  addItem(): void;
  removeItem(itemID: number): void;
  toggleItem(itemID: number): void;
}

class ChecklistStore {
  totalCreatedItem: number = 0;
  @observable checkboxes: CheckboxState[] = [];

  addItem() {
    this.totalCreatedItem++;
    this.checkboxes.push({
      itemID: this.totalCreatedItem,
      checked: false,
    });
  }

  removeItem(itemID: number) {
    this.checkboxes.splice(this.findIndex(itemID), 1);
  }

  toggleItem(itemID: number): void {
    const targetCheckbox = this.checkboxes.find(checkbox => checkbox.itemID === itemID);
    if (!targetCheckbox) return;
    targetCheckbox.checked = !targetCheckbox.checked;
  }

  private findIndex(itemID: number): number {
    return this.checkboxes.findIndex(checkbox => checkbox.itemID === itemID);
  }
}

export default new ChecklistStore();

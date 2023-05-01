import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableNumber {
  private tableNumber;

  getTableNumber(): number 
  {
    return this.tableNumber;
  }

  setTableNumber(tableNumber: number): void 
  {
    this.tableNumber = tableNumber;
  }
}

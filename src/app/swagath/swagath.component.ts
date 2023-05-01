import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TableNumber } from 'src/app/tablenumber.service';


@Component({
  selector: 'app-swagath',
  templateUrl: './swagath.component.html',
  styleUrls: ['./swagath.component.css']
})
export class SwagathComponent 
{
  selectedTables: Set<string> = new Set<string>();

  constructor(private router: Router,private tableno:TableNumber) { }


  toggleTable(tableId: string,tablenum:number): void 
  {
    if (this.selectedTables.has(tableId)) 
    {
      this.selectedTables.delete(tableId);
      console.log("Unselected")
    } 
    else
    {
      this.selectedTables.add(tableId);
      this.tableno.setTableNumber(tablenum);
      console.log("selected")
    }
    
  } 

  onButtonClick() 
  {
    this.router.navigate(['/details']);
  }

}

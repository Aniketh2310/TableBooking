import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-swagath',
  templateUrl: './swagath.component.html',
  styleUrls: ['./swagath.component.css']
})
export class SwagathComponent 
{
  selectedTables: Set<string> = new Set<string>();

  constructor(private router: Router) { }
  toggleTable(tableId: string): void 
  {
    if (this.selectedTables.has(tableId)) 
    {
      this.selectedTables.delete(tableId);
      console.log("Unselected")
    } 
    else
    {
      this.selectedTables.add(tableId);
      console.log("selected")
    }
  }
  

   onButtonClick() 
  {
    this.router.navigate(['/details']);
  }

}

import { Component, Output,EventEmitter  } from '@angular/core';
import { Restaurant } from '../restaurant.model';
import { ReservationsService } from '../reservations.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { TableNumber } from 'src/app/tablenumber.service';


@Component({
  selector: 'app-athidhi-layout',
  templateUrl: './athidhi-layout.component.html',
  styleUrls: ['./athidhi-layout.component.css']
})
export class AthidhiLayoutComponent 
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


















    // res:Restaurant;
    // id:number;

    // constructor(private reservationsService:ReservationsService,
    //             private route : ActivatedRoute)
    // {
        
    // }

    // ngOnInit() 
    // {
    //    this.route.params.subscribe(
    //     (params:Params)=>{
    //       this.id=+params[0];
    //       this.res=this.reservationsService.getRes(this.id);

    //     }
    //    )
    // };


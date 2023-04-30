import { Component, Output,EventEmitter  } from '@angular/core';
import { Restaurant } from '../restaurant.model';
import { ReservationsService } from '../reservations.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-athidhi-layout',
  templateUrl: './athidhi-layout.component.html',
  styleUrls: ['./athidhi-layout.component.css']
})
export class AthidhiLayoutComponent 
{
  selectedTables: Set<string> = new Set<string>();
  @Output() tableSelected = new EventEmitter<number>();


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
      // this.reservationsService.setTableNumber(tableId);
      console.log("selected")
    }
    
  }
  

   onButtonClick() 
  {
    this.router.navigate(['/details']);
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
}
